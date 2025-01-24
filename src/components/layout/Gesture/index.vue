<template>
  <div class="gesture" :style="getStyle">
    <div class="indicator" @click="backToHome"></div>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "Gesture",
  computed: {
    getStyle() {
      return {
        "--foreground": this.$route.meta.statusbar == "white" ? "#fff" : "",
      };
    },
  },
  methods: {
    backToHome() {
      if (this.$route.name !== "home") {
        this.$router.push("/");
      }
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.gesture {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: rem(16);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .indicator {
    position: relative;
    width: rem(114);
    height: rem(3);
    background: var(--foreground);
    border-radius: 9999px;
    cursor: pointer;
    mix-blend-mode: difference;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: rem(14);
    }
  }
}
</style>
