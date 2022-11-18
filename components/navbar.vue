<script setup lang="ts">
const isMenuOpen = ref(false);

const scrollTo = (id: string) => {
  console.log(id);
};
</script>

<template>
  <div class="header">
    <div
      class="container mx-auto flex h-full w-full flex-row items-center justify-between md:px-10"
    >
      <div class="relative my-auto h-9 w-28">
        <NuxtImg
          src="/img/logo-white.png"
          alt="Devio"
          format="webp"
          fit="contain"
          loading="lazy"
        />
      </div>

      <div
        class="hidden items-center justify-around gap-5 text-lg text-white md:inline-flex"
      >
        <p class="group cursor-pointer transition duration-300 ease-in-out">
          <button @click="scrollTo('#home')">Home</button>
          <span
            class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
          ></span>
        </p>
        <p class="group cursor-pointer transition duration-300 ease-in-out">
          <button @click="scrollTo('#services')">Services</button>
          <span
            class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
          ></span>
        </p>
        <p class="group cursor-pointer transition duration-300 ease-in-out">
          <button @click="scrollTo('#why-us')">Why Us</button>
          <span
            class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
          ></span>
        </p>
        <p class="group cursor-pointer transition duration-300 ease-in-out">
          <button @click="scrollTo('#works')">Our Works</button>
          <span
            class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
          ></span>
        </p>
        <button class="btn-contact">Contact Us</button>
      </div>

      <!-- mobile menu toggle -->
      <button class="text-2xl font-light md:hidden" @click="isMenuOpen = false">
        &#x2630;
      </button>
    </div>

    <!-- mobile menu -->
    <div :class="isMenuOpen ? 'header-sm' : 'header-sm-hidden'">
      <p class="group my-1 cursor-pointer transition duration-300 ease-in-out">
        <button @click="scrollTo('#home')">Home</button>
        <span
          class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
        ></span>
      </p>
      <p class="group my-1 cursor-pointer transition duration-300 ease-in-out">
        <button @click="scrollTo('#services')">Services</button>
        <span
          class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
        ></span>
      </p>
      <p class="group my-1 cursor-pointer transition duration-300 ease-in-out">
        <button @click="scrollTo('#why-us')">Why Us</button>
        <span
          class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
        ></span>
      </p>
      <p class="group my-1 cursor-pointer transition duration-300 ease-in-out">
        <button @click="scrollTo('#works')">Our Works</button>
        <span
          class="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"
        ></span>
      </p>
      <button class="btn-contact">Contact Us</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  @apply fixed top-0 left-0 right-0 z-10 mx-auto h-16 bg-transparent px-8 text-zinc-50 transition-all md:h-24 md:px-0;
}

.header-sm {
  @apply fixed top-16 left-0 right-0 flex flex-col rounded-b-md bg-primary-light p-4 px-8 shadow-md transition-all md:hidden;
}

.header-sm-hidden {
  display: none !important;
}

html[data-direction="down"] .header {
  transform: translate3d(0, -100%, 0);
}

html[data-direction="down"] .header-sm {
  transform: translate3d(0, -100%, 0);
}

html[data-more="true"] .header {
  @apply bg-primary/80 backdrop-blur-md;
}

html[data-more="false"] .header {
  @apply bg-transparent;
}

.btn-contact {
  @apply mt-2 rounded-full px-5 py-2 text-base text-primary md:mt-0;
  background-color: #e9c267;
}
</style>
