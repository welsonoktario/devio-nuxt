<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reverse: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const slots = useSlots();
const height = ref(100);

onMounted(() => {
  if (process.client) {
    height.value = window.innerHeight;
  }
});
</script>

<template>
  <div
    :class="{
      'flex h-auto w-full flex-row-reverse md:h-screen': reverse,
      'flex h-auto w-full flex-row md:h-screen': !reverse,
    }"
  >
    <div class="relative h-0 overflow-hidden bg-primary md:h-full md:w-1/2">
      <NuxtImg
        :src="imageSrc"
        :alt="header"
        fit="cover"
        :height="height"
        loading="lazy"
        class="max-w-none"
      />
    </div>
    <div
      class="flex flex-col justify-center py-2 px-10 sm:px-20 md:w-1/2 lg:px-24 xl:px-40"
    >
      <h3 class="pb-2 text-2xl text-primary lg:text-4xl">
        {{ header ?? "Header" }}
      </h3>
      <p class="mt-3 text-lg font-light leading-snug text-primary lg:text-2xl">
        {{ description ?? "Description goes here" }}
      </p>
      <span v-if="slots.default" class="mt-3">
        <slot />
      </span>
    </div>
  </div>
</template>

<style scoped>
.section-content-half {
  @apply flex w-full flex-col items-center justify-center space-y-3 bg-white py-10 font-medium md:space-y-4 md:pt-20 md:pb-32;
}

.section-content-half .section-content-title {
  @apply w-10/12 text-center text-4xl text-primary md:w-3/6 md:text-5xl lg:w-[35%] lg:leading-tight;
}

.section-content-half .section-content-description {
  @apply w-5/6 text-center text-xl font-light text-primary md:w-[56%] md:text-2xl md:leading-normal;
}
</style>
