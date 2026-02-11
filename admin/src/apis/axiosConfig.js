import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

/* ================= REQUEST INTERCEPTOR ================= */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');

    // signin & refresh pe token nahi bhejna
    if (token && !config.url.includes('/admin/signin') && !config.url.includes('/admin/refresh')) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= RESPONSE INTERCEPTOR ================= */
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/admin/refresh`,
          { token: refreshToken },
          { withCredentials: true }
        );

        const newToken = res.data?.accessToken;

        if (newToken) {
          localStorage.setItem('userToken', newToken);

          axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          return axiosInstance(originalRequest);
        }
      } catch (err) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('refreshToken');
        sessionStorage.removeItem('userToken');
        window.location.href = '/signin';
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
