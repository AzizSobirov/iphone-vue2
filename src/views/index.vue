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
        backgroundImage: `url(${device.background})`,
      }"
    >
      <Statusbar />
      <transition name="lockscreen-transition" mode="out-in">
        <LockScreen v-if="device.locked" />
      </transition>
      <transition name="page-transition" mode="out-in">
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

<style scoped>
/* Lock Screen Transition */
.lockscreen-transition-enter-active {
  animation: fade-in 0.3s ease-out, zoom-in 0.3s ease-out;
}

.lockscreen-transition-leave-active {
  animation: unlock-animation 0.3s ease-out forwards; /* Smooth unlock animation */
}

/* Page transition animation */
.page-transition-enter-active {
  animation: zoom-in 0.3s ease-out, fade-in 0.3s ease-out;
}

.page-transition-leave-active {
  animation: zoom-out 0.3s ease-in, fade-out 0.3s ease-in;
}

/* Unlock animation for lock screen (like iPhone unlock) */
@keyframes unlock-animation {
  from {
    transform: scale(1); /* Start at normal size */
    opacity: 1; /* Fully visible */
  }
  to {
    transform: scale(0.8); /* Scale down to simulate zoom-out */
    opacity: 0; /* Fade out */
  }
}

/* Animations for zoom and fade transitions */
@keyframes zoom-in {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
