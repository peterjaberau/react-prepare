import React, { useState, useEffect } from 'react';
import { Button, List } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface BreadcrumbProps {
  store: any; // Define a more specific type if possible
  manager: any; // Define a more specific type if possible
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ store, manager }) => {
  const [showLeftScrollBtn, setShowLeftScrollBtn] = useState(false);
  const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const bcn = store.bcn;

  useEffect(() => {
    // Handle scroll logic here
    const handleResize = () => {
      refreshHandleScroll();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollLeft]);

  const refreshHandleScroll = () => {
    // Logic to update scroll button visibility
    const maxScrollLeft = calculateMaxScrollLeft();
    setShowLeftScrollBtn(scrollLeft < 0);
    setShowRightScrollBtn(scrollLeft > -maxScrollLeft);
  };

  const calculateMaxScrollLeft = () => {
    // Calculate the maximum scroll left value
    return 0; // Replace with actual calculation
  };

  const handleScrollToLeft = () => {
    setScrollLeft(prev => Math.min(prev + 50, 0));
  };

  const handleScrollToRight = () => {
    const maxScrollLeft = calculateMaxScrollLeft();
    setScrollLeft(prev => Math.max(prev - 50, -maxScrollLeft));
  };

  const handleClick = (id: string, region: string) => {
    const node = store.getNodeById(id);
    if (node?.info?.editable === false) {
      return;
    }
    if (region) {
      store.setActiveId(id, region);
    } else {
      store.setActiveId(id);
    }
  };

  const handleMouseEnter = (id: string, region: string) => {
    store.setHoverId(id, region);
  };

  return (
    <div className="ae-Breadcrumb">
      {showLeftScrollBtn && (
        <Button icon={<LeftOutlined />} onClick={handleScrollToLeft} />
      )}
      <div className="ae-Breadcrumb-content">
        {bcn.length ? (
          <List
            dataSource={bcn}
            renderItem={(item, index) => {
              const nearby = (item.parent as any)?.uniqueChildren;
              const region = item.region || item.childRegions.find((i: any) => i.region)?.region;
              return (
                <List.Item key={index}>
                  <span
                    data-node-id={item.id}
                    data-node-region={region}
                    onClick={() => handleClick(item.id, region)}
                    onMouseEnter={() => handleMouseEnter(item.id, region)}
                  >
                    {item.label}
                  </span>
                  {nearby?.length > 1 && (
                    <List
                      className="hoverShowScrollBar"
                      dataSource={nearby}
                      renderItem={child => (
                        <List.Item key={`${child.id}-${child.region}`}>
                          <span
                            data-node-id={child.id}
                            data-node-region={child.region}
                            onClick={() => handleClick(child.id, child.region)}
                            onMouseEnter={() => handleMouseEnter(child.id, child.region)}
                            className={child.id === item.id && child.region === item.region ? 'is-active' : ''}
                          >
                            {child.label}
                          </span>
                        </List.Item>
                      )}
                    />
                  )}
                </List.Item>
              );
            }}
          />
        ) : null}
      </div>
      {showRightScrollBtn && (
        <Button icon={<RightOutlined />} onClick={handleScrollToRight} />
      )}
    </div>
  );
};

export default Breadcrumb;
