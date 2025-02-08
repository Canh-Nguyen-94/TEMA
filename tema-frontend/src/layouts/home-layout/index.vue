<script setup>
  import { ref } from "vue";
  import { RouterView, RouterLink } from "vue-router";
  import AppHeader from "@components/AppHeader.vue";
  import { headerItems } from "@assets/data";
  import { X, ChevronRight } from "lucide-vue-next";
  import Icon from "@components/Icon.vue";

  const isMenuOpen = ref(false);
</script>

<template>
  <div class="w-full h-[100vh] overflow-auto relative">
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="w-[327px] h-[100vh] fixed top-0 right-0 z-[1000] px-4 pt-[77px] flex flex-col gap-4 bg-primary opacity-70"
      >
        <X
          class="absolute top-4 right-4 text-background cursor-pointer"
          @click="isMenuOpen = false"
        />

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
    </Transition>
    <div class="w-full md:w-[50%] absolute top-0 px-4 md:pl-[50px]">
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
