import React, { PropsWithChildren, useState } from 'react';
import { Layout, Drawer, Grid } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';
import '../../assets/styles/dashboard.css';

const { Content } = Layout;
const { useBreakpoint } = Grid;

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isDesktop = screens.lg ?? false;

  const handleToggleMenu = () => {
    if (isDesktop) {
      setCollapsed((prev) => !prev);
    } else {
      setDrawerOpen(true);
    }
  };

  return (
    <Layout className="dashboard-layout">
      {isDesktop ? (
        <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      ) : (
        <Drawer
          placement="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          width={220}
          rootClassName="sidebar-drawer"
          title={<div className="drawer-header">CASCADE defo</div>}
        >
          <Sidebar collapsed={false} />
        </Drawer>
      )}
      <Layout>
        <Header onMenuClick={handleToggleMenu} collapsed={collapsed} />
        <Content className="content-area">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

