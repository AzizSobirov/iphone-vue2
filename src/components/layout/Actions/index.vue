<template>
  <div class="actions">
    <transition name="inner-transition" mode="out-in">
      <div class="notification" v-if="showNotification">
        <div class="notification-title">Игровое уведомление</div>
        <div class="notification-desc">
          В Maze Bank Area проходит глобальное мероприятие, введите /tp для
          участия
        </div>
      </div>
    </transition>

    <transition name="inner-transition" mode="out-in">
      <div
        class="calling"
        v-if="calling && calling.fullScreen"
        :style="{
          backgroundImage: `url(${device.wallpaper})`,
        }"
      >
        <div class="calling__info">
          <div class="calling__info-group">
            <div class="calling__info-name">Неизвестный</div>
            <div class="calling__info-desc" v-if="!calling.accepted">
              Входящий
            </div>
            <div class="calling__info-desc" v-else>00:16</div>
          </div>
          <div class="calling__info-avatar">
            <img src="@/assets/img/no-avatar.svg" alt="" />
          </div>
        </div>

        <div
          class="calling__actions"
          :style="{
            justifyContent: calling.accepted ? 'center' : 'space-between',
          }"
        >
          <div v-if="!calling.accepted" class="btn">
            <div class="icon icon-decline" @click="declineCall">
              <svg
                width="25"
                height="10"
                viewBox="0 0 25 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.2172 9.22081L6.54355 8.32987C6.69791 8.28831 6.84256 8.21674 6.96924 8.11927C7.09592 8.02179 7.20215 7.9003 7.28186 7.76175C7.36157 7.6232 7.41321 7.47029 7.43381 7.31177C7.45441 7.15325 7.44358 6.99222 7.40194 6.83787L7.34199 6.60977C7.19014 6.03195 7.277 5.48197 7.60647 4.98274C7.76026 4.74222 7.96498 4.53839 8.20617 4.38564C8.44736 4.2329 8.71914 4.13496 9.00234 4.09873C10.2113 3.9286 11.4309 3.84407 12.6518 3.84576C13.8725 3.84378 15.0919 3.92825 16.3007 4.09853C16.5841 4.13472 16.8561 4.23273 17.0975 4.38561C17.3389 4.5385 17.5437 4.74254 17.6976 4.98331C18.0271 5.48382 18.1149 6.03429 17.9614 6.61315L17.9015 6.83954C17.8184 7.15131 17.8622 7.4833 18.0233 7.76289C18.1844 8.04248 18.4497 8.2469 18.7611 8.33146L22.0877 9.22231C22.3694 9.29827 22.669 9.27023 22.9317 9.14333C23.1944 9.01644 23.4026 8.79917 23.5181 8.53131L23.5343 8.49491C23.7866 7.92624 24.514 6.35388 24.5137 5.75101C24.5137 5.65409 24.5078 5.55726 24.496 5.46105C24.2926 3.80299 22.4148 2.6562 21.0386 2.04814C18.5042 0.928603 15.4037 0.512947 12.6518 0.512831C9.89882 0.512742 6.7995 0.927086 4.26393 2.04601C3.38468 2.43397 2.4778 2.95257 1.79378 3.63659C1.22112 4.20925 0.789402 4.91868 0.789345 5.749C0.789318 6.02292 0.951312 6.47234 1.04513 6.72826C1.26396 7.32538 1.52342 7.91613 1.7729 8.50119L1.78857 8.53775C1.90368 8.80528 2.11197 9.02196 2.37475 9.14755C2.63754 9.27313 2.93695 9.29908 3.21738 9.22057L3.2172 9.22081Z"
                  fill="white"
                />
              </svg>
            </div>

            <span>Отклонить</span>
          </div>

          <div v-if="!calling.accepted" class="btn">
            <div class="icon icon-accept" @click="acceptCall">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.669 14.2378L15.6261 12.4806C15.4847 12.3992 15.3287 12.3465 15.167 12.3254C15.0053 12.3043 14.841 12.3154 14.6835 12.3578C14.526 12.4003 14.3784 12.4733 14.2492 12.5728C14.1199 12.6724 14.0115 12.7964 13.9302 12.9378L13.8089 13.1456C13.5015 13.6721 13.042 14.0063 12.4441 14.1287C12.1596 14.1913 11.8648 14.1907 11.5806 14.1269C11.2963 14.0631 11.0295 13.9376 10.7991 13.7594C9.80397 13.0098 8.86305 12.1909 7.98331 11.3087C7.10109 10.4293 6.28223 9.4886 5.53289 8.49353C5.35451 8.26293 5.22896 7.99594 5.16511 7.71146C5.10126 7.42698 5.10066 7.13194 5.16337 6.8472C5.28673 6.24829 5.62057 5.78776 6.14899 5.48084L6.35563 5.36078C6.64049 5.19574 6.84842 4.92458 6.93391 4.60661C7.01941 4.28864 6.97552 3.94975 6.81185 3.66406L5.05436 0.620994C4.9059 0.36293 4.66949 0.166974 4.38839 0.0689975C4.10729 -0.0289793 3.80032 -0.0224225 3.52366 0.0874675L3.48575 0.10209C2.89335 0.330319 1.23402 0.940009 0.799194 1.37517C0.729263 1.44511 0.663666 1.51925 0.60277 1.59718C-0.446834 2.94029 0.0806432 5.12267 0.634911 6.55442C1.65577 9.19084 3.59295 11.7279 5.57848 13.7136C7.5648 15.7 10.1 17.6373 12.7369 18.6595C13.6512 19.014 14.6798 19.2941 15.6669 19.2941C16.4933 19.2941 17.3166 19.0937 17.9158 18.4947C18.1135 18.297 18.3208 17.8559 18.4378 17.6035C18.7107 17.0148 18.9498 16.4013 19.1919 15.7992L19.207 15.7615C19.317 15.4854 19.323 15.1788 19.224 14.8986C19.125 14.6183 18.9277 14.3836 18.6687 14.2379L18.669 14.2378Z"
                  fill="white"
                />
              </svg>
            </div>

            <span>Принять</span>
          </div>

          <div v-else class="btn">
            <div class="icon icon-end" @click="endCall">
              <svg
                width="25"
                height="10"
                viewBox="0 0 25 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.2172 9.22081L6.54355 8.32987C6.69791 8.28831 6.84256 8.21674 6.96924 8.11927C7.09592 8.02179 7.20215 7.9003 7.28186 7.76175C7.36157 7.6232 7.41321 7.47029 7.43381 7.31177C7.45441 7.15325 7.44358 6.99222 7.40194 6.83787L7.34199 6.60977C7.19014 6.03195 7.277 5.48197 7.60647 4.98274C7.76026 4.74222 7.96498 4.53839 8.20617 4.38564C8.44736 4.2329 8.71914 4.13496 9.00234 4.09873C10.2113 3.9286 11.4309 3.84407 12.6518 3.84576C13.8725 3.84378 15.0919 3.92825 16.3007 4.09853C16.5841 4.13472 16.8561 4.23273 17.0975 4.38561C17.3389 4.5385 17.5437 4.74254 17.6976 4.98331C18.0271 5.48382 18.1149 6.03429 17.9614 6.61315L17.9015 6.83954C17.8184 7.15131 17.8622 7.4833 18.0233 7.76289C18.1844 8.04248 18.4497 8.2469 18.7611 8.33146L22.0877 9.22231C22.3694 9.29827 22.669 9.27023 22.9317 9.14333C23.1944 9.01644 23.4026 8.79917 23.5181 8.53131L23.5343 8.49491C23.7866 7.92624 24.514 6.35388 24.5137 5.75101C24.5137 5.65409 24.5078 5.55726 24.496 5.46105C24.2926 3.80299 22.4148 2.6562 21.0386 2.04814C18.5042 0.928603 15.4037 0.512947 12.6518 0.512831C9.89882 0.512742 6.7995 0.927086 4.26393 2.04601C3.38468 2.43397 2.4778 2.95257 1.79378 3.63659C1.22112 4.20925 0.789402 4.91868 0.789345 5.749C0.789318 6.02292 0.951312 6.47234 1.04513 6.72826C1.26396 7.32538 1.52342 7.91613 1.7729 8.50119L1.78857 8.53775C1.90368 8.80528 2.11197 9.02196 2.37475 9.14755C2.63754 9.27313 2.93695 9.29908 3.21738 9.22057L3.2172 9.22081Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="calling2" v-if="calling && !calling.fullScreen">
        <div class="contact">
          <div class="contact-avatar">
            <img src="@/assets/img/no-avatar.svg" alt="" />
          </div>

          <div class="contact-info">
            <div class="contact-phone">Iphone</div>
            <div class="contact-name">Source Insensive</div>
          </div>
        </div>

        <div class="actions">
          <div v-if="!calling.accepted" class="btn">
            <div class="icon icon-decline" @click="declineCall">
              <svg
                width="25"
                height="10"
                viewBox="0 0 25 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.2172 9.22081L6.54355 8.32987C6.69791 8.28831 6.84256 8.21674 6.96924 8.11927C7.09592 8.02179 7.20215 7.9003 7.28186 7.76175C7.36157 7.6232 7.41321 7.47029 7.43381 7.31177C7.45441 7.15325 7.44358 6.99222 7.40194 6.83787L7.34199 6.60977C7.19014 6.03195 7.277 5.48197 7.60647 4.98274C7.76026 4.74222 7.96498 4.53839 8.20617 4.38564C8.44736 4.2329 8.71914 4.13496 9.00234 4.09873C10.2113 3.9286 11.4309 3.84407 12.6518 3.84576C13.8725 3.84378 15.0919 3.92825 16.3007 4.09853C16.5841 4.13472 16.8561 4.23273 17.0975 4.38561C17.3389 4.5385 17.5437 4.74254 17.6976 4.98331C18.0271 5.48382 18.1149 6.03429 17.9614 6.61315L17.9015 6.83954C17.8184 7.15131 17.8622 7.4833 18.0233 7.76289C18.1844 8.04248 18.4497 8.2469 18.7611 8.33146L22.0877 9.22231C22.3694 9.29827 22.669 9.27023 22.9317 9.14333C23.1944 9.01644 23.4026 8.79917 23.5181 8.53131L23.5343 8.49491C23.7866 7.92624 24.514 6.35388 24.5137 5.75101C24.5137 5.65409 24.5078 5.55726 24.496 5.46105C24.2926 3.80299 22.4148 2.6562 21.0386 2.04814C18.5042 0.928603 15.4037 0.512947 12.6518 0.512831C9.89882 0.512742 6.7995 0.927086 4.26393 2.04601C3.38468 2.43397 2.4778 2.95257 1.79378 3.63659C1.22112 4.20925 0.789402 4.91868 0.789345 5.749C0.789318 6.02292 0.951312 6.47234 1.04513 6.72826C1.26396 7.32538 1.52342 7.91613 1.7729 8.50119L1.78857 8.53775C1.90368 8.80528 2.11197 9.02196 2.37475 9.14755C2.63754 9.27313 2.93695 9.29908 3.21738 9.22057L3.2172 9.22081Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div v-if="!calling.accepted" class="btn">
            <div class="icon icon-accept" @click="acceptCall">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.669 14.2378L15.6261 12.4806C15.4847 12.3992 15.3287 12.3465 15.167 12.3254C15.0053 12.3043 14.841 12.3154 14.6835 12.3578C14.526 12.4003 14.3784 12.4733 14.2492 12.5728C14.1199 12.6724 14.0115 12.7964 13.9302 12.9378L13.8089 13.1456C13.5015 13.6721 13.042 14.0063 12.4441 14.1287C12.1596 14.1913 11.8648 14.1907 11.5806 14.1269C11.2963 14.0631 11.0295 13.9376 10.7991 13.7594C9.80397 13.0098 8.86305 12.1909 7.98331 11.3087C7.10109 10.4293 6.28223 9.4886 5.53289 8.49353C5.35451 8.26293 5.22896 7.99594 5.16511 7.71146C5.10126 7.42698 5.10066 7.13194 5.16337 6.8472C5.28673 6.24829 5.62057 5.78776 6.14899 5.48084L6.35563 5.36078C6.64049 5.19574 6.84842 4.92458 6.93391 4.60661C7.01941 4.28864 6.97552 3.94975 6.81185 3.66406L5.05436 0.620994C4.9059 0.36293 4.66949 0.166974 4.38839 0.0689975C4.10729 -0.0289793 3.80032 -0.0224225 3.52366 0.0874675L3.48575 0.10209C2.89335 0.330319 1.23402 0.940009 0.799194 1.37517C0.729263 1.44511 0.663666 1.51925 0.60277 1.59718C-0.446834 2.94029 0.0806432 5.12267 0.634911 6.55442C1.65577 9.19084 3.59295 11.7279 5.57848 13.7136C7.5648 15.7 10.1 17.6373 12.7369 18.6595C13.6512 19.014 14.6798 19.2941 15.6669 19.2941C16.4933 19.2941 17.3166 19.0937 17.9158 18.4947C18.1135 18.297 18.3208 17.8559 18.4378 17.6035C18.7107 17.0148 18.9498 16.4013 19.1919 15.7992L19.207 15.7615C19.317 15.4854 19.323 15.1788 19.224 14.8986C19.125 14.6183 18.9277 14.3836 18.6687 14.2379L18.669 14.2378Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Actions",
  data() {
    return {
      showNotification: false,
    };
  },
  computed: {
    ...mapState(["notification", "calling", "device"]),
  },
  methods: {
    ...mapMutations([
      "toggleMute",
      "setVolume",
      "acceptCall",
      "declineCall",
      "endCall",
    ]),

    setCallFullScreen() {
      this.calling.fullScreen = true;
    },
  },
  watch: {
    notification: function (newValue, oldValue) {
      if (newValue) {
        this.showNotification = true;

        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.notification {
  position: absolute;
  top: rem(5);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: rem(8) rem(12);
  width: rem(206);
  color: #fff;
  background-color: #000;
  background-image: url("./img/bg.svg");
  background-position: center;
  background-size: cover;
  border-radius: rem(13);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(5);

  &-title {
    padding: rem(4) rem(6);
    width: fit-content;
    font-size: rem(8);
    font-weight: 600;
    box-shadow: 0 rem(4) rem(25) 0 rgba(10, 131, 251, 0.55);
    background: #0a83fb;
    border-radius: 9999px;
  }

  &-desc {
    width: 100%;
    text-align: center;
    font-size: rem(10);
    font-weight: 500;
    line-height: 1.5;
  }
}

.calling {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  padding: rem(80) rem(30) rem(80);
  width: 100%;
  height: 100%;
  color: #fff;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(rem(50));
    background: rgba(7, 7, 7, 0.5);
  }

  &__info {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(20);

    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(5);
    }

    &-name {
      font-size: rem(20);
    }

    &-desc {
      font-size: rem(14);
      opacity: 0.5;
    }

    &-avatar {
      width: rem(44);
      height: rem(44);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  &__actions {
    margin-top: auto;
    position: relative;
    padding: 0 rem(10);
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: rem(20);

    .btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: rem(8);
    }

    .icon {
      width: rem(48);
      height: rem(48);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background var(--transition-ease);
    }

    .icon-decline,
    .icon-end {
      background: #fe473d;

      &:hover {
        background: #ff5e55;
      }

      svg {
        width: rem(25);
        height: rem(10);
      }
    }

    .icon-end {
      width: rem(54);
      height: rem(54);

      svg {
        width: rem(26);
        height: rem(12);
      }
    }

    .icon-accept {
      background: #2ecf56;

      &:hover {
        background: #49da6d;
      }

      svg {
        width: rem(20);
        height: rem(20);
      }
    }

    span {
      color: #e7e7e7;
      font-size: rem(12);
    }
  }
}

.calling2 {
  position: absolute;
  top: rem(5);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: rem(9);
  width: rem(234);
  color: #fff;
  background-color: #000;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);

  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(8);

    &-avatar {
      width: rem(30);
      height: rem(30);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(5);
    }

    &-name {
      font-size: rem(11.5);
      font-weight: 500;
      line-height: 1;
    }

    &-phone {
      font-size: rem(9);
      opacity: 0.6;
      line-height: 1;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(8);
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    width: rem(30);
    height: rem(30);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background var(--transition-ease);
  }

  .icon-decline,
  .icon-end {
    background: #fe473d;

    &:hover {
      background: #ff5e55;
    }

    svg {
      width: rem(17);
      height: rem(7);
    }
  }

  .icon-accept {
    background: #2ecf56;

    &:hover {
      background: #49da6d;
    }

    svg {
      width: rem(14);
      height: rem(14);
    }
  }
}
</style>
