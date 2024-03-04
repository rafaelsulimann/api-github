import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system.ts";
import * as authService from "../services/auth-service.ts";
import { history } from "./history.ts";

export function requestBackend(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken(),
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
  function (config: any) {
    // DO SOMETHING BEFORE REQUEST IS SENT
    return config;
  },
  function (error: any) {
    // DO SOMETHING WITH REQUEST ERROR
    return Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  function (response: any) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
    return response;
  },
  function (error: any) {
    if (error.response.status === 401) {
      history.push("/login");
    }
    if (error.response.status === 403) {
      history.push("/");
    }
    return Promise.reject(error);
  },
);
