import { useMutation } from "@tanstack/react-query";
import { authApi } from "./auth.api";
import { LoginParams, LoginResponse, SendOtpParams, SendOtpResponse } from "./auth.types";
import { AxiosError } from "axios";

export const useLogin = () =>
  useMutation<LoginResponse, AxiosError, LoginParams>({
    mutationKey: ["login"],
    mutationFn: (data) => authApi.login(data),
  });

export const useSendOtp = () =>
  useMutation<SendOtpResponse, AxiosError, SendOtpParams>({
    mutationKey: ["send-otp"],
    mutationFn: authApi.sendOtp,
  })
