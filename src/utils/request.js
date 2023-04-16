import axios from "axios";
import { getAuthToken } from "./utils";

export const baseURL = "http://localhost:8081/";

const request = axios.create({
  withCredentials: true,
  baseURL,
});

request.interceptors.request.use(async (config) => {
  const token = getAuthToken();
  config.headers.authorization = "baber|".concat(token);
  return config;
}, Promise.reject);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (err && err.response && err.response.status === 401) {
    }

    return Promise.reject;
  }
);

export default request;
