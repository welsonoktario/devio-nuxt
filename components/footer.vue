<script setup lang="ts">
const scrollTo = (id: string) => console.log(id);
</script>

<template>
  <footer class="h-[36vh] bg-primary md:h-[42vh]" data-scroll-section>
    <div
      class="h-full p-10 text-lg font-light text-white md:mx-40 md:flex md:flex-row md:items-center md:justify-between md:p-0"
    >
      <div class="inline-flex flex-col">
        <div class="md:w-100 mb-10 w-32">
          <NuxtImg src="{logo}" alt="Devio" layout="responsive" />
        </div>
        <p class="mb-2 hidden items-center gap-2 md:inline-flex">
          <NuxtImg src="{ig}" alt="Instagram" class="h-4 w-auto" />
          devio.id
        </p>
        <p class="hidden items-center gap-2 md:inline-flex">
          <NuxtImg src="{web}" alt="Website" class="h-4 w-auto" />
          www.devio.id
        </p>
      </div>

      <div
        class="flex flex-row-reverse justify-between gap-x-4 text-xs md:mr-10 md:flex-row md:justify-end md:gap-x-44 md:text-base"
      >
        <div class="flex flex-col">
          <p class="mb-4 font-medium md:mb-6">Links</p>
          <button class="text-start" @click="scrollTo('#home')">Home</button>
          <button class="text-start" @click="scrollTo('#services')">
            Services
          </button>
          <button class="text-start" @click="scrollTo('#why-us')">
            Why Us
          </button>
          <button class="text-start" @click="scrollTo('#how-do-we-works')">
            How do we Work
          </button>
          <button class="text-start" @click="scrollTo('#works')">
            Our Works
          </button>
        </div>

        <div class="flex flex-col">
          <p class="mb-4 font-medium md:mb-6">Contact</p>
          <p class="break-all">E. ideviocorp&#64;gmail.com</p>
          <p>T. &#8211;</p>
          <p class="mt-5 md:mt-4">&copy; Devio 2022</p>
        </div>
      </div>
    </div>
  </footer>
</template>
