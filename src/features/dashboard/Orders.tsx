import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Orders: React.FC = () => {
  return (
    <>
      <Title level={3} className="welcome-title">
        Order History
      </Title>
      <Paragraph className="welcome-sub">View past orders and tracking.</Paragraph>
      <Card>Order history will appear here.</Card>
    </>
  );
};

export default Orders;

