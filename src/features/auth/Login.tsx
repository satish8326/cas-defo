import React, { useState } from 'react';
import { Form, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { LoginPayload } from './auth.types';
import { login } from './auth.api';
import ROUTES from '../../constants/routes';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values: LoginPayload) => {
    setLoading(true);
    try {
      await login(values);
      message.success('Logged in successfully');
      navigate(ROUTES.dashboard);
    } catch {
      message.error('Unable to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="auth-header">
        <div className="logo-mark">
          <span className="line1">CASCADE</span>
          <span className="line2">defo</span>
        </div>
        <div className="logo-sub">DAFO Now</div>
      </div>

      <div className="section-title">Login</div>
      <Form<LoginPayload>
        layout="vertical"
        className="form-vertical"
        requiredMark={false}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter a valid email' },
          ]}
        >
          <AppInput placeholder="james.smith@hanger.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <AppInput type="password" placeholder="Password" />
        </Form.Item>

        <div className="link-row">
          <Link to="/forgot-password">Forgot your Password?</Link>
          <Link to="/signup" className="muted-link strong-link">
            Sign Up
          </Link>
        </div>

        <Form.Item className="top-gap">
          <AppButton htmlType="submit" loading={loading} className="full-width">
            Login
          </AppButton>
        </Form.Item>
      </Form>
      <div className="center-link small-text">
        Don’t have an account?{' '}
        <Link to="/signup" className="strong-link">
          Sign Up
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;

