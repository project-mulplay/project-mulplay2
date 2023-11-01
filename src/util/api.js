import axios from "axios";
import { Cookies } from "react-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3300",
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url !== "/login") {
      const cookies = new Cookies();
      const token = cookies.get("token");
      if (token) {
        config.headers.Authorization = `${token}`;
      }
    }
    config.headers.Accept = "application/json;";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(" 요청 성공:", response);
    return response;
  },

  (error) => {
    console.error("요청 실패:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
