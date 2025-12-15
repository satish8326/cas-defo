import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const InvoicesPage: React.FC = () => {
  return (
    <>
      <Title level={3} className="welcome-title">
        Invoices
      </Title>
      <Paragraph className="welcome-sub">View and manage your invoices.</Paragraph>
      <Card>Invoices will be listed here.</Card>
    </>
  );
};

export default InvoicesPage;

