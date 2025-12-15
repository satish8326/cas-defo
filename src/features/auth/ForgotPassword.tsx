import React, { useState } from 'react';
import { Form, Typography, Alert, message } from 'antd';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { ForgotPasswordPayload } from './auth.types';
import { forgotPassword } from './auth.api';

const { Title, Text } = Typography;

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (values: ForgotPasswordPayload) => {
    setLoading(true);
    try {
      await forgotPassword(values);
      setSent(true);
      message.success('Password reset link sent successfully');
    } catch {
      message.error('Unable to send reset link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="auth-header">
        <div className="logo-mark">CASCADE defo</div>
        <div className="logo-sub">DEFO Now</div>
        <Title level={3} className="app-title">
          Cascade Defo
        </Title>
        <Text className="app-subtitle">Reset your password link.</Text>
      </div>

      <div className="section-title">Forgot Password</div>
      <div className="hint">Enter your email to receive password reset instructions.</div>

      {sent && (
        <Alert
          message="Password reset link sent successfully"
          type="success"
          showIcon
          className="top-gap"
        />
      )}

      <Form<ForgotPasswordPayload>
        layout="vertical"
        className="form-vertical top-gap"
        requiredMark={false}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter a valid email' },
          ]}
        >
          <AppInput placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <AppButton htmlType="submit" loading={loading} className="full-width">
            Submit
          </AppButton>
        </Form.Item>
      </Form>

      <div className="center-link">
        <Link to="/login">Back to Login</Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;

