import { axiosClient } from "./axiosClient";

//Users Crud

export const registerUser = async (userData) => {
  const result = await axiosClient.post("/user/create", userData);
  return result.data;
};

export const loginUser = async (userData) => {
  const result = await axiosClient.post("/user/login", userData);
  return result.data;
};
