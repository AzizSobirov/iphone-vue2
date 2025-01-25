<template>
  <div class="screen">
    <div class="header" v-if="image">
      <div class="btn" @click="goBack">
        <svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.16667 1.33337L1.5 6.00004L6.16667 10.6667"
            stroke="white"
            stroke-width="1.55556"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="header-group">
        <div class="header-title">Суббота</div>
        <div class="header-subtitle">{{ image.time }}</div>
      </div>

      <div class="btn" @click="goBack">
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="image" v-if="image">
      <img :src="image.src" alt="" />

      <div
        class="btn"
        @click="
          () => {
            deletePhoto(image);
            goBack();
          }
        "
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66675 4.66667H13.3334M6.66675 7.33333V11.3333M9.33341 7.33333V11.3333M3.33341 4.66667L4.00008 12.6667C4.00008 13.0203 4.14056 13.3594 4.39061 13.6095C4.64065 13.8595 4.97979 14 5.33341 14H10.6667C11.0204 14 11.3595 13.8595 11.6096 13.6095C11.8596 13.3594 12.0001 13.0203 12.0001 12.6667L12.6667 4.66667M6.00008 4.66667V2.66667C6.00008 2.48986 6.07032 2.32029 6.19534 2.19526C6.32037 2.07024 6.48994 2 6.66675 2H9.33341C9.51023 2 9.6798 2.07024 9.80482 2.19526C9.92984 2.32029 10.0001 2.48986 10.0001 2.66667V4.66667"
            stroke="white"
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
  name: "Gallery",
  data() {
    return {
      image: null,
      isScrolled: false,
    };
  },
  computed: {
    ...mapState(["gallery"]),
  },
  methods: {
    ...mapMutations(["deletePhoto"]),
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/gallery");
      }
    },
  },
  mounted() {
    const img = this.gallery.find((item) => item.id == this.$route.params.id);
    if (img) {
      this.image = img;

      let gesture = document.querySelector(".gesture");
      gesture && gesture.style.setProperty("--foreground", "#fff");
    } else {
      this.$router.push("/gallery");
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  overflow: hidden;
}

.header {
  position: absolute;
  top: 0;
  z-index: 2;
  padding: calc(var(--safearea-top) + rem(10)) var(--safearea-inline)
    var(--safearea-bottom);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(12);

  &::before {
    content: "";
    position: absolute;
    top: -#{rem(100)};
    left: 0;
    width: 100%;
    height: rem(400);
    background: linear-gradient(
      180deg,
      #f5f8ff 0%,
      rgba(245, 248, 255, 0) 100%
    );
    pointer-events: none;
    transition: var(--transition-ease);
    z-index: -1;
  }

  &-group {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(8);
  }

  &-title {
    font-size: rem(20);
    font-weight: 700;
    line-height: 1;
  }

  &-subtitle {
    font-size: rem(12);
    font-weight: 400;
    line-height: 1;
  }
}

.dark .header::before {
  background: linear-gradient(180deg, #0d0d0d 0%, rgba(13, 13, 13, 0) 100%);
}

.btn {
  width: rem(28);
  height: rem(28);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.11);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-right: rem(3);
    width: rem(7);
    height: rem(12);
  }

  &:last-child svg {
    margin-right: rem(1);
    width: rem(14);
    height: rem(14);
  }
}

.image {
  position: relative;
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .btn {
    position: absolute;
    bottom: calc(var(--safearea-bottom) + rem(15));
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
