import React from 'react';
import { Tag } from 'antd';

type AppTagProps = {
  color?: string;
  children: React.ReactNode;
};

const AppTag: React.FC<AppTagProps> = ({ color, children }) => (
  <Tag color={color} className="app-tag">
    {children}
  </Tag>
);

export default AppTag;


