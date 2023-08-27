import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://randomuser.me",
  timeout: 5000,
});

export const getUserInfo = async () => {
  const dataResApi = await axiosInstance.get("/api");
  return dataResApi.data?.results[0];
  // const da
};
