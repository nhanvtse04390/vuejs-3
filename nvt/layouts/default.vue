<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="p-4 shadow-md">
      <div class="flex justify-center items-center">
        <span class="text-center bg-[#c5e1a5] font-bold">My Nuxt Application</span>
      </div>
    </header>

    <!-- Sidebar -->
    <aside :class="{'w-64': isSidebarOpen, 'w-16': !isSidebarOpen}" class="bg-custom-100 p-4 pt-20 fixed h-full transition-width duration-300 relative">
      <!-- Toggle Button Inside Sidebar -->
      <button @click="toggleSidebar" class="absolute top-2 right-4 text-white p-2">
        <svg
            v-if="isSidebarOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-blue-500"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-blue-500"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <nav v-if="isSidebarOpen">
        <ul class="space-y-4">
          <!-- Render menu items using v-for -->
          <li
              v-for="(menu, index) in menuItems"
              :key="index"
              @mouseenter="showSubmenu(index)"
              @mouseleave="showSubmenu(null)"
              class="relative"
          >
            <div class="block hover:bg-[#c5e1a5] rounded-r-lg p-2 text-sm font-bold uppercase cursor-pointer">
              {{ menu.title }}
            </div>
            <!-- Submenu -->
            <ul
                v-show="submenuVisible !== index"
                class="absolute left-full top-0 bg-[#c5e1a5] p-2 shadow-md"
            >
              <li
                  v-for="(submenu, subIndex) in menu.submenus"
                  :key="subIndex"
                  class="p-2 hover:bg-gray-200"
              >
                <NuxtLink :to="submenu.link">{{ submenu.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex flex-grow">
      <!-- Main content area -->
      <main :class="{'ml-64': isSidebarOpen, 'ml-16': !isSidebarOpen}" class="flex-grow p-2 transition-margin duration-300">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-950 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        &copy; VTN
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State quản lý mở hoặc đóng sidebar
const isSidebarOpen = ref(true);

// Biến để xác định submenu nào đang được hiển thị
const submenuVisible = ref<number | null>(null);

// Hàm xử lý toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Hàm để hiển thị submenu
const showSubmenu = (index: number | null) => {
  submenuVisible.value = index;
};

// Danh sách các mục menu và submenu
const menuItems = ref([
  {
    title: 'Quản trị',
    submenus: [
      { title: 'Submenu 1', link: '/' },
      { title: 'Submenu 2', link: '/' },
    ],
  },
  {
    title: 'Khai báo hệ thống',
    submenus: [
      { title: 'Submenu 1', link: '/about' },
      { title: 'Submenu 2', link: '/about' },
    ],
  },
  {
    title: 'Quản lý vận hành kho',
    submenus: [
      { title: 'Submenu 1', link: '/contact' },
      { title: 'Submenu 2', link: '/contact' },
    ],
  },
  {
    title: 'Tạo phiếu nhập hàng',
    submenus: [
      { title: 'Submenu 1', link: '/login' },
      { title: 'Submenu 2', link: '/login' },
    ],
  },
  {
    title: 'Tạo phiếu xuất hàng',
    submenus: [
      { title: 'Submenu 1', link: '/login' },
      { title: 'Submenu 2', link: '/login' },
    ],
  },
  {
    title: 'Chi tiết nhập xuất',
    submenus: [
      { title: 'Submenu 1', link: '/login' },
      { title: 'Submenu 2', link: '/login' },
    ],
  },
]);
</script>

<style scoped>
/* Styles for layout components */
header {
  font-family: Arial, Helvetica, sans-serif;
}

aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
}

main {
  transition: margin-left 0.3s;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* Sidebar width */
.w-64 {
  width: 16rem; /* Width when open */
}

.w-16 {
  width: 4rem; /* Width when collapsed */
}

/* Toggle button position */
button {
  position: absolute;
}

/* Submenu styles */
ul {
  list-style: none;
}
</style>
