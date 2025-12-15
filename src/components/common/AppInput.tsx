import React from 'react';
import { Input, InputProps } from 'antd';

type AppInputProps = InputProps;

const AppInput: React.FC<AppInputProps> = ({ className, ...rest }) => {
  return <Input className={`rounded-input ${className || ''}`} size="large" {...rest} />;
};

export default AppInput;

