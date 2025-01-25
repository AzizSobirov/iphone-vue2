<template>
  <div class="screen">
    <!-- loader -->
    <div class="loader" ref="loader">
      <div class="loader-title">
        It's a lot <br />
        easier
      </div>
      <div class="loader-title">Uber</div>
    </div>

    <!-- content -->
    <div class="map">
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=37.624565%2C55.743582&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=10.66"
        width="560"
        height="400"
        allowfullscreen="true"
      ></iframe>
    </div>

    <div class="order">
      <div v-show="pending && !confirmed" class="pending">
        <div class="pending-circle" ref="circle"></div>
        <span
          >Пожалуйста, подождите, мы <br />
          подберем вам водителя.</span
        >
      </div>

      <Swiper v-if="!confirmed" class="drivers" :slides-per-view="'auto'">
        <SwiperSlide v-for="(item, index) in drivers" :key="index">
          <div
            class="driver"
            :class="{ active: item.id == selectedDriver }"
            @click="selectedDriver = item.id"
          >
            <div class="driver-info">
              <div class="driver-price">{{ item.price }}</div>
              <div class="driver-name">{{ item.name }}</div>
            </div>
            <img class="driver-image" :src="item.image" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="order-confirmed" v-else>
        Водитель по вашему заказу будет у Вас <br />
        через <strong>10 минут</strong>
      </div>

      <button v-if="!order" class="btn" @click="submitOrder">
        Сделать заказ
      </button>
      <button v-else class="btn btn-cancel" @click="cancelOrder">
        Отменить заказ
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import car from "./img/car.png";

export default {
  name: "Navigator",
  data() {
    return {
      order: null,
      drivers: [
        {
          id: 0,
          price: "100-150$",
          name: "UberX",
          image: car,
        },
        {
          id: 1,
          price: "120-150$",
          name: "UberX",
          image: car,
        },
        {
          id: 2,
          price: "100-150$",
          name: "UberX",
          image: car,
        },
      ],
      selectedDriver: 0,
      confirmed: false,
      pending: false,
      progressInterval: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    submitOrder() {
      this.order = this.drivers.find((item) => item.id == this.selectedDriver);
      this.pending = true;

      let el = this.$refs.circle;
      let progress = 0;
      const interval = 100;
      const maxProgress = 100;

      // Function to update the conic gradient
      const updateProgress = () => {
        if (progress < maxProgress) {
          progress += 1; // Increment progress (adjust increment as needed)
          el.style.background = `conic-gradient(#ffffff ${progress}%, #252525 ${progress}% 100%)`;
        } else {
          clearInterval(this.progressInterval);
        }
      };

      this.progressInterval = setInterval(updateProgress, interval);

      setTimeout(() => {
        this.pending = false;
        this.confirmed = true;
        clearInterval(this.progressInterval);
      }, 10000); // Adjust timeout as needed
    },
    cancelOrder() {
      this.order = null;
      this.pending = false;
      this.confirmed = false;
      clearInterval(this.progressInterval);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.loader.style.opacity = 0; // Start fade-out
      this.$refs.loader.addEventListener("transitionend", () => {
        this.$refs.loader.style.display = "none"; // Hide after transition

        let gesture = document.querySelector(".gesture");
        gesture && gesture.style.setProperty("--foreground", "#252525");
      });
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding: 0;
  font-family: "Uber Move", sans-serif;
  background: var(--background);
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(16);
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  padding: rem(60) rem(25);
  width: 100%;
  height: 100%;
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: var(--transition-ease);

  &-title {
    font-size: rem(28);
    font-weight: 500;
  }
}

.map {
  height: 100%;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}

.order {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding-top: rem(16);
  padding-bottom: calc(var(--safearea-bottom) + rem(10));
  padding-left: var(--safearea-inline);
  padding-right: var(--safearea-inline);
  width: 100%;
  color: #252525;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(12);

  &-confirmed {
    width: 100%;
    font-size: rem(10);
    font-weight: 500;
    font-family: "Gilroy", sans-serif;
    text-align: center;

    strong {
      font-weight: 700;
    }
  }

  .btn {
    height: rem(34);
    width: 100%;
    color: #fff;
    font-size: rem(10);
    font-weight: 500;
    font-family: "Gilroy", sans-serif;
    background: #252525;
    border-radius: rem(4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.btn-cancel {
      background: #252525bf;
    }
  }
}

.pending {
  position: absolute;
  left: 50%;
  top: -#{rem(15)};
  transform: translate(-50%, -100%);
  padding: rem(6) rem(10);
  width: rem(180);
  background: #fff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-circle {
    width: rem(17);
    height: rem(17);
    background: conic-gradient(#fff 0%, #252525 0 100%);
    border-radius: 50%;
  }

  span {
    font-size: rem(10);
    font-weight: 500;
    font-family: "Gilroy", sans-serif;
  }
}

.drivers {
  width: 100%;
  overflow: visible;

  .swiper-slide {
    width: rem(115);

    &:not(:last-child) {
      margin-right: rem(10);
    }
  }
}

.driver {
  position: relative;
  z-index: 2;
  padding: rem(10) rem(12);
  width: 100%;
  background: #25252520;
  border-radius: rem(3);
  border: rem(1) solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(10);
  cursor: pointer;

  &.active {
    border-color: #252525;
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(2);
  }

  &-price {
    font-size: rem(10);
    font-weight: 500;
    font-family: "Gilroy", sans-serif;
  }

  &-name {
    font-size: rem(10);
    font-weight: 700;
  }

  &-image {
    width: rem(36.5);
    height: rem(22);
    object-fit: contain;
  }
}
</style>
