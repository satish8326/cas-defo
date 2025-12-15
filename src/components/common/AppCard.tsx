import React from 'react';
import { Card, CardProps } from 'antd';

type AppCardProps = CardProps;

const AppCard: React.FC<AppCardProps> = ({ children, className, ...rest }) => {
  return (
    <Card className={`auth-card ${className || ''}`} {...rest}>
      {children}
    </Card>
  );
};

export default AppCard;

