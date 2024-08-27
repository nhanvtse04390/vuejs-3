<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-custom-100 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold pl-12">My Nuxt Application</h1>
      </div>
    </header>

    <!-- Sidebar -->
    <aside class="bg-custom-100 w-64 p-4 pt-20 fixed h-full">
      <nav>
        <ul class="space-y-4">
          <li><NuxtLink to="/" class="block text-custom-200 hover:bg-custom-dark rounded-r-lg p-2 font-bold">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="block text-custom-200 hover:bg-custom-dark rounded-r-lg p-2 font-bold">About</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block text-custom-200 hover:bg-custom-dark rounded-r-lg p-2 font-bold">Contact</NuxtLink></li>
          <li><NuxtLink to="/login" class="block text-custom-200 hover:bg-custom-dark rounded-r-lg p-2 font-bold" >Login</NuxtLink></li>
        </ul>
      </nav>
    </aside>

    <div class="flex flex-grow">
      <!-- Main content area -->
      <main class="flex-grow p-2 ml-64"> <!-- Thêm ml-64 để tránh đè lên sidebar -->
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-950 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        &copy; 2024 My Nuxt Application
      </div>
    </footer>
  </div>
</template>

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
  margin-left: 16rem; /* Adjust for sidebar width */
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

<script setup lang="ts">
</script>
