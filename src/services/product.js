import { axiosInstance } from "../config/axios";

export const getProduct = async () => {
  const res = await axiosInstance.get("/api/product");
  return res;
};
export const getProductById = async (id) => {
  const res = await axiosInstance.get("/api/product/" + id);
  return res;
};
