<script setup>
  import {
    ArrowUpRight,
    CircleChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
  } from "lucide-vue-next";
  import { Button } from "@common/ui";
  import { headerItems } from "@assets/data";
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="relative">
    <div
      class="translate-y-[50%] mx-[30px] md:mx-[127px] md:h-[410px] py-[30px] md:py-[53px] px-[28px] md:px-[100px] flex flex-col items-center rounded-[20px] bg-accent shadow-card"
    >
      <p
        class="text-2xl md:text-5xl font-bold mb-3 leading-[28px] md:leading-[70px] text-center"
      >
        Start upgrading your skills free for this month
      </p>
      <p class="font-[250] text-sm md:text-[34px] mb-4 md:mb-[38px]">
        Build your site for free and take as long as you need
      </p>
      <div class="flex flex-col md:flex-row gap-6">
        <Button
          class="w-[236px] h-[32px] md:h-[75px] bg-popover opacity-50 text-background text-xs md:text-base"
          >Try Yourself</Button
        >
        <Button
          class="w-[236px] h-[32px] md:h-[75px] bg-primary text-background text-xs md:text-base"
        >
          Get Started
          <ArrowUpRight />
        </Button>
      </div>
    </div>
    <div
      class="w-full px-[50px] bg-primary flex flex-col justify-end min-h-[524px] pt-[150px] md:pt-0"
    >
      <div
        class="flex flex-col gap-[60px] md:gap-0 md:flex-row px-20 pb-[26px] items-center justify-between border-b border-border"
      >
        <div class="flex items-center gap-5">
          <CircleChevronRight class="text-accent" />
          <p class="text-[34px] font-bold leading-[40px] text-background">
            Macode
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-[60px]">
          <p v-for="item in headerItems" :key="item.id">
            <RouterLink :to="item.path">
              <span
                class="text-[20px] md:text-[34px] font-[250] text-background"
              >
                {{ item.title }}</span
              >
            </RouterLink>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-between items-center md:px-20 pt-8 pb-[100px]"
      >
        <div
          class="flex justify-center md:justify-start items-center w-full md:w-fit gap-5 border-b md:border-0 pb-8 md:pb-0"
        >
          <Facebook class="text-border" />
          <Instagram class="text-border" />
          <Linkedin class="text-border" />
          <Twitter class="text-border" />
          <Mail class="text-border" />
        </div>
        <div>
          <p class="text-border pt-8 md:pt-0">
            © 2021 Copyright.
            <span class="text-accent inline">Macode.io</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
