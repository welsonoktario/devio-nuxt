<template>
  <section
    id="home"
    class="w-full bg-gradient-to-br from-primary to-primary-light px-8 pt-24 md:max-h-screen md:min-h-screen md:px-0 md:py-8 md:pt-10"
    data-scroll-section-id="home"
    data-scroll-section
  >
    <div
      class="container mx-auto flex flex-col items-center gap-4 pb-10 sm:h-auto md:h-screen md:flex-row md:px-10"
    >
      <div class="my-auto w-full flex-1">
        <h6 class="mb-1 text-2xl font-medium tracking-wide text-amber-200">
          Welcome
        </h6>
        <h1
          class="text-4xl font-medium text-zinc-50 md:text-5hxl md:leading-tight lg:text-5hxl lg:leading-tight"
        >
          We are app developer based in Indonesia
        </h1>
        <p class="my-6 text-lg text-zinc-200 md:leading-6">
          Develop fully customize application based on client&apos;s unique
          requirements. Not sure about your business decision? No worry, we will
          help you!
        </p>

        <div class="inline-flex">
          <button class="btn-contact">Contact Us</button>
          <button class="btn-explore">
            Explore More
            <NuxtImg src="/img/arrow-right.svg" alt="Explore More" />
          </button>
        </div>
      </div>
      <div class="my-auto hidden lg:flex lg:flex-1">
        <NuxtImg
          src="/img/landing.webp"
          alt="Welcome to Devio"
          class="w-100% h-auto rounded-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.h-100 {
  height: calc(100vh - 4rem);
}

.min-h-100 {
  min-height: calc(100vh - 4rem);
}

.btn-contact {
  @apply rounded-lg py-3 px-6 text-sm font-medium tracking-wide;
  background-color: #e9c267;
  color: #223f81;
}

.btn-explore {
  @apply ml-4 inline-flex items-center bg-transparent py-3 px-6 text-base tracking-wide text-white hover:rounded-lg hover:bg-gray-700 hover:bg-opacity-20 gap-2;
}
</style>
