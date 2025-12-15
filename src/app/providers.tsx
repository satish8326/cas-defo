import React, { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import theme from '../assets/styles/antd-theme';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default Providers;

