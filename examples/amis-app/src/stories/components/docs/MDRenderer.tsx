import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { getTheme } from 'amis';
import { LazyComponent } from 'amis-core';
import classnames from 'classnames';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Popover, Typography, Layout, Button } from 'antd';
import Play from './Play';
import useFixHtmlPreview from './useFixHtmlPreview'; // Import the custom hook
import { scroller } from 'react-scroll';

const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

// Create a context for the document
const DocContext = createContext();

const CodePreview = ({ container, setAsideFolded, setHeaderVisible, ...rest }) => {
  return <Play {...rest} mini />;
};

const useDocumentHash = () => {
  const location = useLocation();
  const [hash, setHash] = useState(location.hash);

  useEffect(() => {
    setHash(location.hash);
  }, [location.hash]);

  return hash;
};


const useScrollToHash = () => {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash && hash.length > 1) {
      scroller.scrollTo(hash.substring(1), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [hash]);
};


const Preview = ({ viewMode, theme }) => {
  const ref = useFixHtmlPreview(theme); // Use the custom hook
  const roots = useRef([]);
  const { doc } = useContext(DocContext);

  const renderSchema = () => {
    const scripts = ref.current.querySelectorAll('script[type="text/schema"]');
    if (!scripts || !scripts.length) return;

    scripts.forEach(script => {
      const props = Array.from(script.attributes).reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

      const dom = document.createElement('div');
      let height = props.height ? parseInt(props.height, 10) : 200;

      if (viewMode === 'mobile' && height < 500) {
        height = 500;
      }

      dom.setAttribute('class', 'doc-play-ground');
      const origin = script.parentNode;
      origin.parentNode.replaceChild(dom, origin);

      const root = createRoot(dom);
      roots.current.push(root);
      root.render(
        <LazyComponent
          {...props}
          container={() => ref.current}
          component={CodePreview}
          code={script.innerText}
          scope={props.scope}
          height={height}
          placeholder="Loading, please wait..."
        />
      );
    });
  };

  useEffect(() => {
    renderSchema();
    return () => {
      roots.current.forEach(root => root.unmount());
    };
  }, [doc]);

  return (
    <div className="MDPreview">
      <div className="markdown" ref={ref}>
        Doc
      </div>
    </div>
  );
};

const withDoc = (Component) => {
  return function WrappedComponent({ doc, ...props }) {
    const processedDoc = doc.default || doc;
    return (
      <DocContext.Provider value={{ doc: processedDoc }}>
        <Component {...props} />
      </DocContext.Provider>
    );
  };
};

const MarkdownRenderer = (props) => {
  const [headingPopover, setHeadingPopover] = useState(false);
  const popoverDom = useRef(null);
  const originTitle = useRef(document.title);
  const { doc } = useContext(DocContext);
  const hash = useDocumentHash();
  const location = useLocation();
  const { locale, moduleName, relativePath } = useParams();

  useEffect(() => {
    if (doc.title) {
      document.title = doc.title;
    }
    return () => {
      document.title = originTitle.current;
    };
  }, [doc.title]);

  useScrollToHash(hash);

  const renderHeading = (children) => {
    return children.map((child, idx) => (
      <div
        key={`${child.fullPath}-${idx}`}
        className={classnames('Doc-headingList-item', {
          'is-active': hash === child.fullPath
        })}
      >
        <a href={`#${child.fragment}`}>{child.label}</a>
        {child.children && child.children.length ? renderHeading(child.children) : null}
      </div>
    ));
  };

  const handlePopOverClick = (e) => {
    setHeadingPopover(false);
    e.stopPropagation();
  };

  const renderHeadingPopover = () => {
    return headingPopover ? (
      <Popover
        className="Doc-headingPopover"
        onHide={() => setHeadingPopover(false)}
        overlay
        onClick={handlePopOverClick}
      >
        {renderHeading(doc.toc.children)}
      </Popover>
    ) : null;
  };

  const pathJoin = (...parts) => {
    const separator = '/';
    const normalizedParts = parts
      .filter(part => part != null && (typeof part === 'string' || typeof part === 'number'))
      .map((item, index, arr) => {
        let part = `${item}`;
        if (index > 0) {
          part = part.replace(/^[\/]+/, '');
        }
        return index < arr.length - 1 ? part.replace(/[\/]+$/, '') : part.replace(/[\/]+$/, '/');
      });
    return normalizedParts.join(separator);
  };

  const getDocEditLink = () => {
    const { ContextPath } = props;
    const basePath = 'https://github.com/baidu/amis/edit/master';

    try {
      if (moduleName === 'docs') {
        return pathJoin(basePath, `/docs/${locale}/`, `${relativePath}.md`);
      } else if (
        moduleName === 'style' &&
        !/style\/(index|css-vars|responsive-design|state)$/.test(location.pathname)
      ) {
        const fileName = location.pathname.split('/')?.slice(-1)?.[0];
        return pathJoin(basePath, `/packages/amis-ui/scss/helper`, relativePath.replace(fileName, `/_${fileName}.scss`));
      } else {
        return pathJoin(basePath, `/docs/${locale}/${moduleName}`, `/${relativePath}.md`);
      }
    } catch (error) {
      return pathJoin(basePath, 'docs');
    }
  };

  const { prevDoc, nextDoc, ContextPath } = props;

  return (
    <Layout>
      <Content className="Doc-content">
        {doc.title ? (
          <div className="Doc-title">
            <Title level={1}>{doc.title}</Title>
            {doc?.toc.children?.length ? (
              <Button
                ref={popoverDom}
                onClick={() => setHeadingPopover(!headingPopover)}
                className="Doc-headingPopBtn visible-xs"
                icon={<i className="fa fa-align-right"></i>}
              >
                {renderHeadingPopover()}
              </Button>
            ) : null}
          </div>
        ) : null}

        <Preview {...props} />

        <Footer className="Doc-footer">
          <div className="Doc-navLinks">
            {prevDoc ? (
              <Link className="Doc-navLinks--prev" to={`${ContextPath}${prevDoc.path}`}>
                <div className="Doc-navLinks-icon">
                  <i className="iconfont icon-arrow-left"></i>
                </div>
                <div className="Doc-navLinks-body text-right">
                  <Paragraph className="Doc-navLinks-subtitle">Previous - {prevDoc.group || 'Others'}</Paragraph>
                  <Paragraph className="Doc-navLinks-title">{prevDoc.label}</Paragraph>
                </div>
              </Link>
            ) : null}

            {nextDoc ? (
              <Link className="Doc-navLinks--next" to={`${ContextPath}${nextDoc.path}`}>
                <div className="Doc-navLinks-body">
                  <Paragraph className="Doc-navLinks-subtitle">Next - {nextDoc.group || 'Others'}</Paragraph>
                  <Paragraph className="Doc-navLinks-title">{nextDoc.label}</Paragraph>
                </div>
                <div className="Doc-navLinks-icon">
                  <i className="iconfont icon-arrow-right"></i>
                </div>
              </Link>
            ) : null}
          </div>
          <div className="Doc-footer-divider"></div>
          <div className="Doc-footer-fixme">
            Is there an error in the document?
            <a href={getDocEditLink()} rel="noopener noreferrer" target="_blank">
              Edit this page on Github!
            </a>
          </div>
        </Footer>
      </Content>
      {doc.toc && doc.toc.children && doc.toc.children.length > 0 ? (
        <div className="Doc-toc hidden-xs hidden-sm">
          <div>
            <div className="Doc-headingList">{renderHeading(doc.toc.children)}</div>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default withDoc(MarkdownRenderer);
