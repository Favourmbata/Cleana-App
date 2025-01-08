import { axiosInstance, handleError } from "./config";

export const contactApi = async (payload) => {
  try {
    const response = await axiosInstance.post('/contact', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const enquiryApi = async (payload) => {
  try {
    const response = await axiosInstance.post('/enquiry', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const complaintApi = async (payload) => {
  try {
    const response = await axiosInstance.post('/complaint ', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const recruitmentApi = async (payload) => {
  try {
    const response = await axiosInstance.post('/recruitment ', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const bookingApi = async (payload) => {
  try {
    const response = await axiosInstance.post('/booking ', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};


export const getAllFrequency = async () => {
  try {
    const response = await axiosInstance.get('/booking/frequency');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getAddress = async ({postcode}) => {
  try {
    const response = await axiosInstance.get(`/booking/address/${postcode}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getRate = async (payload) => {
  try {
    const response = await axiosInstance.post(`/booking/get-rate`, payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};