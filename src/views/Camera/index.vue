<template>
  <div class="screen">
    <div class="camera">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <video ref="video" autoplay muted></video>
      <canvas ref="canvas" style="display: none"></canvas>
    </div>

    <div class="content">
      <div class="types">
        <Swiper :slides-per-view="1" :centeredSlides="true" @swiper="onSwiper">
          <SwiperSlide>
            <div @click="slideTo(0)">Photo</div>
          </SwiperSlide>
          <SwiperSlide>
            <div @click="slideTo(1)">Video</div>
          </SwiperSlide>
          <SwiperSlide>
            <div @click="slideTo(2)">Photo</div>
          </SwiperSlide>
          <SwiperSlide>
            <div @click="slideTo(3)">Photo</div>
          </SwiperSlide>
          <SwiperSlide>
            <div @click="slideTo(4)">Video</div>
          </SwiperSlide>
          <SwiperSlide>
            <div @click="slideTo(5)">Photo</div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="actions">
        <div class="image">
          <router-link v-if="image" :to="`/gallery/${image.id}`">
            <img :src="image.src" alt="" />
          </router-link>
        </div>

        <div class="btn" @click="takePhoto"></div>

        <div class="replace">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3334 7.83322C13.1704 6.66003 12.6261 5.57299 11.7845 4.73955C10.9429 3.90611 9.85059 3.3725 8.67586 3.22092C7.50114 3.06934 6.30916 3.30821 5.28355 3.90072C4.25794 4.49323 3.45558 5.40651 3.00008 6.49989M2.66675 3.83322V6.49989H5.33341M2.66675 9.16654C2.82979 10.3397 3.37404 11.4268 4.21566 12.2602C5.05728 13.0937 6.14958 13.6273 7.3243 13.7788C8.49902 13.9304 9.691 13.6916 10.7166 13.099C11.7422 12.5065 12.5446 11.5933 13.0001 10.4999M13.3334 13.1665V10.4999H10.6667"
              stroke="white"
              stroke-width="0.888889"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { playSound } from "@/composables/useMe";
import "swiper/css";

export default {
  name: "Camera",
  data() {
    return {
      stream: null,
      image: null,
      swiper: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapMutations(["uploadPhoto"]),
    async startCamera() {
      try {
        // Request access to the camera
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const video = this.$refs.video;
        video.srcObject = this.stream; // Set the video source
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    },
    takePhoto() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current frame of the video onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      playSound("camera");

      // Convert the canvas content to a data URL
      const photo = canvas.toDataURL("image/png");

      this.image = {
        id: Date.now(),
        src: photo,
        time: "12:00",
      };

      this.uploadPhoto(this.image);
    },

    onSwiper(swiper) {
      this.swiper = swiper;
    },
    slideTo(index) {
      if (this.swiper) {
        this.swiper.slideTo(index);
      } else {
        console.error("Swiper instance is not initialized yet.");
      }
    },
  },
  mounted() {
    this.startCamera();
  },
  beforeDestroy() {
    // Stop the camera when the component is destroyed
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding: 0;
  background: #060606;
  border-radius: var(--base-radius);
}

.camera {
  position: relative;
  width: 100%;
  height: calc(100% - rem(135));

  .lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .line {
    position: absolute;
    width: rem(0.2);
    height: 100%;
    background: #ffffff40;

    &:nth-child(1) {
      top: 0;
      left: 30%;
    }

    &:nth-child(2) {
      top: 0;
      left: 70%;
    }

    &:nth-child(3) {
      top: 30%;
      left: 0;
      width: 100%;
      height: rem(0.2);
    }

    &:nth-child(4) {
      top: 70%;
      left: 0;
      width: 100%;
      height: rem(0.2);
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding-top: rem(10);
  padding-bottom: calc(var(--safearea-bottom) + rem(10));
  padding-left: var(--safearea-inline);
  padding-right: var(--safearea-inline);
  width: 100%;
  height: rem(135);
  color: #fff;
  background: #060606;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(18);
}

.types {
  margin-left: calc(var(--safearea-inline) * -1);
  padding: rem(5) 0;
  width: calc(100% + var(--safearea-inline) * 2);
  background: #000;

  .swiper {
    width: rem(50);
    overflow: visible;
  }

  .swiper-slide {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .swiper-slide div {
    font-size: rem(10);
    text-transform: uppercase;
  }

  .swiper-slide-active div {
    color: #efd42b;
  }
}

.actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);

  .image {
    width: rem(28);
    height: rem(28);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: rem(5);
    }
  }

  .btn {
    position: relative;
    width: rem(40);
    height: rem(40);
    border-radius: 50%;
    border: rem(2) solid #fff;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - rem(2));
      height: calc(100% - rem(2));
      background: #fff;
      border-radius: 50%;
      transition: var(--transition-ease);
    }

    &:active::before {
      width: calc(100% - rem(6));
      height: calc(100% - rem(6));
    }
  }

  .replace {
    width: rem(28);
    height: rem(28);
    background: #1c1c1c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: rem(16);
      height: rem(16);
    }
  }
}
</style>
