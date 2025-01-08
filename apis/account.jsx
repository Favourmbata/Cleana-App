import { axiosInstance, handleError } from "./config";

// API request functions

export const loginApi = async (payload) => {
  try {
    const response = await axiosInstance.post('/account/login', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};