import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
  PlusCircleOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  AppstoreOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import QuickActionCard from './QuickActionCard';
import StatCard from './StatCard';
import { QuickAction, StatItem } from './dashboard.types';

const { Title, Text } = Typography;

const quickActions: QuickAction[] = [
  {
    key: 'new-order',
    title: 'New Order',
    description: 'Start a new custom orthotic order',
    icon: <PlusCircleOutlined />,
  },
  {
    key: 'order-history',
    title: 'Order History',
    description: 'View past orders and tracking',
    icon: <ClockCircleOutlined />,
  },
  {
    key: 'invoices',
    title: 'Invoices',
    description: 'View your invoices',
    icon: <FileTextOutlined />,
  },
  {
    key: 'drafts',
    title: 'Drafts',
    description: 'Continue incomplete orders',
    icon: <FileDoneOutlined />,
  },
  {
    key: 'templates',
    title: 'Templates',
    description: 'Manage saved order templates',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'patients',
    title: 'Patients',
    description: 'Manage saved order templates',
    icon: <TeamOutlined />,
  },
];

const stats: StatItem[] = [
  { key: 'active', title: 'Active Orders', value: 12 },
  { key: 'completed', title: 'Completed This Month', value: 47 },
  { key: 'drafts', title: 'Pending Drafts', value: 3 },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <Title level={3} className="welcome-title">
        Welcome, Dr. James
      </Title>
      <Text className="welcome-sub">What would you like to do today?</Text>

      <Row gutter={[16, 16]}>
        {quickActions.map((action) => (
          <Col key={action.key} xs={24} sm={12} lg={8}>
            <QuickActionCard action={action} />
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} className="stat-row">
        {stats.map((stat) => (
          <Col key={stat.key} xs={24} sm={12} lg={8}>
            <StatCard stat={stat} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;

