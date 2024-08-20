<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

