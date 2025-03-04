import axios from "axios";

// Base URL of the backend
const apiUrl = import.meta.env.VITE_API_URL as string;

console.log(apiUrl);

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
