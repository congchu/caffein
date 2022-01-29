import axios, { AxiosError } from "axios";

import { SERVER_URL } from "constants/env";

const serverApi = axios.create({
  baseURL: SERVER_URL,
});

serverApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

export const getCampsByType = async (type: string) => {
  return await serverApi
    .get(`/camps?type=${type}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
      // TODO: 에러 대응
    });
};

export const getCamp = async (campId: number) => {
  return await serverApi
    .get(`/camps/${campId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
      // TODO: 에러 대응
    });
};
