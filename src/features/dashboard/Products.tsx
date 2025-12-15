import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Products: React.FC = () => {
  return (
    <>
      <Title level={3} className="welcome-title">
        Products
      </Title>
      <Paragraph className="welcome-sub">Browse and manage product catalog.</Paragraph>
      <Card>Product list coming soon.</Card>
    </>
  );
};

export default Products;

