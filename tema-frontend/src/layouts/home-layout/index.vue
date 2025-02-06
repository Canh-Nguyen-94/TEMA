<script setup>
  import { RouterView } from "vue-router";
  import AppHeader from "@components/AppHeader.vue";
</script>

<template>
  <div class="w-full h-[100vh] overflow-auto">
    <AppHeader />
    <div class="w-full px-16"><RouterView /></div>
  </div>
</template>

<style scoped>
  .main {
    margin-left: 280px;
    transition: 0.3s;

    &.collapsed {
      margin-left: 110px;
    }
  }
</style>
