import axios from "axios";

// Base URL of the backend
const BASE_URL = import.meta.env?.VITE_BASE_URL || "http://localhost:5000/api";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
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
