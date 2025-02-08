<script setup>
  import { ref } from "vue";
  import { RouterView, RouterLink } from "vue-router";
  import {
    X,
    ChevronRight,
    ArrowUpRight,
    CircleChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
  } from "lucide-vue-next";
  import { onClickOutside } from "@vueuse/core";
  import AppHeader from "@components/AppHeader.vue";
  import { headerItems } from "@assets/data";
  import Icon from "@components/Icon.vue";

  const isMenuOpen = ref(false);
  const menuRef = ref(null);

  onClickOutside(menuRef, () => {
    isMenuOpen.value = false;
  });
</script>

<template>
  <div class="w-full h-[100vh] overflow-auto relative">
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        ref="menuRef"
        class="w-[327px] h-[100vh] fixed top-0 right-0 z-[1000] px-4 pt-[77px] flex flex-col justify-between gap-4 bg-primary opacity-70"
      >
        <X
          class="absolute top-4 right-4 text-background cursor-pointer"
          @click="isMenuOpen = false"
        />
        <div class="flex flex-col gap-4">
          <p
            v-for="item in headerItems"
            :key="item.id"
            class="flex justify-between text-lg font-[250] leading-[26px] text-background"
          >
            <Icon :icon="item.icon" :size="30" />
            <RouterLink :to="item.path">
              {{ item.title }}
            </RouterLink>
            <ChevronRight class="text-background" />
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-between items-center md:px-20 pt-8 pb-4"
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
    </Transition>
    <div class="w-full md:w-[50%] absolute top-0 px-4 md:pl-[50px]">
      <div id="top"></div>
      <AppHeader v-model="isMenuOpen" />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition:
      all 0.5s ease-out,
      opacity 0.1s ease-out;
  }
  .slide-leave-active {
    position: absolute;
  }
  .slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-leave-to {
    opacity: 0;
    transform: translateX(0);
  }
</style>
