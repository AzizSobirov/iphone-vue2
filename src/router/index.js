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
        component: () => import("../views/Gallery/layout.vue"),
        children: [
          {
            path: "",
            name: "gallery",
            component: () => import("../views/Gallery/index.vue"),
          },
          {
            path: ":id",
            name: "gallery-media",
            component: () => import("../views/Gallery/[id].vue"),
          },
        ],
      },

      {
        path: "navigator",
        name: "navigator",
        component: () => import("../views/Navigator/index.vue"),
      },

      {
        path: "radio",
        name: "radio",
        component: () => import("../views/Radio/index.vue"),
      },

      {
        path: "news",
        component: () => import("../views/News/layout.vue"),
        children: [
          {
            path: "",
            name: "news",
            component: () => import("../views/News/index.vue"),
          },
          {
            path: "create",
            name: "news-create",
            component: () => import("../views/News/create.vue"),
          },
        ],
      },

      {
        path: "groups",
        component: () => import("../views/Groups/layout.vue"),
        children: [
          {
            path: "",
            name: "groups",
            component: () => import("../views/Groups/index.vue"),
          },
          {
            path: "create",
            name: "groups-create",
            component: () => import("../views/Groups/create.vue"),
          },
        ],
      },

      {
        path: "calendar",
        component: () => import("../views/Calendar/layout.vue"),
        children: [
          {
            path: "",
            name: "calendar",
            component: () => import("../views/Calendar/index.vue"),
          },
          {
            path: ":month/:year",
            name: "calendar-date",
            component: () => import("../views/Calendar/[date].vue"),
          },
        ],
      },

      {
        path: "settings",
        component: () => import("../views/Settings/layout.vue"),
        children: [
          {
            path: "",
            name: "settings",
            component: () => import("../views/Settings/index.vue"),
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
        path: "phone",
        component: () => import("../views/Phone/layout.vue"),
        children: [
          {
            path: "",
            name: "phone",
            component: () => import("../views/Phone/index.vue"),
          },
          {
            path: "contacts",
            name: "phone-contacts",
            component: () => import("../views/Phone/contacts.vue"),
          },
        ],
      },

      {
        path: "messages",
        component: () => import("../views/Messages/layout.vue"),
        children: [
          {
            path: "",
            name: "messages",
            component: () => import("../views/Messages/index.vue"),
          },
          {
            path: ":id",
            name: "messages-message",
            component: () => import("../views/Messages/[id].vue"),
          },
        ],
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
