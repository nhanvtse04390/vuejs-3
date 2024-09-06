<template>
  <div>
    <h2>Welcome to the Home Page!</h2>
    <p>This is the content of the home page.</p>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
});
</script>
