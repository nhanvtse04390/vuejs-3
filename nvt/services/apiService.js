// src/services/apiService.js

import axios from 'axios';

// Tạo một instance Axios
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // Đổi URL này thành URL của backend
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor để tự động thêm JWT vào các yêu cầu
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Xử lý lỗi từ phản hồi
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Xử lý khi có lỗi từ server, ví dụ: hết hạn token
        if (error.response && error.response.status === 401) {
            // Xử lý lỗi 401 Unauthorized
            console.error('Unauthorized access - maybe redirect to login?');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
