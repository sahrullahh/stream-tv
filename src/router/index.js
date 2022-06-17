import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Server from "../views/Server.vue";
import Stream from "../views/Stream.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/server/:channels/:id",
    name: "server",
    component: Server,
  },
  {
    path: "/stream/:channels",
    name: "streamtv",
    component: Stream,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
