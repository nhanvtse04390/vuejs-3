// src/services/userService.js

import apiClient from './apiService';

// Hàm gọi API để đăng nhập
export const loginUser = async (credentials) => {
    const response = await apiClient.post('/login', credentials);
    return response.data;
};

// Hàm lấy danh sách người dùng
export const getUsers = async () => {
    const response = await apiClient.get('/users');
    return response.data;
};

// Hàm tạo người dùng mới
export const createUser = async (userData) => {
    const response = await apiClient.post('/users', userData);
    return response.data;
};

// Các API khác như updateUser, deleteUser,...
