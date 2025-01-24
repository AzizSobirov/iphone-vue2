<template>
  <div
    class="iphone"
    :class="{
      dark: device.theme === 'dark',
    }"
    :style="{
      fontSize: device.scale + 'vh',
      fontFamily: `${device.fontFamily}, sans-serif`,
      filter: `brightness(${device.brightness}%)`,
    }"
  >
    <div
      class="layout"
      :style="{
        backgroundImage: `url(${device.wallpaper})`,
      }"
    >
      <Statusbar />
      <transition name="lockscreen-transition" mode="out-in">
        <LockScreen v-if="device.locked" />
      </transition>
      <transition name="default-transition" mode="out-in">
        <router-view v-if="!device.locked" />
      </transition>
      <Gesture />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { LockScreen, Statusbar, Gesture } from "@/components/layout";

export default {
  name: "iphone",
  components: { Statusbar, Gesture, LockScreen },
  computed: {
    ...mapState(["device"]),
  },
  methods: {
    ...mapMutations(["getSettings", "setVolume"]),
    handleKeydown(event) {
      let newVolume = this.device.volume;

      if (event.key === "AudioVolumeUp") {
        newVolume = Math.min(newVolume + 5, 100); // Increase volume, max 100
      } else if (event.key === "AudioVolumeDown") {
        newVolume = Math.max(newVolume - 5, 0); // Decrease volume, min 0
      }

      this.setVolume(newVolume);
    },
  },
  mounted() {
    this.getSettings();
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>
