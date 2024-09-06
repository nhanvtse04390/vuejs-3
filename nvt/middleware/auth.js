export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = localStorage.getItem('token');

        if (!token) {
            return navigateTo('/login');
        }
    }
}, { override: true }); // Gán override: true nếu cần thay thế middleware mặc định
