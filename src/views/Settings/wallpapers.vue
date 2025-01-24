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
            stroke="#1C1C1E"
            stroke-width="1.11111"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <span>Обои</span>
    </div>

    <div class="wallpapers">
      <label
        class="wallpaper"
        v-for="(wallpaper, index) in wallpapers"
        :key="wallpaper"
        :for="`wallpaper-${index}`"
        @click="setWallpaper(wallpaper)"
      >
        <img :src="wallpaper" alt="" />
      </label>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import bg1 from "@/assets/img/wallpapers/1.png";
import bg2 from "@/assets/img/wallpapers/2.png";
import bg3 from "@/assets/img/wallpapers/3.png";
import bg4 from "@/assets/img/wallpapers/4.png";
import bg5 from "@/assets/img/wallpapers/5.png";
import bg6 from "@/assets/img/wallpapers/6.png";

export default {
  data() {
    return {
      wallpapers: [bg1, bg2, bg3, bg4, bg5, bg6],
    };
  },
  methods: {
    ...mapMutations(["setWallpaper"]),
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
    background: #1c1c1e20;
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

.wallpapers {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: em(10);
}

.wallpaper {
  position: relative;
  height: em(115);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: em(10);
  }
}
</style>
