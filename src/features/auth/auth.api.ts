import { ApiResponse, ForgotPasswordPayload, LoginPayload, SignupPayload } from './auth.types';

const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (payload: LoginPayload): Promise<ApiResponse<{ token: string }>> => {
  await delay();
  return {
    data: { token: `mock-token-${btoa(payload.email)}` },
    message: 'Login successful',
  };
};

export const signup = async (
  payload: SignupPayload
): Promise<ApiResponse<{ accountId: string }>> => {
  await delay();
  return {
    data: { accountId: payload.accountId },
    message: 'Account validated',
  };
};

export const forgotPassword = async (
  payload: ForgotPasswordPayload
): Promise<ApiResponse<null>> => {
  await delay();
  return {
    data: null,
    message: 'Password reset link sent successfully',
  };
};

