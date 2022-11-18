//@ts-ignore
import LocomotiveScroll from "locomotive-scroll";

export default defineNuxtPlugin((nuxtApp) => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    getDirection: true,
  });

  scroll.on("scroll", (instance: any) => {
    document.documentElement.setAttribute("data-direction", instance.direction);

    if (window && window.innerWidth >= 786) {
      if (instance.scroll.y + window.innerWidth * 0.9 > window.innerWidth) {
        document.documentElement.setAttribute("data-more", "true");
      } else {
        document.documentElement.setAttribute("data-more", "false");
      }
    } else {
      if (instance.scroll.y + window.innerHeight * 0.96 > window.innerHeight) {
        document.documentElement.setAttribute("data-more", "true");
      } else {
        document.documentElement.setAttribute("data-more", "false");
      }
    }
  });

  nuxtApp.vueApp.provide("scroll", scroll);
});
