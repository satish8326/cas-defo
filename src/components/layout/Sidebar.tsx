import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  HistoryOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const { Sider } = Layout;

const menuItems = [
  { key: ROUTES.dashboard, label: 'Home', icon: <HomeOutlined /> },
  { key: ROUTES.products, label: 'Products', icon: <AppstoreOutlined /> },
  { key: ROUTES.orders, label: 'Order History', icon: <HistoryOutlined /> },
  { key: ROUTES.templates, label: 'Templates', icon: <FileDoneOutlined /> },
  { key: ROUTES.invoices, label: 'Invoices', icon: <FileTextOutlined /> },
  { key: ROUTES.settings, label: 'Settings', icon: <SettingOutlined /> },
];

type SidebarProps = {
  collapsed: boolean;
  onCollapse?: (value: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const selected =
    menuItems
      .slice()
      .sort((a, b) => b.key.length - a.key.length)
      .find((item) => location.pathname.startsWith(item.key))?.key || location.pathname;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={onCollapse}
      width={220}
      className="sidebar"
    >
      <div className="sidebar-header">
        <div className="sidebar-logo-text">CASCADE dafo</div>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selected]}
        items={menuItems.map((item) => ({
          key: item.key,
          icon: <span className="menu-icon">{item.icon}</span>,
          label: item.label,
          onClick: () => navigate(item.key),
        }))}
      />
    </Sider>
  );
};

export default Sidebar;

