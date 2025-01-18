<template>
  <div class="screen">
    <div class="title">Настройки</div>

    <div class="profile">
      <div class="profile-avatar"><img :src="profile.avatar" alt="" /></div>
      <div class="profile-info">
        <div class="profile-name">{{ profile.name }}</div>
        <div class="profile-number">{{ profile.number }}</div>
      </div>
    </div>

    <div class="sections">
      <div
        class="section"
        v-for="section in sections"
        :key="section.name"
        @click="openSection(section.link)"
      >
        <img class="section-icon" :src="section.icon" alt="" />
        <span class="section-name">{{ section.name }}</span>

        <img
          v-if="section.link || section.link == ''"
          class="section-angle"
          src="./img/angle-right.svg"
          alt=""
        />

        <!-- <input
          v-if="section.action"
          type="checkbox"
          @change="($event) => section.action($event.target.checked)"
        /> -->

        <USwitch
          v-if="section.action"
          :checked="device.theme == 'light'"
          @change="($event) => section.action($event.target.checked)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { playSound } from "@/assets/composables/useMe";
import { Slider, Switch } from "@/components/ui";

import simIcon from "./img/sim.svg";
import pilotIcon from "./img/pilot.svg";
import themesIcon from "./img/themes.svg";
import soundsIcon from "./img/sounds.svg";
import notificationsIcon from "./img/notifications.svg";
import lockIcon from "./img/lock.svg";
import brightnessIcon from "./img/brightness.svg";
import deviceIcon from "./img/device.svg";

export default {
  name: "settings",
  components: { Slider, USwitch: Switch },
  data() {
    return {
      sections: [
        {
          icon: simIcon,
          name: "Извлечь SIM",
          link: "",
          action: null,
        },
        {
          icon: pilotIcon,
          name: "Авиарежим",
          link: null,
          action: this.toggleTheme,
        },
        {
          icon: themesIcon,
          name: "Обои",
          link: "",
          action: null,
        },
        {
          icon: soundsIcon,
          name: "Звуки",
          link: "",
          action: null,
        },
        {
          icon: notificationsIcon,
          name: "Уведомления",
          link: null,
          action: this.toggleTheme,
        },
        {
          icon: lockIcon,
          name: "Экран блокировки",
          link: null,
          action: this.toggleTheme,
        },
        {
          icon: brightnessIcon,
          name: "Экран и яркость",
          link: "/brightness",
          action: null,
        },
        {
          icon: deviceIcon,
          name: "Об устройстве",
          link: "",
          action: null,
        },
      ],
    };
  },
  computed: {
    ...mapState(["device", "profile"]),
  },
  methods: {
    ...mapMutations(["changeScale", "toggleTheme"]),
    openSection(link) {
      if (link) {
        this.$router.push(`/settings${link}`);
        playSound();
      }
    },
  },
  mounted() {
    // this.changeScale({
    //   target: {
    //     value: 2.75,
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.screen {
  background: var(--background);
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: em(16);
}

.title {
  margin-top: em(15);
  font-size: em(20);
  font-weight: 700;
}

.profile {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: em(10);

  &-avatar {
    width: em(32);
    height: em(32);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: em(4);
  }

  &-name {
    font-size: em(12);
    font-weight: 600;
  }

  &-number {
    color: var(--text-muted);
    font-size: em(10);
    font-weight: 500;
  }
}

.sections {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: em(6);
}

.section {
  padding: em(5);
  width: 100%;
  background: #fff;
  border-radius: em(7);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: em(8);

  &-icon {
    width: em(20);
    height: em(20);
  }

  &-name {
    font-size: em(10);
    font-weight: 500;
  }

  &-angle {
    margin-left: auto;
    width: em(13);
    height: em(13);
  }

  .switch {
    margin-left: auto;
  }
}

.dark .section {
  background: #1c1c1e;
}
</style>
