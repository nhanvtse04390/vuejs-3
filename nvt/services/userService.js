// src/services/userService.js

import apiClient from './apiService';

// Hàm gọi API để đăng nhập
export const loginUser = async (credentials) => {
    console.log("apiClient",apiClient)
    const response = await apiClient.post('/login', credentials);
    return response.data;
};

// Hàm lấy danh sách người dùng
export const getUsers = async (params = {}) => {
    try {
        // Tạo chuỗi truy vấn từ các tham số tìm kiếm
        const queryParams = new URLSearchParams(params).toString();

        // Gửi yêu cầu GET với các tham số tìm kiếm
        const response = await apiClient.get(`/users?${queryParams}`);

        // Kiểm tra trạng thái phản hồi
        if (response.status === 200) {
            // Nếu có dữ liệu, trả về dữ liệu
            return response.data;
        } else {
            // Nếu trạng thái không phải 200 OK, xử lý lỗi
            console.error(`Unexpected status code: ${response.status}`);
            throw new Error(`Unexpected status code: ${response.status}`);
        }
    } catch (error) {
        // Xử lý lỗi khi gửi yêu cầu hoặc phản hồi không thành công
        console.error('Error fetching users:', error.message);
        // Tuỳ thuộc vào nhu cầu, bạn có thể throw lại lỗi hoặc trả về giá trị mặc định
        throw error; // Hoặc return default value if preferred
    }
};

// Hàm tạo người dùng mới
export const createUser = async (userData) => {
    const response = await apiClient.post('/register', userData);
    return response.data;
};

// Các API khác như updateUser, deleteUser,...
