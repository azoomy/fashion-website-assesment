import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const setUpInterceptors = () => {
  axiosClient.interceptors.request.use(
    (req) => {
      req.headers["Access-Control-Allow-Origin"] = "*";
      // req.headers["withCredentials"] = true;
      // req.headers["AccessKey"] = "92fce4d5-e7fe-404c-b0154eb26eca-9cc5-4b30";
      return req;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );
};
