<template>
  <div class="screen">
    <div class="header">
      <router-link to="/settings" class="header-btn">
        <svg
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.83333 0.666626L1.5 3.99996L4.83333 7.33329"
            stroke="currentColor"
            stroke-width="1.11111"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <span>Звуки</span>
    </div>

    <Slider
      label="ГРОМКОСТЬ ЗВУКОВ"
      :value="parseFloat(device.volume)"
      @update="setVolume"
    >
      <template #left>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.125 4.83333C8.46136 5.0856 8.73437 5.41272 8.92241 5.78879C9.11044 6.16486 9.20833 6.57954 9.20833 6.99999C9.20833 7.42045 9.11044 7.83513 8.92241 8.2112C8.73437 8.58726 8.46136 8.91439 8.125 9.16666M3.25 8.625H2.16667C2.02301 8.625 1.88523 8.56793 1.78365 8.46634C1.68207 8.36476 1.625 8.22699 1.625 8.08333V5.91666C1.625 5.773 1.68207 5.63523 1.78365 5.53365C1.88523 5.43206 2.02301 5.375 2.16667 5.375H3.25L5.14583 2.9375C5.19318 2.84554 5.27185 2.77355 5.36764 2.73453C5.46343 2.69551 5.57001 2.69204 5.66814 2.72475C5.76626 2.75746 5.84945 2.82418 5.90267 2.91287C5.95589 3.00156 5.97563 3.10636 5.95833 3.20833V10.7917C5.97563 10.8936 5.95589 10.9984 5.90267 11.0871C5.84945 11.1758 5.76626 11.2425 5.66814 11.2752C5.57001 11.3079 5.46343 11.3045 5.36764 11.2655C5.27185 11.2264 5.19318 11.1545 5.14583 11.0625L3.25 8.625Z"
            stroke="currentColor"
            stroke-opacity="0.31"
            stroke-width="1.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
      <template #right>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.125 4.83333C8.46136 5.0856 8.73437 5.41272 8.92241 5.78879C9.11044 6.16486 9.20833 6.57954 9.20833 6.99999C9.20833 7.42045 9.11044 7.83513 8.92241 8.2112C8.73437 8.58726 8.46136 8.91439 8.125 9.16666M9.5875 3.20833C10.153 3.6653 10.6091 4.24298 10.9224 4.89904C11.2357 5.55511 11.3984 6.27295 11.3984 6.99999C11.3984 7.72704 11.2357 8.44488 10.9224 9.10095C10.6091 9.75701 10.153 10.3347 9.5875 10.7917M3.25 8.625H2.16667C2.02301 8.625 1.88523 8.56793 1.78365 8.46634C1.68207 8.36476 1.625 8.22699 1.625 8.08333V5.91666C1.625 5.773 1.68207 5.63523 1.78365 5.53365C1.88523 5.43206 2.02301 5.375 2.16667 5.375H3.25L5.14583 2.9375C5.19318 2.84554 5.27185 2.77355 5.36764 2.73453C5.46343 2.69551 5.57001 2.69204 5.66814 2.72475C5.76626 2.75746 5.84945 2.82418 5.90267 2.91287C5.95589 3.00156 5.97563 3.10636 5.95833 3.20833V10.7917C5.97563 10.8936 5.95589 10.9984 5.90267 11.0871C5.84945 11.1758 5.76626 11.2425 5.66814 11.2752C5.57001 11.3079 5.46343 11.3045 5.36764 11.2655C5.27185 11.2264 5.19318 11.1545 5.14583 11.0625L3.25 8.625Z"
            stroke="currentColor"
            stroke-opacity="0.31"
            stroke-width="1.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </Slider>

    <div class="ringtones">
      <div class="ringtones-label">РИНГТОНЫ</div>

      <div class="ringtones__list">
        <div
          class="ringtones__item"
          v-for="(item, index) in ringtones"
          :key="index"
          :class="{ active: item.src === device.ringtone.src }"
          @click="selectRingtone(item)"
        >
          <div class="icon">
            <img src="./img/checked.svg" alt="" />
          </div>

          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Slider } from "@/components/ui";

export default {
  data() {
    return {
      audio: new Audio(),
    };
  },
  components: { Slider },
  computed: {
    ...mapState(["ringtones", "device"]),
  },
  methods: {
    ...mapMutations(["setRingtone", "setVolume"]),
    selectRingtone(item) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.src = item.src;
      this.audio.play();

      this.setRingtone(item);
    },
  },
  watch: {
    "device.volume"(value) {
      this.audio.volume = value / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  padding-top: em(20);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: em(10);

  &-btn {
    width: em(20);
    height: em(20);
    background: var(--foreground-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: em(1.5);
      width: em(6);
      height: em(8);
    }
  }

  span {
    font-size: em(16);
    font-weight: 700;
  }
}

.ringtones {
  padding-bottom: em(50);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: em(10);

  &-label {
    font-size: em(8);
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__item {
    cursor: pointer;
    padding: em(8);
    width: 100%;
    border-radius: em(6);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: em(10);

    &.active .icon img {
      display: flex;
    }

    .icon {
      width: em(15);
      height: em(15);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: none;
      }
    }

    span {
      font-size: em(10);
      font-weight: 500;
    }
  }
}
</style>
