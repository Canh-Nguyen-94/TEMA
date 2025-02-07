<script setup>
  import { RouterView } from "vue-router";
  import AppHeader from "@components/AppHeader.vue";
</script>

<template>
  <div class="w-full h-[100vh] overflow-auto relative">
    <div class="w-[50%] absolute top-0 pl-[50px]">
      <AppHeader />
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
