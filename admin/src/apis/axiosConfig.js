import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

/* =========================
   REQUEST INTERCEPTOR
========================= */
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem('userToken') ||
      sessionStorage.getItem('userToken');

    // login / refresh endpoints me token nahi bhejna
    if (token && !config.url.includes('/auth/')) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* =========================
   RESPONSE INTERCEPTOR
========================= */
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get('refreshToken');

        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/admin/refresh`,
          { token: refreshToken },
          { withCredentials: true },
        );

        const newToken = response.data?.access_token;

        if (newToken) {
          // ✅ SAME KEY
          localStorage.setItem('userToken', newToken);

          // Update headers
          axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          return axiosInstance(originalRequest);
        }
      } catch (err) {
        localStorage.removeItem('userToken');
        sessionStorage.removeItem('userToken');
        window.location.href = '/signin';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
