import React, { useState } from 'react';
import { Form, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { SignupPayload } from './auth.types';
import { signup } from './auth.api';

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: SignupPayload) => {
    setLoading(true);
    try {
      await signup(values);
      message.success('Request received');
      navigate('/login');
    } catch {
      message.error('Request failed');
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

      <div className="section-title">Sign up</div>
      <Form<SignupPayload>
        layout="vertical"
        className="form-vertical"
        requiredMark={false}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Account ID"
          name="accountId"
          rules={[{ required: true, message: 'Please enter Account ID' }]}
        >
          <AppInput placeholder="Enter Account ID" />
        </Form.Item>

        <Form.Item
          label="Billing Zip Code"
          name="billingZip"
          rules={[
            { required: true, message: 'Please enter Billing Zip Code' },
            { len: 5, message: 'Zip must be 5 digits' },
          ]}
        >
          <AppInput placeholder="Billing Zip Code" />
        </Form.Item>

        <div className="button-stack">
          <AppButton htmlType="button" className="full-width neutral-btn">
            Sign up
          </AppButton>
          <AppButton
            htmlType="submit"
            loading={loading}
            className="full-width outline-primary"
            type="primary"
            ghost
          >
            Request for Verification
          </AppButton>
        </div>
      </Form>

      <div className="center-link small-text">
        Already have an account?{' '}
        <Link to="/login" className="strong-link">
          Log in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Signup;

