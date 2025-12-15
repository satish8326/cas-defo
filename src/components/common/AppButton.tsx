import React from 'react';
import { Button, ButtonProps } from 'antd';

type AppButtonProps = ButtonProps;

const AppButton: React.FC<AppButtonProps> = ({ children, className, ...rest }) => {
  return (
    <Button className={`rounded-button ${className || ''}`} size="large" type="primary" {...rest}>
      {children}
    </Button>
  );
};

export default AppButton;

