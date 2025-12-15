import React from 'react';
import { Layout, Input, Badge, Avatar, Dropdown, Space, MenuProps } from 'antd';
import {
  BellOutlined,
  ShoppingCartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const { Header: AntHeader } = Layout;

type HeaderProps = {
  onMenuClick: () => void;
  collapsed?: boolean;
};

const Header: React.FC<HeaderProps> = ({ onMenuClick, collapsed }) => {
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'My Profile',
      icon: <UserOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: <span className="logout-text">Logout</span>,
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const onMenuItemClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      navigate(ROUTES.login);
    }
  };

  return (
    <AntHeader className="dashboard-header">
      <div className="header-left">
        <button
          type="button"
          className="header-menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
        <div className="header-logo">CASCADE defo</div>
        <div className="header-search">
          <Input.Search placeholder="Search..." allowClear />
        </div>
      </div>
      <div className="header-actions">
        <Badge count={2} size="small" offset={[-2, 6]}>
          <BellOutlined className="header-icon" />
        </Badge>
        <Badge count={1} size="small" offset={[-2, 6]}>
          <ShoppingCartOutlined className="header-icon" />
        </Badge>
        <Dropdown
          menu={{ items, onClick: onMenuItemClick }}
          placement="bottomRight"
          trigger={['click']}
          arrow
        >
          <Space className="header-user header-user-btn">
            <Avatar size="small">JS</Avatar>
            <span>James Smith</span>
          </Space>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;

