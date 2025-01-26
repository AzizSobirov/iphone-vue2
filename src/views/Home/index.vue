<template>
  <div class="screen">
    <div class="apps">
      <div
        class="app"
        v-for="(app, index) in apps"
        :key="index"
        @click="openApp(app)"
      >
        <img :src="app.icon" alt="" />
        <span>{{ app.name }}</span>
      </div>
    </div>

    <div class="tabs">
      <div
        class="tab"
        v-for="(app, index) in tabs"
        :key="index"
        @click="openApp(app)"
      >
        <img :src="app.icon" alt="" />
        <div v-if="app.notifications > 0" class="badge">
          {{ app.notifications }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

import cameraSvg from "./img/camera.svg";
import gallerySvg from "./img/gallery.svg";
import navigatorSvg from "./img/navigator.svg";
import newsSvg from "./img/news.svg";
import groupsSvg from "./img/groups.svg";
import garageSvg from "./img/garage.svg";
import radioSvg from "./img/radio.svg";
import calendarSvg from "./img/calendar.svg";
import operatorSvg from "./img/operator.svg";
import lotterySvg from "./img/lottery.svg";
import phoneSvg from "./img/phone.svg";
import settingsSvg from "./img/settings.svg";
import contactsSvg from "./img/contacts.svg";
import messagesSvg from "./img/messages.svg";

export default {
  name: "home",
  data() {
    return {
      apps: [
        {
          icon: cameraSvg,
          name: "Камера",
          link: "/camera",
        },
        {
          icon: gallerySvg,
          name: "Галерея",
          link: "/gallery",
        },
        {
          icon: navigatorSvg,
          name: "Навигатор",
          link: "/navigator",
        },
        {
          icon: newsSvg,
          name: "Weazel News",
          link: "/news",
        },
        {
          icon: groupsSvg,
          name: "Группа",
          link: "/groups",
        },
        {
          icon: garageSvg,
          name: "Мои авто",
          link: "/cars",
        },
        {
          icon: radioSvg,
          name: "Радио",
          link: "/radio",
        },
        {
          icon: calendarSvg,
          name: "Календарь",
          link: "/calendar",
        },
        {
          icon: operatorSvg,
          name: "Оператор",
          link: "/operator",
        },
        {
          icon: lotterySvg,
          name: "Лотерея",
          link: "/lottery",
        },
      ],
      tabs: [
        {
          icon: phoneSvg,
          name: "Phone",
          link: "/phone",
          notifications: 0,
        },
        {
          icon: settingsSvg,
          name: "Settings",
          link: "/settings",
          notifications: 0,
        },
        {
          icon: contactsSvg,
          name: "Contacts",
          link: "/phone/contacts",
          notifications: 0,
        },
        {
          icon: messagesSvg,
          name: "Messages",
          link: "/messages",
          notifications: 482,
        },
      ],
    };
  },
  methods: {
    openApp(app) {
      this.$router.push(app.link);
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.apps {
  margin-top: rem(18);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: rem(20);
}

.app {
  cursor: pointer;
  width: rem(38);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: rem(5);

  img {
    width: rem(38);
    height: rem(38);
    object-fit: cover;
  }

  span {
    color: #fff;
    font-size: rem(10);
    font-weight: 400;
    white-space: nowrap;
  }
}

.tabs {
  margin-top: auto;
  margin-bottom: rem(4);
  padding: rem(12);
  width: 100%;
  backdrop-filter: blur(rem(12));
  background: rgba(245, 248, 255, 0.21);
  border-radius: rem(22);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(5);
}

.dark .tabs {
  background: rgba(68, 68, 68, 0.21);
}

.tab {
  position: relative;
  cursor: pointer;
  width: rem(38);
  height: rem(38);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .badge {
    display: none;
  }
}
</style>
