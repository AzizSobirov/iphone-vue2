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
      <span>Обои</span>
    </div>

    <div class="wallpapers">
      <label
        class="wallpaper"
        v-for="(wallpaper, index) in wallpapers"
        :key="wallpaper"
        :for="`wallpaper-${index}`"
      >
        <Radio
          :id="`wallpaper-${index}`"
          name="wallpaper"
          :checked="device.wallpaper == wallpaper"
          @change="() => setWallpaper(wallpaper)"
        />
        <img :src="wallpaper" alt="" />
      </label>
    </div>

    <form class="custom" @submit.prevent="setCustomWallpaper">
      <div class="custom__header">
        <div class="custom__header-title">Персональные обои</div>
        <svg
          width="42"
          height="16"
          viewBox="0 0 42 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.93363 10.3701V5.67033C4.93363 5.09099 5.03263 4.65878 5.23017 4.37416C5.42771 4.08953 5.727 3.94699 6.12713 3.94699C6.3595 3.94699 6.57079 4.01116 6.761 4.13903C6.95121 4.26691 7.12079 4.46124 7.26883 4.72203C7.51588 4.45666 7.795 4.26095 8.10667 4.13537C8.41788 4.00978 8.77629 3.94699 9.18192 3.94699C9.69617 3.94699 10.1508 4.03866 10.5459 4.22199C10.9415 4.40533 11.2825 4.68078 11.5689 5.04745C11.9296 4.65649 12.2981 4.37508 12.6735 4.20366C13.0493 4.03224 13.4843 3.94653 13.9784 3.94653C14.8336 3.94653 15.4982 4.21466 15.9726 4.75045C16.447 5.28624 16.6844 6.04203 16.6844 7.01691V10.3696C16.6844 10.9439 16.5854 11.3715 16.3878 11.6516C16.1903 11.9316 15.8887 12.0714 15.4831 12.0714C15.0775 12.0714 14.7786 11.9325 14.5861 11.6552C14.3932 11.3775 14.2969 10.9494 14.2969 10.3701V7.72687C14.2969 7.11362 14.2094 6.66491 14.0338 6.37982C13.8583 6.0952 13.5828 5.95266 13.207 5.95266C12.7918 5.95266 12.4879 6.09245 12.2949 6.37249C12.102 6.65253 12.0057 7.09437 12.0057 7.69753V10.3696C12.0057 10.9439 11.9067 11.3715 11.7092 11.6516C11.5116 11.9316 11.21 12.0714 10.8044 12.0714C10.3988 12.0714 10.0977 11.9316 9.89967 11.6516C9.70213 11.3715 9.60313 10.9444 9.60313 10.3696V7.72641C9.60313 7.10858 9.5165 6.65849 9.34371 6.3757C9.17092 6.09337 8.89867 5.9522 8.52833 5.9522C8.11308 5.9522 7.80921 6.09199 7.61625 6.37203C7.42329 6.65208 7.32704 7.09391 7.32704 7.69708V10.3692C7.32704 10.9435 7.22804 11.3711 7.0305 11.6511C6.83296 11.9312 6.53138 12.071 6.12575 12.071C5.72013 12.071 5.42038 11.9312 5.22513 11.6511C5.02988 11.3711 4.93225 10.9439 4.93225 10.3692L4.93363 10.3701Z"
            fill="currentColor"
          />
          <path
            d="M23.4393 10.9929C23.1772 11.3601 22.866 11.6337 22.5053 11.8147C22.1446 11.9958 21.7316 12.0861 21.2673 12.0861C20.2984 12.0861 19.4793 11.6974 18.8097 10.9201C18.1401 10.1427 17.8051 9.17701 17.8051 8.02339C17.8051 6.86976 18.1658 5.87976 18.8876 5.08318C19.6091 4.2866 20.4891 3.88831 21.5272 3.88831C21.9323 3.88831 22.2921 3.95568 22.6061 4.09089C22.9201 4.2261 23.1978 4.43601 23.4403 4.7211C23.5686 4.48918 23.7281 4.30722 23.9183 4.17431C24.1085 4.04139 24.3024 3.97539 24.5004 3.97493C24.9106 3.97493 25.2136 4.11381 25.4088 4.3911C25.6041 4.66885 25.7017 5.09464 25.7017 5.66939V10.3691C25.7017 11.2331 25.6586 11.9078 25.572 12.3931C25.4853 12.8785 25.341 13.28 25.1384 13.599C24.7873 14.1733 24.3042 14.6092 23.6891 14.9062C23.0736 15.2032 22.3435 15.3517 21.4983 15.3517C20.4652 15.3517 19.6223 15.1899 18.9701 14.8663C18.3175 14.5427 17.9916 14.1348 17.9916 13.6426C17.9916 13.3478 18.0892 13.1045 18.2845 12.9111C18.4797 12.7181 18.7254 12.6214 19.0224 12.6214C19.1658 12.6214 19.5105 12.725 20.0568 12.9326C20.6032 13.1402 21.1133 13.2438 21.5877 13.2438C22.1808 13.2438 22.6405 13.0724 22.9668 12.7296C23.2931 12.3867 23.4563 11.9018 23.4563 11.2739C23.4563 11.245 23.4536 11.1992 23.449 11.1364C23.4439 11.0736 23.4416 11.0255 23.4416 10.9916L23.4393 10.9929ZM20.281 8.02385C20.281 8.60822 20.4267 9.08122 20.7182 9.44331C21.0097 9.80539 21.3856 9.98643 21.8453 9.98643C22.305 9.98643 22.6831 9.80401 22.9796 9.43964C23.2762 9.07526 23.4247 8.60318 23.4247 8.02385C23.4247 7.44451 23.2762 6.99901 22.9796 6.64426C22.6831 6.28951 22.305 6.11214 21.8453 6.11214C21.3856 6.11214 21.0097 6.28951 20.7182 6.64426C20.4267 6.99901 20.281 7.45872 20.281 8.02385Z"
            fill="currentColor"
          />
          <path
            d="M27.3021 8.7842V5.67029C27.3021 5.096 27.4011 4.66975 27.5987 4.392C27.7962 4.11425 28.0978 3.97583 28.5034 3.97583C28.909 3.97583 29.2015 4.1147 29.3967 4.392C29.592 4.66975 29.6896 5.09554 29.6896 5.67029V8.30616C29.6896 8.92904 29.7858 9.3695 29.9788 9.62754C30.1718 9.88604 30.4852 10.0148 30.9202 10.0148C31.3552 10.0148 31.6691 9.88558 31.8616 9.62754C32.0541 9.3695 32.1508 8.92858 32.1508 8.30616V5.67029C32.1508 5.096 32.2485 4.66975 32.4437 4.392C32.639 4.11425 32.9419 3.97583 33.3521 3.97583C33.7623 3.97583 34.0492 4.11333 34.2417 4.38879C34.4347 4.66379 34.531 5.09141 34.531 5.67075V8.78466C34.531 9.8952 34.222 10.7436 33.6042 11.3302C32.9864 11.9169 32.0917 12.2102 30.9202 12.2102C29.7487 12.2102 28.8531 11.9169 28.2325 11.3302C27.6124 10.7436 27.3021 9.8952 27.3021 8.78466V8.7842Z"
            fill="currentColor"
          />
          <path
            d="M36.1617 10.3701V5.67031C36.1617 5.09602 36.2594 4.66977 36.4546 4.39202C36.6499 4.11427 36.9501 3.97585 37.3552 3.97585C37.5972 3.97585 37.8127 4.03727 38.0001 4.16056C38.188 4.28385 38.3535 4.47085 38.497 4.72202C38.744 4.46123 39.0062 4.2646 39.283 4.13169C39.5598 3.99877 39.839 3.93277 40.1208 3.93231C40.4522 3.93231 40.7373 4.0469 40.977 4.27606C41.2167 4.50523 41.3368 4.77702 41.3368 5.09052C41.3368 5.55894 40.8968 5.94989 40.0172 6.26385C39.701 6.37477 39.4636 6.46644 39.3055 6.53885C39.0039 6.67864 38.8036 6.83448 38.705 7.0059C38.606 7.17731 38.5565 7.4876 38.5565 7.93631V10.3696C38.5565 10.9439 38.4575 11.3715 38.26 11.6516C38.0625 11.9316 37.7609 12.0714 37.3552 12.0714C36.9496 12.0714 36.6499 11.9316 36.4546 11.6516C36.2594 11.3715 36.1617 10.9444 36.1617 10.3696V10.3701Z"
            fill="currentColor"
          />
          <path
            d="M3.20617 10.3701C3.20617 10.9494 3.10992 11.3779 2.91697 11.6552C2.72401 11.933 2.42747 12.0714 2.02734 12.0714C1.62722 12.0714 1.32059 11.9316 1.12259 11.6516C0.924592 11.3715 0.82605 10.9444 0.82605 10.3696V5.66986C0.82605 5.09557 0.923675 4.66932 1.11892 4.39157C1.31417 4.11382 1.61713 3.9754 2.02734 3.9754C2.43755 3.9754 2.72447 4.11428 2.91697 4.39157C3.10992 4.66932 3.20617 5.09511 3.20617 5.66986V10.3696V10.3701Z"
            fill="currentColor"
          />
          <path
            d="M0.640869 2.00592C0.640869 1.63422 0.776994 1.31567 1.04879 1.04984C1.32058 0.784466 1.64691 0.65155 2.02733 0.65155C2.40316 0.65155 2.72445 0.784466 2.9912 1.04984C3.25795 1.31522 3.39179 1.63422 3.39179 2.00592C3.39179 2.37763 3.25979 2.70122 2.99533 2.96201C2.73087 3.2228 2.4082 3.35297 2.02779 3.35297C1.63729 3.35297 1.30866 3.2228 1.04191 2.96201C0.775161 2.70122 0.641328 2.38267 0.641328 2.00592H0.640869Z"
            fill="#89C623"
          />
        </svg>
      </div>

      <label for="url">
        <img src="./img/link.svg" alt="" />
        <input type="url" id="url" placeholder="Ссылка" v-model="wallpaper" />
      </label>

      <button class="btn" type="submit">
        <span>Установить</span>
        <span>$ 100,000</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Radio } from "@/components/ui";

export default {
  data() {
    return {
      wallpaper: "",
    };
  },
  components: { Radio },
  computed: {
    ...mapState(["wallpapers", "device"]),
  },
  methods: {
    ...mapMutations(["setWallpaper"]),
    setCustomWallpaper() {
      if (!this.wallpaper) return;
      this.setWallpaper(this.wallpaper);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  padding-top: rem(20);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(10);

  &-btn {
    width: rem(20);
    height: rem(20);
    background: var(--foreground-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: rem(1.5);
      width: rem(6);
      height: rem(8);
    }
  }

  span {
    font-size: rem(16);
    font-weight: 700;
  }
}

.wallpapers {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(10);
}

.wallpaper {
  position: relative;
  height: rem(115);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: rem(10);
  }

  .radio {
    position: absolute;
    top: rem(5);
    right: rem(5);
  }
}

.custom {
  margin-bottom: rem(50);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(12);

  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(5);

    &-title {
      font-size: rem(12);
      font-weight: 700;
    }

    svg {
      width: rem(40);
      height: rem(15);
    }
  }

  label {
    padding: rem(10);
    height: rem(34);
    width: 100%;
    background: var(--foreground-light);
    border-radius: rem(7);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(8);

    img {
      width: rem(14);
      height: rem(14);
      object-fit: contain;
    }

    input {
      font-size: rem(10);
      font-weight: 500;
    }
  }

  .btn {
    cursor: pointer;
    padding: rem(10);
    height: rem(34);
    width: 100%;
    color: #fff;
    background: linear-gradient(182deg, #2d7955 0%, #2d7955 100%);
    border-radius: rem(7);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(8);
    transition: var(--transition-ease);

    &:hover {
      background: linear-gradient(182deg, #4eb183 0%, #2d7955 100%);
    }

    span {
      font-size: rem(10);
      font-weight: 500;
    }
  }
}
</style>
