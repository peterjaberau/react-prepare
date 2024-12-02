import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export interface ContextMenuPanelProps {
  initialMenus: Array<{
    label: string;
    icon: React.ReactNode;
    disabled?: boolean;
    onSelect: () => void;
  }>;
}

export const ContextMenuPanel: React.FC<ContextMenuPanelProps> = ({ initialMenus }) => {
  const [menus, setMenus] = useState(initialMenus);

  return menus && menus.length > 0 ? (
    <div className="context-menu-setting">
      <div className="setting-header">Batch Operations</div>
      <div className="setting-body">
        <Menu>
          {menus.map(menu => (
            <Menu.Item
              key={menu.label}
              disabled={menu.disabled}
              onClick={!menu.disabled ? menu.onSelect : undefined}
              icon={<MenuOutlined />}
            >
              {menu.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  ) : null;
};
