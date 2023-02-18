import { axiosClient } from ".";

export const getProducts = async () => {
  const res = await axiosClient.get("/products?limit=5");
  return res;
};

export const getCategories = async () => {
  const res = axiosClient.get("/products/categories");
  return res;
};

export const getProductByCategories = async (category) => {
  const res = axiosClient.get(`/products/category/${category}`);
  return res;
};
