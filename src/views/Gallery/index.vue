<template>
  <div class="screen" ref="screen">
    <div class="header" :class="{ active: isScrolled }">
      <div class="header-title">Медиатека</div>
      <div class="header-subtitle">{{ gallery.length }} фотографий</div>
    </div>

    <div class="list">
      <router-link
        class="item"
        v-for="(item, index) in gallery"
        :key="index"
        :to="`/gallery/${item.id}`"
      >
        <img :src="item.src" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Gallery",
  data() {
    return {
      isScrolled: false,
    };
  },
  computed: {
    ...mapState(["gallery"]),
  },
  methods: {
    scrollHandler() {
      this.isScrolled = this.$refs.screen.scrollTop > 0;
    },
  },
  mounted() {
    this.$refs.screen.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    this.$refs.screen.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: calc(var(--safearea-top) + rem(10)) var(--safearea-inline)
    var(--safearea-bottom);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(8);
  pointer-events: none;

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
    transition: var(--transition-ease);
    opacity: 0;
    z-index: -1;
  }

  &.active::before {
    opacity: 1;
  }

  &-title {
    font-size: rem(20);
    font-weight: 700;
    line-height: 1;
  }

  &-subtitle {
    font-size: rem(12);
    font-weight: 500;
    line-height: 1;
  }
}

.dark .header::before {
  background: linear-gradient(180deg, #0d0d0d 0%, rgba(13, 13, 13, 0) 100%);
}

.list {
  padding-bottom: var(--safearea-bottom);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: rem(2);
}

.item {
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
}
</style>
