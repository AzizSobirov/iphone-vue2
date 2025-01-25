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

        <USwitch
          v-if="section.action"
          :checked="device[section.key]"
          @change="(value) => section.action(value)"
        />
      </div>
    </div>

    <Slider
      label="РАЗМЕР ТЕЛЕФОНА"
      :value="parseFloat(device.fontSize)"
      :min="16"
      :max="28"
      :step="0.1"
      @update="setSize"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { playSound } from "@/composables/useMe";
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
          key: null,
          action: null,
        },
        {
          icon: pilotIcon,
          name: "Авиарежим",
          link: null,
          key: "airplane_mode",
          action: this.toggleAirplaneMode,
        },
        {
          icon: themesIcon,
          name: "Обои",
          link: "/wallpapers",
          key: null,
          action: null,
        },
        {
          icon: soundsIcon,
          name: "Звуки",
          link: "/ringtones",
          key: null,
          action: null,
        },
        {
          icon: notificationsIcon,
          name: "Уведомления",
          link: null,
          key: "notifications",
          action: this.toggleNotifications,
        },
        {
          icon: lockIcon,
          name: "Экран блокировки",
          link: null,
          key: "screen_lock",
          action: this.toggleScreenLock,
        },
        {
          icon: brightnessIcon,
          name: "Экран и яркость",
          link: "/brightness",
          key: null,
          action: null,
        },
        {
          icon: deviceIcon,
          name: "Об устройстве",
          link: "",
          key: null,
          action: null,
        },
      ],
    };
  },
  computed: {
    ...mapState(["device", "profile"]),
  },
  methods: {
    ...mapMutations([
      "setSize",
      "toggleNotifications",
      "toggleAirplaneMode",
      "toggleScreenLock",
    ]),
    openSection(link) {
      if (link) {
        this.$router.push(`/settings${link}`);
        playSound();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.title {
  margin-top: rem(15);
  font-size: rem(20);
  font-weight: 700;
}

.profile {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(10);

  &-avatar {
    width: rem(32);
    height: rem(32);

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
    gap: rem(4);
  }

  &-name {
    font-size: rem(12);
    font-weight: 600;
  }

  &-number {
    color: var(--text-muted);
    font-size: rem(10);
    font-weight: 500;
  }
}

.sections {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(6);
}

.section {
  cursor: pointer;
  padding: rem(5);
  width: 100%;
  background: #fff;
  border-radius: rem(7);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(8);

  &-icon {
    width: rem(20);
    height: rem(20);
  }

  &-name {
    font-size: rem(10);
    font-weight: 500;
  }

  &-angle {
    margin-left: auto;
    width: rem(13);
    height: rem(13);
  }

  .switch {
    margin-left: auto;
  }
}

.dark .section {
  background: #1c1c1e;
}

.slider {
  margin-top: auto;
  margin-bottom: rem(15);
}
</style>
