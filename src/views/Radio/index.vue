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
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      isFavourite: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding-top: calc(var(--safearea-top) + rem(20));
  font-family: "Gilroy", sans-serif;
  background: #f5f8ff;
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(16);
}

.dark .screen {
  background: #191a23;
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
      filter: blur(50px);
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
      height: rem(16);
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
