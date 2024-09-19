export default defineNuxtRouteMiddleware((to, from) => {

    if (process.client) { // Kiểm tra nếu đang ở phía client
        const token = localStorage.getItem('token'); // Lấy token từ localStorage

        if (!token) { // Nếu không có token
            return navigateTo('/login'); // Điều hướng đến trang login
        }
    }
});
