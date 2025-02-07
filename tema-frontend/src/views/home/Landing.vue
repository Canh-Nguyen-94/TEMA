<script setup>
  import { ArrowUpRight } from "lucide-vue-next";

  import LandingSlider from "./LandingSlider.vue";
  import { Button } from "@common/ui";
  import edx from "@assets/images/edx.png";
  import coursera from "@assets/images/coursera.png";
  import udemy from "@assets/images/udemy.png";

  const images = [edx, coursera, udemy];
</script>

<template>
  <div>
    <div class="flex">
      <div class="w-[50%] pl-[50px] pt-[100px]">
        <p class="text-6xl">Improve your skills by study with coding</p>
        <img src="@assets/images/line.png" class="" />
        <p class="max-w-[375px] w-[70%]">
          Create, launch, and iterate on new marketing campaigns without
          distracting your product team.
        </p>
        <Button class="bg-primary text-background"
          >Get Started
          <ArrowUpRight />
        </Button>
      </div>
      <div class="relative">
        <img src="@assets/images/background.png" class="w-[50vw]" />
        <img
          src="@assets/images/man.png"
          class="w-[70%] absolute bottom-0 right-[50px] z-10"
        />
        <img
          src="@assets/images/code.png"
          class="w-[70%] absolute bottom-[120px] -left-[25%]"
        />
        <img
          src="@assets/images/name.png"
          class="absolute w-[60%] bottom-0 left-0 z-20"
        />
        <img
          src="@assets/images/caution.png"
          class="absolute -bottom-[20%] right-10 z-20"
        />
      </div>
    </div>
    <div class="flex justify-between items-center h-[282px] gap-40">
      <div v-for="item in images" :key="item">
        <img :src="item" alt="image" class="w-full" />
      </div>
    </div>
    <div>
      <LandingSlider />
    </div>
    <div class="flex">
      <div class="relative">
        <img src="@assets/images/code2.png" class="absolute" />
        <img
          src="@assets/images/caution2.png"
          class="absolute -bottom-[20%] right-10 z-20"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
