import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const TemplatesPage: React.FC = () => {
  return (
    <>
      <Title level={3} className="welcome-title">
        Templates
      </Title>
      <Paragraph className="welcome-sub">Manage saved order templates.</Paragraph>
      <Card>Templates management coming soon.</Card>
    </>
  );
};

export default TemplatesPage;

