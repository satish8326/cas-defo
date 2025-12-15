import React, { PropsWithChildren } from 'react';
import AppCard from '../common/AppCard';

type AuthLayoutProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
}>;

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="wave-stripe wave-1" />
      <div className="wave-stripe wave-2" />
      <div className="wave-stripe wave-3" />
      <div className="wave-stripe wave-4" />
      <div className="wave-footer" />
      <div className="auth-overlay">
        <AppCard bordered={false}>{children}</AppCard>
        <div className="footer-text">Helping kids lead healthier, happier lives*</div>
      </div>
    </div>
  );
};

export default AuthLayout;

