<template>
  <div>
    <div class="left-buttons">
      <div class="silent-btn" @click="toggleSilent"></div>
      <div class="volume-up" @click="volumeUp"></div>
      <div class="volume-down" @click="volumeDown"></div>
    </div>

    <div class="mute" :class="{ show: showMute }">
      <div class="icon">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.04944 8.18982H8.98889V3.57562L4.04944 8.18982Z"
            fill="white"
          />
          <path
            d="M2.59889 8.54475H1.24569C1.0495 8.54475 0.890747 8.38582 0.890747 8.18981C0.890747 7.99379 1.0495 7.83487 1.24569 7.83487H2.59889C2.79508 7.83487 2.95383 7.99379 2.95383 8.18981C2.95383 8.38582 2.79508 8.54475 2.59889 8.54475Z"
            fill="white"
          />
          <path
            d="M8.64822 2.14087C8.12267 1.09716 7.04162 0.381165 5.79332 0.381165C4.02907 0.381165 2.59888 1.81136 2.59888 3.57561V8.18981"
            fill="white"
          />
          <path
            d="M10.4085 8.54475H4.0494C3.85321 8.54475 3.69446 8.38582 3.69446 8.18981C3.69446 7.99379 3.85321 7.83487 4.0494 7.83487H10.4085C10.6047 7.83487 10.7634 7.99379 10.7634 8.18981C10.7634 8.38582 10.6047 8.54475 10.4085 8.54475Z"
            fill="white"
          />
          <path
            d="M5.79329 10.3194C6.57741 10.3194 7.21304 9.68379 7.21304 8.89969H4.37354C4.37354 9.68379 5.00917 10.3194 5.79329 10.3194Z"
            fill="white"
          />
          <path
            d="M1.24568 9.89797C1.15487 9.89797 1.06406 9.8633 0.994733 9.79398C0.856085 9.65533 0.856085 9.43072 0.994733 9.29208L10.1566 0.130231C10.2952 -0.00841682 10.5198 -0.00841682 10.6585 0.130231C10.7971 0.268879 10.7971 0.493488 10.6585 0.632136L1.49664 9.79398C1.42731 9.8633 1.3365 9.89797 1.24568 9.89797Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="mute-title">
        {{ device.mute ? "Бесшумно" : "Обычно" }}
      </div>
    </div>

    <div
      class="volume-control"
      :class="{ show: showVolume }"
      :style="`--percent: ${device.volume}%`"
    >
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        :value="device.volume"
        class="volume-slider"
        @input="onVolumeChange"
      />

      <div class="volume-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 6.6666C13.0175 7.05471 13.4375 7.55798 13.7268 8.13654C14.0161 8.71511 14.1667 9.35308 14.1667 9.99993C14.1667 10.6468 14.0161 11.2848 13.7268 11.8633C13.4375 12.4419 13.0175 12.9452 12.5 13.3333M14.75 4.1666C15.62 4.86964 16.3217 5.75837 16.8037 6.7677C17.2858 7.77703 17.536 8.8814 17.536 9.99993C17.536 11.1185 17.2858 12.2228 16.8037 13.2322C16.3217 14.2415 15.62 15.1302 14.75 15.8333M5 12.4999H3.33333C3.11232 12.4999 2.90036 12.4121 2.74408 12.2559C2.5878 12.0996 2.5 11.8876 2.5 11.6666V8.33327C2.5 8.11226 2.5878 7.90029 2.74408 7.74401C2.90036 7.58773 3.11232 7.49994 3.33333 7.49994H5L7.91667 3.74994C7.9895 3.60846 8.11054 3.49771 8.25791 3.43768C8.40528 3.37765 8.56925 3.37232 8.72021 3.42264C8.87117 3.47296 8.99915 3.57561 9.08103 3.71205C9.16291 3.84849 9.19328 4.00972 9.16667 4.1666V15.8333C9.19328 15.9902 9.16291 16.1514 9.08103 16.2878C8.99915 16.4243 8.87117 16.5269 8.72021 16.5772C8.56925 16.6276 8.40528 16.6222 8.25791 16.5622C8.11054 16.5022 7.9895 16.3914 7.91667 16.2499L5 12.4999Z"
            stroke="#222222"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "LeftButtons",
  data() {
    return {
      showMute: false,
      showVolume: false,
      muteTimer: null, // Timer for mute
      volumeTimer: null, // Timer for volume
    };
  },
  computed: {
    ...mapState(["device"]),
  },
  methods: {
    ...mapMutations(["toggleMute", "setVolume"]),
    toggleSilent() {
      this.toggleMute();
      this.showMute = true;

      // Reset mute timer
      clearTimeout(this.muteTimer);
      this.muteTimer = setTimeout(() => {
        this.showMute = false;
      }, 3000);
    },
    volumeUp() {
      this.showVolume = true;
      this.setVolume(this.device.volume < 100 ? this.device.volume + 5 : 100);

      // Reset volume timer
      clearTimeout(this.volumeTimer);
      this.volumeTimer = setTimeout(() => {
        this.showVolume = false;
      }, 3000);
    },
    volumeDown() {
      this.showVolume = true;
      this.setVolume(this.device.volume > 0 ? this.device.volume - 5 : 0);

      // Reset volume timer
      clearTimeout(this.volumeTimer);
      this.volumeTimer = setTimeout(() => {
        this.showVolume = false;
      }, 3000);
    },
    onVolumeChange(event) {
      const newVolume = parseFloat(event.target.value);
      this.setVolume(newVolume);

      this.showVolume = true;

      // Reset volume timer
      clearTimeout(this.volumeTimer);
      this.volumeTimer = setTimeout(() => {
        this.showVolume = false;
      }, 3000);
    },
  },
  beforeDestroy() {
    // Clean up timers on component destroy
    clearTimeout(this.muteTimer);
    clearTimeout(this.volumeTimer);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.left-buttons {
  position: absolute;
  top: rem(100);
  left: rem(-5);
  width: rem(10);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(15);
}

.silent-btn {
  width: 100%;
  height: rem(25);
  cursor: pointer;
}

.volume-up,
.volume-down {
  width: 100%;
  height: rem(36);
  cursor: pointer;
}

.mute {
  position: absolute;
  top: rem(14);
  left: 50%;
  z-index: 999;
  transform: translate(-50%, 0) scale(0.6);
  padding: rem(8);
  width: rem(185);
  height: rem(36);
  background: #000;
  border-radius: 9999px;
  opacity: 0;
  transition: transform var(--transition-ease), opacity var(--transition-ease);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);

  &.show {
    transform: translate(-50%, 0) scale(1);
    opacity: 1;
  }

  .icon {
    width: rem(40);
    height: rem(20);
    background: #ff4141;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: rem(10);
      height: rem(10);
    }
  }

  &-title {
    margin-right: rem(4);
    color: #ff4141;
    font-size: rem(12);
    font-weight: 600;
    line-height: 1;
  }
}

.volume-control {
  position: absolute;
  left: rem(20);
  top: rem(120);
  z-index: 999;
  height: rem(140);
  width: rem(43);
  backdrop-filter: blur(rem(28));
  background: rgba(98, 98, 98, 0.74);
  border-radius: rem(10);
  transition: opacity var(--transition-ease);
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  --percent: 30%;

  &.show {
    pointer-events: all;
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--percent);
    background: #fff;
  }

  .volume-slider {
    position: absolute;
    -webkit-appearance: none;
    appearance: none;
    width: rem(140);
    height: rem(43);
    transform: rotate(-90deg) translateX(rem(-48));

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: rem(10);
      height: rem(10);
      background: transparent;
    }
  }

  .volume-icon {
    position: absolute;
    left: 50%;
    bottom: rem(10);
    z-index: 2;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    svg {
      width: rem(20);
      height: rem(20);
    }
  }
}
</style>
