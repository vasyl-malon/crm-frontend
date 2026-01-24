import { api } from "../http";
import {
  LoginParams,
  LoginResponse,
  SendOtpParams,
  SendOtpResponse,
} from "./auth.types";

export const authApi = {
  login: async (data: LoginParams): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>("/auth/login", data);
    return res.data;
  },

  sendOtp: async (data: SendOtpParams): Promise<SendOtpResponse> => {
    const res = await api.post<SendOtpResponse>("/auth/otp", data);
    return res.data;
  },
};
