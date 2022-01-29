import axios from "axios";

import { SERVER_URL } from "constants/env";

const serverApi = axios.create({
  baseURL: SERVER_URL,
});

export const getCommunties = async () => {
  return await serverApi
    .get(`/communities`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
      // TODO: 에러 대응
    });
};

export const getCommunity = async (communityId: number) => {
  return await serverApi
    .get(`/communities/${communityId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
      // TODO: 에러 대응
    });
};
