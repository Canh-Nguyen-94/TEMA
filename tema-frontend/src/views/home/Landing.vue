<script setup>
  import {
    onBeforeMount,
    onBeforeUnmount,
    onMounted,
    onUnmounted,
    ref,
  } from "vue";
  import { ArrowUpRight, CircleChevronUp, CodeXml } from "lucide-vue-next";

  import LandingSlider from "./LandingSlider.vue";
  import { Button } from "@common/ui";
  import edx from "@assets/images/edx.png";
  import coursera from "@assets/images/coursera.png";
  import udemy from "@assets/images/udemy.png";
  import Package from "./Package.vue";
  import FAQs from "./FAQs.vue";
  import Footer from "./Footer.vue";

  const appButton = ref();

  const images = [edx, coursera, udemy];

  const userScroll = () => {
    console.log("scroll y");
    if (window.scrollY > 0) {
      appButton.value.classList.remove("invisible");
      console.log("scrolled");
    } else {
      appButton.value.classList.add("invisible");
      console.log("top");
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  onMounted(() => {
    console.log("mounted");
    document.addEventListener("scroll", userScroll);
  });
  onUnmounted(() => {
    document.removeEventListener("scroll", userScroll);
  });
</script>

<template>
  <div id="container">
    <div class="flex flex-wrap md:flex-nowrap h-100vh bg-foreground">
      <div class="md:w-[50%] px-4 md:pl-[50px] pt-[180px]">
        <h1>
          Improve your skills by
          <CodeXml class="inline bg-primary text-background rounded-[50%]" />
          study with coding
        </h1>
        <img src="@assets/images/line.png" class="mt-16" />
        <p class="max-w-[375px] w-[70%] leading-[20px]">
          Create, launch, and iterate on new marketing campaigns without
          distracting your product team.
        </p>
        <Button
          class="bg-primary text-background w-[236px] h-[75px] px-[29px] py-[15px] mt-[111px] mb-20"
        >
          Get Started
          <ArrowUpRight />
        </Button>
      </div>
      <div class="relative">
        <img src="@assets/images/background.png" class="md:w-[50vw]" />
        <img
          src="@assets/images/man.png"
          class="w-[70%] absolute bottom-0 right-[50px] z-10"
        />
        <img
          src="@assets/images/code.png"
          class="w-[70%] absolute bottom-[120px] md:-left-[25%]"
        />
        <img
          src="@assets/images/name.png"
          class="absolute w-[60%] bottom-0 left-0 z-20"
        />
        <img
          src="@assets/images/caution.png"
          class="absolute w-[100px] -bottom-[5%] -bottom-[100px] right-10 z-20"
        />
      </div>
    </div>
    <div
      class="flex justify-between items-center h-[192px] md:h-[282px] gap-12 md:gap-40 px-6 md:px-[130px]"
    >
      <div v-for="item in images" :key="item">
        <img :src="item" alt="image" class="w-full" />
      </div>
    </div>

    <LandingSlider />

    <div
      class="flex flex-wrap-reverse md:flex-nowrap w-full pt-8 md:pt-[176px] px-4 md:px-[111px] mb-20"
    >
      <div class="relative w-full">
        <img src="@assets/images/code2.png" class="w-[593px]" />
        <img
          src="@assets/images/caution2.png"
          class="w-[100px] md:w-[195px] absolute bottom-0 right-0 md:top-[100px] md:right-[100px]"
        />
      </div>
      <div>
        <p class="text-5xl font-bold mb-9">
          The language for building web pages
        </p>
        <p class="text-[22px] font-[250] leading-6 mb-12">
          Go live on a fast, reliable, and hassle-free hosting network that
          scales with your business with one click and go code!
        </p>
        <Button
          class="bg-primary text-background w-full md:w-[250px] h-[59px] md:h-[75px] px-[29px] py-[15px]"
        >
          Try it Yourself
          <ArrowUpRight />
        </Button>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between items-center w-full px-[36px] md:px-[50px]"
    >
      <div class="md:w-[50%]">
        <p
          class="text-[34px] md:text-5xl leading-[40px] text-center md:text-left font-bold mb-[66px] md:mb-[98px]"
        >
          Get up and running fast together
        </p>
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div
            class="flex flex-col items-center md:items-start border-b md:border-r md:border-b-0 md:pr-12 pb-[55px] md:pb-0 max-w-[375px]"
          >
            <img src="@assets/images/bread.png" alt="" />
            <p class="text-[34px] font-bold mt-[61px] mb-5">University</p>
            <p class="text-center md:text-left px-20 md:px-0">
              Browse hundreds of in-depth videos, courses, and guides to get up
              and running fast
            </p>
          </div>
          <div
            class="flex flex-col items-center md:items-start md:pl-[61px] pb-[55px] md:pb-0 w-[375px]"
          >
            <img src="@assets/images/hexagon.png" alt="" />
            <p class="text-[34px] font-bold mt-[61px] mb-5">Showcase</p>
            <p class="text-center md:text-left px-20 md:px-0">
              Get inspired by the incredible websites built by members of the
              community
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div><img src="@assets/images/tutor.png" alt="tutor" /></div>
      </div>
    </div>
    <Package />
    <FAQs />
    <Footer />
    <!-- <div class="fixed bottom-6 right-4">
      <Icon icon="arrow" :size="24" />
    </div> -->
    <div
      ref="appButton"
      id="appButton"
      class="fixed bottom-6 right-4 cursor-pointer"
      @click="scrollToTop"
    >
      <CircleChevronUp
        class="text-accent bg-muted rounded-[50%] cursor-pointer"
      />
    </div>
  </div>
</template>

<style scoped>
  .showButton {
    display: block !important;
  }
</style>
