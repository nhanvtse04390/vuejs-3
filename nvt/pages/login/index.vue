<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">Email</label>
          <input
              v-model="email"
              type="email"
              id="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="password">Password</label>
          <input
              v-model="password"
              type="password"
              id="password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
          />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>

      <p class="text-center mt-4 text-gray-600">
        Don't have an account? <NuxtLink to="/register" class="text-blue-500">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  // Thay thế bằng logic đăng nhập thực tế của bạn
  if (email.value === 'admin@example.com' && password.value === 'password') {
    alert('Login successful!')
    router.push('/') // Chuyển hướng về trang chủ sau khi đăng nhập thành công
  } else {
    alert('Invalid email or password')
  }
}
</script>

<style scoped>
/* Custom styles cho trang login */
</style>
