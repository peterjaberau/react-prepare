import { Link, useLocation } from "react-router-dom"
import { Menu } from "antd"

const RouterNav = () => {

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const openKeys = pathSnippets.length > 1 ? [pathSnippets[0]] : [];
  const selectedKeys = [location.pathname];



  return (
    <Menu mode="inline" defaultOpenKeys={openKeys} selectedKeys={selectedKeys}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="dynamic-editor">
        <Link to="/pages/editor/:id">Dynamic Editor</Link>
      </Menu.Item>
      <Menu.Item key="dynamic-editor-refactor">
        <Link to="/pages/editor-refactor/:id">Dynamic Editor Refactor</Link>
      </Menu.Item>
      <Menu.SubMenu key="components" title="Components">
        <Menu.Item key="right-panels">
          <Link to="/components/right-panels">Right Panel</Link>
        </Menu.Item>
        <Menu.Item key="renderers-panel">
          <Link to="/components/renderers-panel">renderers-panel</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>

    // <ul>
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/pages/editor/:id">Dynamic Editor</Link>
    //   </li>
    //   <li>
    //     <Link to="/pages/editor-refactor/:id">Dynamic Editor Refactor</Link>
    //   </li>
    //   <li>Components</li>
    //   <li>
    //     <ul>
    //       <li>
    //         <Link to="/components/right-panels">Right Panel</Link>
    //       </li>
    //     </ul>
    //   </li>
    // </ul>
  )
}

export default RouterNav
