import { axiosInstance } from "../config/axios";

export const login = async (payload) => {
  const res = await axiosInstance.post("/api/auth/signin", payload);
  return res;
};

export const register = async (payload) => {
  const res = await axiosInstance.post("/api/auth/signup", payload);
  return res;
};
