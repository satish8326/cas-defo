import React from 'react';
import { Card, Statistic } from 'antd';
import { StatItem } from './dashboard.types';

type StatCardProps = {
  stat: StatItem;
};

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card className="stat-card">
      <Statistic title={<span className="stat-title">{stat.title}</span>} value={stat.value} />
    </Card>
  );
};

export default StatCard;

