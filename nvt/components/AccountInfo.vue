<template>
  <div v-if="isVisible" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4 text-center">

      <!-- Overlay background -->
      <div class="fixed inset-0 transition-opacity" @click="closePopup">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- Modal content -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

        <!-- Nội dung chi tiết -->
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div class="text-center mb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Thông tin cá nhân</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Thông tin chi tiết về tài khoản.</p>
          </div>
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Tên người dùng</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ userInfo.name }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ userInfo.email }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Số điện thoại</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ userInfo.phone }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Địa chỉ</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ userInfo.address }}</dd>
            </div>
          </dl>
        </div>

        <!-- Nút đóng -->
        <div class="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center">
          <button @click="closePopup" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userInfo: Object,      // Dữ liệu thông tin người dùng
  isVisible: Boolean     // Biến điều khiển hiển thị popup
})

const emit = defineEmits(['close'])

function closePopup() {
  emit('close')
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
