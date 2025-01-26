<template>
  <div class="screen">
    <div class="album">
      <div class="album__img">
        <div class="album__img-bg">
          <img src="./img/album.png" alt="" />
        </div>
        <img src="./img/album.png" alt="" />
      </div>

      <div class="album__info">
        <div class="album__info-group">
          <div class="album__info-name">Back To Her Men</div>
          <div class="album__info-category">Radio</div>
        </div>
        <div class="btn" @click="isFavourite = !isFavourite">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              :fill="isFavourite ? '#FF484B' : 'currentColor'"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="visualizer">
      <div class="bars">
        <div
          v-for="(bar, index) in bars"
          :key="index"
          :style="{
            height: `${bar}%`,
          }"
          class="bar"
          :class="{ 'bar--played': index < playedBars }"
          @click="seekAudio(index)"
        ></div>
      </div>

      <div class="duration">
        <span> {{ currentTime }}</span>
        <span>{{ audioDuration }}</span>
      </div>
    </div>

    <Slider
      class="slider-radio"
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

    <div class="actions">
      <div class="btn">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5.5V19.5M20 5.5V19.5L8 12.5L20 5.5Z"
            stroke="currentColor"
            stroke-opacity="0.2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="btn-play" @click="playPause">
        <template v-if="isPlaying">
          <svg
            class="icon-pause"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="3" height="16" fill="white" />
            <rect x="6" width="3" height="16" fill="white" />
          </svg>
        </template>
        <template v-else>
          <svg
            class="icon-play"
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9399 6.82606C12.1472 7.61547 12.1472 9.38453 10.9399 10.1739L3.5945 14.9767C2.26429 15.8464 0.5 14.892 0.5 13.3027L0.500001 3.69727C0.500001 2.10795 2.26429 1.15357 3.5945 2.02333L10.9399 6.82606Z"
              fill="white"
            />
          </svg>
        </template>
      </div>

      <div class="btn">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5.5V19.5M4 5.5V19.5L16 12.5L4 5.5Z"
            stroke="currentColor"
            stroke-opacity="0.2"
            stroke-width="2"
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
import { Slider } from "@/components/ui";
import { formatTime } from "@/composables/useDate";
import mp3 from "./audios/realme_tune.mp3";

export default {
  name: "Radio",
  data() {
    return {
      isFavourite: false,
      isPlaying: false,
      audio: new Audio(),
      currentTime: "00:00",
      audioDuration: "00:00",
      bars: [], // Array for bar heights
      playedBars: 0,
    };
  },
  components: { Slider },
  computed: {
    ...mapState(["device"]),
  },
  methods: {
    ...mapMutations(["setVolume"]),

    initPlayer() {
      this.audio.src = mp3;
      this.audio.volume = this.device.volume / 100;
      this.audio.addEventListener("timeupdate", this.updatePlayedBars);
      this.audio.addEventListener("ended", () => (this.isPlaying = false));
    },

    generateRandomBars() {
      // Generate an array of random bar heights (between 10% and 100%)
      this.bars = Array.from(
        { length: 50 },
        () => Math.floor(Math.random() * 90) + 10
      );
    },

    playPause() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },

    updatePlayedBars() {
      // Calculate played bars based on audio duration
      const progress = this.audio.currentTime / this.audio.duration;
      this.playedBars = Math.floor(progress * this.bars.length);

      this.currentTime = formatTime(this.audio.currentTime.toFixed(2));
      this.audioDuration = formatTime(this.audio.duration.toFixed(2));
    },

    seekAudio(index) {
      // Calculate the new playback position based on the clicked bar
      const newTime = (index / this.bars.length) * this.audio.duration;
      this.audio.currentTime = newTime;
      this.updatePlayedBars(); // Update visualizer immediately
    },
  },
  mounted() {
    this.initPlayer();
    this.generateRandomBars(); // Generate static bar heights on mount
  },
  watch: {
    "device.volume"(value) {
      this.audio.volume = value / 100;
    },
  },
  beforeDestroy() {
    this.audio.removeEventListener("timeupdate", this.updatePlayedBars);
    this.audio.removeEventListener("ended", () => (this.isPlaying = false));
    this.audio.pause();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding-top: calc(var(--safearea-top) + rem(20));
  font-family: "ProximaNova", sans-serif;
  background: #f5f8ff;
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(16);
}

.dark .screen {
  background: radial-gradient(50% 50% at 50% 50%, #191a23 0%, #191a23 100%);
}

.album {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &__img {
    position: relative;
    width: 100%;
    height: rem(215);

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: rem(20);
      object-fit: cover;
    }

    & > img {
      position: relative;
    }

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(rem(50));
    }
  }

  &__info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(10);

    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(8);
    }

    &-name {
      font-size: rem(16);
      font-weight: 500;
      line-height: 1.2;
    }

    &-category {
      font-size: rem(12);
      line-height: 1;
      opacity: 0.2;
    }

    .btn {
      width: rem(16);
      height: rem(14);
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(20);

  .btn {
    width: rem(24);
    height: rem(24);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }

    path {
      transition: var(--transition-ease);
    }

    &:hover {
      path {
        stroke-opacity: 1;
      }
    }
  }

  .btn-play {
    width: rem(48);
    height: rem(48);
    background: linear-gradient(197deg, #a489f6 0%, #7556d3 100%);
    box-shadow: 0 rem(15) rem(20) 0 rgba(117, 86, 211, 0.55);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .icon-play {
    margin-left: rem(2);
    width: rem(14);
    height: rem(16);
  }

  .icon-pause {
    width: rem(10);
    height: rem(16);
  }
}

.visualizer {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(5);

  .bars {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: rem(30);
  }

  .bar {
    position: relative;
    flex-grow: 1;
    height: 100%;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: rem(2) !important;
      height: 100%;
      background-color: var(--foreground-light);
      border-radius: 9999px;
      transition: background-color 0.3s ease-in-out;
    }

    &--played::before {
      background-color: var(--foreground);
    }
  }

  .duration {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: rem(10);
      font-weight: 500;
      opacity: 0.8;
    }
  }
}
</style>
