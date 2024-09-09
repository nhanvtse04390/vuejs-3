<template>
  <div class="layout-container">
    <!-- Toggle Button -->
    <button @click="toggleSidebar" class="header-toggle">
      <svg
          v-if="isSidebarOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <span class="header-title uppercase">{{ titlePage }}</span>
      </div>
    </header>

    <!-- Main container -->
    <div class="main-container">
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ 'sidebar-collapsed': !isSidebarOpen }">
        <nav v-if="isSidebarOpen" class="sidebar-nav">
          <ul>
            <li
                v-for="(menu, index) in menuItems"
                :key="index"
                @click="toggleSubmenu(index)"
                class="menu-item"
            >
              <div class="menu-title">
                <!-- Hiển thị icon của menu chính -->
                <component :is="menu.icon" class="icon"/>
                {{ menu.title }}
              </div>
              <ul v-show="submenuVisible === index" class="submenu">
                <li
                    v-for="(submenu, subIndex) in menu.submenus"
                    :key="subIndex"
                    @click="handleSubmenuClick(submenu.link, submenu.title)"
                    class="submenu-item"
                >
                  <component :is="submenu.icon" class="icon"/>
                  {{ submenu.title }}
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Content Area -->
      <main class="content">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        &copy; VTN
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Cog6ToothIcon, CogIcon, WrenchScrewdriverIcon,PlusCircleIcon,MinusCircleIcon,ReceiptRefundIcon,
  CubeIcon
} from '@heroicons/vue/24/outline';

// State quản lý mở hoặc đóng sidebar
const isSidebarOpen = ref(true);

// Biến để xác định submenu nào đang được hiển thị
const submenuVisible = ref<number | null>(null);

// Hàm xử lý toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Hàm để toggle submenu
const toggleSubmenu = (index: number) => {
  submenuVisible.value = submenuVisible.value === index ? null : index;
};

const titlePage = ref('');

const setTitlePage = (title: string) => {
  titlePage.value = title;
};

// Danh sách các mục menu và submenu
const menuItems = ref([
  {
    title: 'Quản trị',
    icon: Cog6ToothIcon, // Tên icon cho mục menu chính
    submenus: [
      { title: 'Sơ đồ kho', link: '/warehouse-layout', icon: CubeIcon },
      { title: 'Submenu 2', link: '/', icon: 'menu-icon-2' },
    ],
  },
  {
    title: 'Khai báo hệ thống',
    icon: WrenchScrewdriverIcon, // Tên icon cho mục menu chính
    submenus: [
      { title: 'Submenu 1', link: '/about', icon: 'about-icon-1' },
      { title: 'Submenu 2', link: '/about', icon: 'about-icon-2' },
    ],
  },
  {
    title: 'Quản lý vận hành kho',
    icon: CogIcon, // Tên icon cho mục menu chính
    submenus: [
      { title: 'Submenu 1', link: '/contact', icon: 'about-icon-1' },
      { title: 'Submenu 2', link: '/contact', icon: 'about-icon-1' },
    ],
  },
  {
    title: 'Tạo phiếu nhập hàng',
    icon: PlusCircleIcon,
    submenus: [
      { title: 'Submenu 1', link: '/login' },
      { title: 'Submenu 2', link: '/login' },
    ],
  },
  {
    title: 'Tạo phiếu xuất hàng',
    icon: MinusCircleIcon ,
    submenus: [
      { title: 'Submenu 1', link: '/login' },
      { title: 'Submenu 2', link: '/login' },
    ],
  },
  {
    title: 'Chi tiết nhập xuất',
    icon: ReceiptRefundIcon ,
    submenus: [
      { title: 'Submenu 1', link: '/login' },
      { title: 'Submenu 2', link: '/login' },
    ],
  },
]);

const router = useRouter();

// Handle submenu click
const handleSubmenuClick = (link: string, title: string) => {
  setTitlePage(title);
  router.push(link);
};
</script>

<style scoped>
/* Layout Container */
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Toggle Button */
.header-toggle {
  position: absolute;
  top: 1rem; /* Adjust as needed */
  left: 1rem; /* Adjust as needed */
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: background-color 0.3s;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure it's above other elements */
}

.header-toggle:hover {
  background-color: #dbe2e8;
}

.icon {
  width: 24px;
  height: 24px;
}

/* Header */
.header {
  background-color: #f0f4f8; /* Light gray-blue */
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative; /* Position relative to place toggle button correctly */
  z-index: 999; /* Ensure header is below the toggle button */
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-title {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Main Container */
.main-container {
  display: flex;
  flex: 1;
  overflow: hidden; /* Prevent horizontal scroll */
}

/* Sidebar */
.sidebar {
  background-color: #ffffff;
  transition: width 0.3s;
  overflow-y: auto;
  height: calc(100vh - 4rem); /* Adjust height according to header/footer */
  width: 250px; /* Default width */
  position: relative;
}

.sidebar-collapsed {
  width: 60px; /* Width when collapsed */
  display: none; /* Hide when collapsed */
}

/* Sidebar Nav */
.sidebar-nav {
  padding: 1rem;
}

.menu-item {
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.menu-title {
  font-weight: bold;
  padding: 0.5rem;
  background-color: #e2e8f0; /* Light blue */
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  display: flex;
}

.menu-title:hover {
  background-color: #d6e0f0; /* Slightly darker blue */
}

/* Submenu */
.submenu {
  list-style-type: none;
  margin: 0;
  background-color: transparent; /* Very light blue */
}

.submenu-item {
  padding: 0.5rem;
  padding-left: 1rem;
  cursor: pointer;
  background-color: transparent; /* Very light blue */
  transition: background-color 0.3s;
  display: flex;
  font-weight: bold;
}

.submenu-item:hover {
  color: #ff6347; /* Light gray-blue */
}

/* Content */
.content {
  flex: 1;
  padding: 1rem;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Footer */
.footer {
  background-color: #2d3748; /* Dark blue-gray */
  color: #fff;
  padding: 1rem;
  text-align: center;
  width: 100%;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px; /* Khoảng cách giữa icon và tiêu đề */
  color: #4a5568; /* Màu của icon */
}
</style>
