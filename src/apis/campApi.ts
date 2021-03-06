import axios, { AxiosError } from "axios";
import { CampType } from "types/type";

// TODO: 환경 변수로 변경
const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

serverApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

export const getCampsByType = async (type: CampType) => {
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
