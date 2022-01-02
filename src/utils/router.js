import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "RandomProverbs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandomProverbs.vue"),
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
