<template>
  <div
    class="iphone"
    :class="{
      dark: device.theme === 'dark',
    }"
    :style="{
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

    updateFontSize() {
      const calculatedSize = (this.device.fontSize / 1080) * window.innerHeight;
      document.documentElement.style.fontSize = `${calculatedSize}px`;
    },
  },
  mounted() {
    this.getSettings();
    window.addEventListener("keydown", this.handleKeydown);

    this.updateFontSize();
    window.addEventListener("resize", this.updateFontSize);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("resize", this.updateFontSize);
  },
  watch: {
    "device.fontSize"(value) {
      this.updateFontSize();
    },
  },
};
</script>
