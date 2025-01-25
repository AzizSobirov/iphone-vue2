import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: { statusbar: "white" },
        component: () => import("../views/Home/index.vue"),
      },
      {
        path: "camera",
        name: "camera",
        meta: { statusbar: "white" },
        component: () => import("../views/Camera/index.vue"),
      },
      {
        path: "gallery",
        meta: { statusbar: "white" },
        component: () => import("../views/Gallery/index.vue"),
        children: [
          {
            path: "",
            name: "gallery",
            component: () => import("../views/Gallery/main.vue"),
          },
          {
            path: ":id",
            name: "gallery-media",
            component: () => import("../views/Gallery/[id].vue"),
          },
        ],
      },

      {
        path: "news",
        meta: { statusbar: "white" },
        component: () => import("../views/News/index.vue"),
        children: [
          {
            path: "",
            name: "news",
            component: () => import("../views/News/main.vue"),
          },
          {
            path: "create",
            name: "news-create",
            component: () => import("../views/News/create.vue"),
          },
        ],
      },

      {
        path: "settings",
        component: () => import("../views/Settings/index.vue"),
        children: [
          {
            path: "",
            name: "settings",
            component: () => import("../views/Settings/main.vue"),
          },
          {
            path: "wallpapers",
            name: "settings-wallpapers",
            component: () => import("../views/Settings/wallpapers.vue"),
          },
          {
            path: "ringtones",
            name: "settings-ringtones",
            component: () => import("../views/Settings/ringtones.vue"),
          },
          {
            path: "brightness",
            name: "settings-brightness",
            component: () => import("../views/Settings/brightness.vue"),
          },
        ],
      },
      {
        path: "navigator",
        name: "navigator",
        component: () => import("../views/Navigator/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
