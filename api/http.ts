import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(
  (r) => r,
  (error) => Promise.reject(error.response?.data),
);
