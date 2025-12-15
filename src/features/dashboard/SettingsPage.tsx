import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const SettingsPage: React.FC = () => {
  return (
    <>
      <Title level={3} className="welcome-title">
        Settings
      </Title>
      <Paragraph className="welcome-sub">Update your preferences and account settings.</Paragraph>
      <Card>Settings options coming soon.</Card>
    </>
  );
};

export default SettingsPage;

