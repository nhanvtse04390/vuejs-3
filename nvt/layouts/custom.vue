<template>
  <div>
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl">My Nuxt Application</h1>
    </header>

    <!-- Sidebar (optional) -->
    <aside class="bg-gray-100 w-64 p-4 fixed h-full">
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </aside>

    <!-- Main content area -->
    <main class="ml-64 p-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 mt-8 text-center">
      &copy; 2024 My Nuxt Application
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