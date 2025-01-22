<template>
  <div
    class="iphone"
    :class="{
      dark: device.theme === 'dark',
    }"
    :style="{
      fontSize: device.scale + 'vh',
      fontFamily: `${device.fontFamily}, sans-serif`,
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
  name: "index",
  components: { Statusbar, Gesture, LockScreen },
  computed: {
    ...mapState(["device"]),
  },
  methods: {
    ...mapMutations(["getSettings"]),
  },
  mounted() {
    this.getSettings();
  },
};
</script>
