<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Đăng nhập tài khooản của bạn
          </h1>
          <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập</label>
              <input
                  v-model="email"
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
              <input
                  v-model="password"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
              />
            </div>
            <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {AxiosError} from "axios";
import { useAccountInfoStore } from '@/stores/accountInfoStore'

definePageMeta({
  layout: false,
})
import { ref } from 'vue'
import { loginUser } from '@/services/userService';
import { toast } from "vue3-toastify";

const email = ref('')
const password = ref('')
const router = useRouter()

const store = useAccountInfoStore()
const handleLogin = async () => {
  try {
    const response = await loginUser({ username: email.value, password: password.value });
    localStorage.setItem('token', response?.data?.token); // Save the token to localStorage
    //set store to account info
    toast.success("Đăng nhập thành công!");

    // Đợi 500ms rồi chuyển hướng
    setTimeout(() => {
      store.setAccountInfo(response.data)
      router.push("/");
    }, 1000);
  } catch (err) {
    const error = err as AxiosError; // Ép kiểu err thành AxiosError
    // Kiểm tra nếu response từ backend có message
    if (error.response && error.response.data) {
      const { message } = error.response.data as { message: string }; // Giả sử message là string
      toast.error(message || "Đăng nhập thất bại!");
    } else {
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    }
  }

};
</script>

<style scoped>
/* Custom styles cho trang login nếu cần */
</style>
