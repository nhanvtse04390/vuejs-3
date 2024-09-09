import apiClient from './apiService';

export const getWarehouseLayout = async () => {
    const response = await apiClient.get('/warehouse-layouts');
    return response.data;
};

export const updateWarehouseLayout = async () => {
    const response = await apiClient.get('/warehouse-layouts');
    return response.data;
};
