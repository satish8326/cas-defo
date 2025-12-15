export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  accountId: string;
  billingZip: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
}

