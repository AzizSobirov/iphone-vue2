<template>
  <div class="gesture">
    <div class="indicator" @click="backToHome"></div>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "Gesture",
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
  height: em(16);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .indicator {
    position: relative;
    width: em(114);
    height: em(3);
    background: var(--foreground);
    border-radius: 9999px;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: em(14);
    }
  }
}
</style>
