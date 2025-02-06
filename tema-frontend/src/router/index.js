import { createRouter, createWebHistory } from "vue-router";

import home from "./home";

const router = createRouter({
  history: createWebHistory(),
  routes: [...home],
});

export default router;
