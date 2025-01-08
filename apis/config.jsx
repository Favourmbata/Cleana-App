import axios from 'axios';
let url = import.meta.env.VITE_APP_CLEANING_SERVICES_BASE_URL
// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'))?.userAuthToken?.access;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = "/"
      // if (typeof window !== 'undefined') Router.push('/'); // Redirect to login or home
    }
    return Promise.reject(error);
  }
);

// Global error handler
export const handleError = (error) => {
  if (error?.response?.data) throw error.response.data;
  throw error;
};
