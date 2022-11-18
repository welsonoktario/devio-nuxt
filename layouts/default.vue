<script setup lang="ts">
const scroll = inject("scroll");

onMounted(() => {});
</script>

<template>
  <div data-scroll-container>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
