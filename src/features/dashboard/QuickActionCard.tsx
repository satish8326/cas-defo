import React from 'react';
import { Card } from 'antd';
import { QuickAction } from './dashboard.types';

type QuickActionCardProps = {
  action: QuickAction;
};

const QuickActionCard: React.FC<QuickActionCardProps> = ({ action }) => {
  return (
    <Card hoverable className="quick-card">
      <span className="quick-icon">{action.icon}</span>
      <div className="quick-text">
        <p className="quick-title">{action.title}</p>
        <p className="quick-desc">{action.description}</p>
      </div>
    </Card>
  );
};

export default QuickActionCard;

