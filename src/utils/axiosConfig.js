// src/api/axiosConfig.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
  timeout: 10000, // 10 seconds timeout
  // headers: {
  //   "Content-Type": "application/json",
  //   // authorization: `Basic ${import.meta.env.VITE_API_BASIC_AUTH}`,
  // },
  credentials: "include", // or "same-origin" if backend and frontend are on the same domain
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // For handling cookies
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add additional request modifications here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle specific error cases
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default apiClient;
