<template>
  <div
    class="screen"
    :style="{
      backgroundImage: `url(${device.wallpaper})`,
    }"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @dblclick="unlockScreen"
  >
    <div class="lock-icon">
      <svg
        width="11"
        height="15"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.8998 5.49948V4.6736C9.8998 3.43408 9.43625 2.24533 8.61113 1.36886C7.786 0.492395 6.6669 0 5.5 0C4.3331 0 3.21399 0.492395 2.38887 1.36886C1.56375 2.24533 1.1002 3.43408 1.1002 4.6736V5.49948C0.784168 5.61571 0.50927 5.83205 0.312552 6.11934C0.115833 6.40664 0.00674942 6.75109 0 7.10626V13.241C0.00989133 13.4848 0.0654014 13.7241 0.163291 13.9449C0.261181 14.1658 0.399491 14.3636 0.57015 14.5271C0.740809 14.6905 0.940401 14.8162 1.15728 14.8968C1.37416 14.9774 1.60398 15.0114 1.83333 14.9966H9.16667C9.39578 15.0114 9.62536 14.9775 9.84205 14.8971C10.0587 14.8167 10.2582 14.6913 10.4288 14.5282C10.5994 14.3651 10.7378 14.1676 10.8359 13.9472C10.9339 13.7267 10.9897 13.4877 11 13.2442V7.10948C10.9939 6.75375 10.8851 6.40859 10.6883 6.12066C10.4915 5.83273 10.2163 5.6159 9.8998 5.49948ZM5.5 2.33733C6.08324 2.3379 6.64246 2.58419 7.05497 3.02217C7.46748 3.46015 7.6996 4.05406 7.7004 4.6736V5.35594H3.2996V4.6736C3.3004 4.05406 3.53251 3.46015 3.94502 3.02217C4.35754 2.58419 4.91675 2.3379 5.5 2.33733Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div class="date">{{ currentDate }}</div>
    <div class="time">{{ currentTime }}</div>

    <div class="notifications">
      <div class="notification" v-for="i in 4" :key="i">
        <div class="notification-header">
          <div class="notification-icon">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7633 0.699951H4.03668C2.19389 0.699951 0.700012 2.19383 0.700012 4.03662V12.7633C0.700012 14.6061 2.19389 16.1 4.03668 16.1H12.7633C14.6061 16.1 16.1 14.6061 16.1 12.7633V4.03662C16.1 2.19383 14.6061 0.699951 12.7633 0.699951Z"
                fill="url(#paint0_linear_70_1399)"
              />
              <path
                d="M8.87561 4.05225C6.21173 4.05225 4.05212 5.8194 4.05212 7.99874C4.05212 9.38439 4.92912 10.6023 6.24462 11.3061C6.29272 11.3299 6.33044 11.3704 6.35065 11.4201C6.37085 11.4698 6.37213 11.5252 6.35424 11.5758C6.22393 11.8906 6.01432 12.1663 5.74583 12.3761C5.72693 12.3914 5.71368 12.4126 5.70816 12.4363C5.70265 12.46 5.70518 12.4849 5.71535 12.507C5.72553 12.5291 5.74277 12.5472 5.76437 12.5584C5.78596 12.5696 5.81068 12.5734 5.83462 12.569C6.40809 12.4705 6.95251 12.2458 7.42857 11.9112C7.47623 11.8757 7.53075 11.8504 7.58868 11.837C7.64661 11.8236 7.70669 11.8224 7.76511 11.8334C8.13168 11.9053 8.50426 11.942 8.87781 11.943C11.5417 11.943 13.7013 10.1759 13.7013 7.99654C13.7013 5.8172 11.5395 4.05225 8.87561 4.05225Z"
                fill="#FEFEFE"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_70_1399"
                  x1="8.40001"
                  y1="0.699951"
                  x2="8.40001"
                  y2="16.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5CF777" />
                  <stop offset="1" stop-color="#0DBC29" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="notification-title">Новое сообщение</div>
          <div class="notification-time">1m ago</div>
        </div>
        <div class="notification-text">Здесь будет какой-то текст</div>
      </div>
    </div>

    <div class="actions">
      <div class="action">
        <svg
          width="9"
          height="23"
          viewBox="0 0 9 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.19786 2.64255H6.95843C7.56765 2.64255 8.06152 3.13642 8.06152 3.74564C8.06152 3.94384 8.00812 4.13839 7.90693 4.30881L6.28072 7.04769V20.8255L5.62463 12.3901V9.39085C4.45406 8.57837 3.79473 8.55791 2.62539 9.39085V12.3901L1.87557 20.8255V7.04769L0.249366 4.30881C0.148175 4.13839 0.0947723 3.94384 0.0947723 3.74564C0.0947723 3.13642 0.588644 2.64255 1.19786 2.64255Z"
            fill="currentColor"
          />
          <path
            d="M0.649867 1.79901H7.43668C7.78177 1.79901 8.06152 1.51926 8.06152 1.17417V1.14293C8.06152 0.965919 7.97818 0.799242 7.83658 0.693038C7.73923 0.620031 7.62084 0.580566 7.49916 0.580566H0.816612C0.597329 0.580566 0.389935 0.680245 0.25295 0.851477L0.216411 0.89715C0.13767 0.995576 0.0947723 1.11787 0.0947723 1.24392C0.0947723 1.55049 0.343296 1.79901 0.649867 1.79901Z"
            fill="currentColor"
          />
          <circle
            cx="4.1247"
            cy="12.0154"
            r="0.597039"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0.492997"
          />
          <path
            d="M6.3165 20.0156L5.86999 14.4662C5.80957 13.7151 4.88828 13.4853 4.13485 13.4888C3.38626 13.4921 2.42908 13.6906 2.36054 14.4361L1.84806 20.0093C1.80721 20.4535 2.01344 20.892 2.40723 21.1015C3.67339 21.7752 4.55949 21.7396 5.75523 21.0981C6.14503 20.8889 6.35198 20.4565 6.3165 20.0156Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.19408"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="action">
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7827 8.44183C14.7827 11.1439 12.5922 13.3343 9.89016 13.3343C7.1881 13.3343 4.99765 11.1439 4.99765 8.44183C4.99765 5.73977 7.1881 3.54932 9.89016 3.54932C12.5922 3.54932 14.7827 5.73977 14.7827 8.44183ZM5.88076 8.44183C5.88076 10.6562 7.67583 12.4512 9.89016 12.4512C12.1045 12.4512 13.8996 10.6562 13.8996 8.44183C13.8996 6.2275 12.1045 4.43243 9.89016 4.43243C7.67583 4.43243 5.88076 6.2275 5.88076 8.44183Z"
            fill="currentColor"
          />
          <path
            d="M16.4987 5.69563C16.4987 6.21708 16.076 6.6398 15.5545 6.6398C15.0331 6.6398 14.6104 6.21708 14.6104 5.69563C14.6104 5.17418 15.0331 4.75146 15.5545 4.75146C16.076 4.75146 16.4987 5.17418 16.4987 5.69563ZM14.7808 5.69563C14.7808 6.12296 15.1272 6.46938 15.5545 6.46938C15.9818 6.46938 16.3283 6.12296 16.3283 5.69563C16.3283 5.26831 15.9818 4.92189 15.5545 4.92189C15.1272 4.92189 14.7808 5.26831 14.7808 5.69563Z"
            fill="currentColor"
          />
          <rect
            x="0.877258"
            y="2.34766"
            width="4.97834"
            height="12.36"
            rx="2.48917"
            fill="currentColor"
          />
          <path
            d="M13.5813 4.75099C13.5813 3.42367 14.6573 2.34766 15.9846 2.34766H16.3279C17.6553 2.34766 18.7313 3.42367 18.7313 4.75099V4.75099H13.5813V4.75099Z"
            fill="currentColor"
          />
          <path
            d="M14.0955 12.3907C14.0955 13.6707 15.1331 14.7083 16.413 14.7083V14.7083C17.6929 14.7083 18.7305 13.6707 18.7305 12.3907V6.6399H14.0955V12.3907Z"
            fill="currentColor"
          />
          <path
            d="M5.30183 2.43347H4.39723C4.34983 2.43347 4.3114 2.4719 4.3114 2.5193C4.3114 2.75632 4.50355 2.94847 4.74057 2.94847H15.1264C15.2686 2.94847 15.3839 2.83318 15.3839 2.69097C15.3839 2.54875 15.2686 2.43347 15.1264 2.43347H14.2697C13.9925 2.43347 13.7253 2.33015 13.5202 2.1437L12.8948 1.57513C12.2872 1.02283 11.4956 0.716797 10.6746 0.716797H8.84908C8.02802 0.716797 7.23644 1.02283 6.62891 1.57513L5.96807 2.1759C5.78576 2.34163 5.54822 2.43347 5.30183 2.43347Z"
            fill="currentColor"
          />
          <rect
            x="3.28058"
            y="13.5066"
            width="13.39"
            height="1.20167"
            fill="currentColor"
          />
          <rect
            x="16.4988"
            y="4.0647"
            width="2.23167"
            height="4.80668"
            fill="currentColor"
          />
          <rect
            x="13.7527"
            y="3.89331"
            width="0.858335"
            height="2.74667"
            fill="currentColor"
          />
          <path
            d="M15.0396 4.58008H15.4259C15.497 4.58008 15.5546 4.63772 15.5546 4.70883C15.5546 4.77994 15.497 4.83758 15.4259 4.83758H15.2769C15.2337 4.83758 15.1912 4.84762 15.1526 4.8669L15.1096 4.88845C15.0632 4.91161 15.021 4.94208 14.9843 4.9787L14.9538 5.00925C14.8969 5.0661 14.8496 5.13174 14.8137 5.20365L14.8083 5.21446C14.7909 5.24927 14.776 5.28528 14.7636 5.3222L14.7077 5.49014C14.7001 5.51273 14.6963 5.53639 14.6963 5.5602V5.69591C14.6963 5.74332 14.6579 5.78175 14.6105 5.78175C14.5631 5.78175 14.5246 5.74332 14.5246 5.69591V5.09508C14.5246 4.81065 14.7552 4.58008 15.0396 4.58008Z"
            fill="currentColor"
          />
          <path
            d="M14.9539 6.81152H15.3402C15.4113 6.81152 15.4689 6.75388 15.4689 6.68277C15.4689 6.61167 15.4113 6.55402 15.3402 6.55402H15.1912C15.1481 6.55402 15.1055 6.54398 15.067 6.5247L15.0239 6.50316C14.9775 6.48 14.9353 6.44952 14.8986 6.4129L14.8681 6.38236C14.8113 6.32551 14.7639 6.25986 14.728 6.18795L14.7226 6.17714C14.7052 6.14233 14.6903 6.10632 14.678 6.0694L14.622 5.90146C14.6144 5.87887 14.6106 5.85522 14.6106 5.8314V5.69569C14.6106 5.64828 14.5722 5.60985 14.5248 5.60985C14.4774 5.60985 14.4389 5.64828 14.4389 5.69569V6.29652C14.4389 6.58095 14.6695 6.81152 14.9539 6.81152Z"
            fill="currentColor"
          />
          <path
            d="M16.1553 4.58008H15.769C15.6979 4.58008 15.6403 4.63772 15.6403 4.70883C15.6403 4.77994 15.6979 4.83758 15.769 4.83758H15.918C15.9611 4.83758 16.0037 4.84762 16.0422 4.8669L16.0853 4.88845C16.1316 4.91161 16.1739 4.94208 16.2105 4.9787L16.2411 5.00925C16.2979 5.0661 16.3453 5.13174 16.3812 5.20365L16.3866 5.21446C16.404 5.24927 16.4189 5.28528 16.4312 5.3222L16.4872 5.49014C16.4948 5.51273 16.4986 5.53639 16.4986 5.5602V5.69591C16.4986 5.74332 16.537 5.78175 16.5844 5.78175C16.6318 5.78175 16.6703 5.74332 16.6703 5.69591V5.09508C16.6703 4.81065 16.4397 4.58008 16.1553 4.58008Z"
            fill="currentColor"
          />
          <path
            d="M16.1553 6.81152H15.769C15.6979 6.81152 15.6403 6.75388 15.6403 6.68277C15.6403 6.61167 15.6979 6.55402 15.769 6.55402H15.918C15.9611 6.55402 16.0037 6.54398 16.0422 6.5247L16.0853 6.50316C16.1316 6.48 16.1739 6.44952 16.2105 6.4129L16.2411 6.38236C16.2979 6.32551 16.3453 6.25986 16.3812 6.18795L16.3866 6.17714C16.404 6.14233 16.4189 6.10632 16.4312 6.0694L16.4872 5.90146C16.4948 5.87887 16.4986 5.85522 16.4986 5.8314V5.69569C16.4986 5.64828 16.537 5.60985 16.5844 5.60985C16.6318 5.60985 16.6703 5.64828 16.6703 5.69569V6.29652C16.6703 6.58095 16.4397 6.81152 16.1553 6.81152Z"
            fill="currentColor"
          />
          <circle cx="9.89081" cy="8.44175" r="3.34751" fill="currentColor" />
          <path
            d="M13.2726 2.76903C10.7019 2.74857 7.03518 2.72811 5.40486 2.74694C4.87934 2.75302 4.62335 3.08573 4.71534 3.60317L4.8221 4.2037C5.00469 5.23074 6.26727 5.62786 7.00489 4.89024C7.15235 4.74278 7.33336 4.63325 7.53241 4.57105L8.78995 4.17807C9.56429 3.93609 10.3919 3.92213 11.174 4.13788L12.1776 4.41474C12.3648 4.46637 12.5314 4.57461 12.6546 4.72464C13.228 5.42266 14.3599 4.99057 14.3223 4.08802L14.3092 3.772C14.286 3.21476 13.8303 2.77347 13.2726 2.76903Z"
            fill="currentColor"
          />
          <path
            d="M6.44483 11.3261L5.43159 10.2496C5.42863 10.2464 5.42699 10.2423 5.42699 10.2379C5.42699 10.2176 5.39761 10.2145 5.39347 10.2345L4.5886 14.1125C4.53403 14.3754 4.7348 14.6222 5.00338 14.6222H13.6413C14.7125 14.6222 15.4713 13.5762 15.1388 12.5579C14.7991 11.5177 13.5277 11.1318 12.6703 11.8117C12.2757 12.1246 11.9789 12.3619 11.9503 12.3905C11.9047 12.4361 11.3259 12.6106 10.758 12.773C10.244 12.9199 9.70316 12.9432 9.17672 12.8503C8.7406 12.7733 8.32229 12.617 7.94254 12.3892L7.24511 11.9707C6.94999 11.7936 6.6807 11.5767 6.44483 11.3261Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { playSound } from "@/composables/useMe";

export default {
  name: "LockScreen",
  data() {
    return {
      currentDate: "",
      currentTime: "",
      touchStartY: 0,
      mouseStartY: 0,
      isSwiping: false,
    };
  },
  computed: {
    ...mapState(["device"]),
  },
  mounted() {
    this.getDate();

    setInterval(() => {
      this.getDate();
    }, 60000);
  },
  methods: {
    ...mapMutations(["toggleLock"]),

    getDate() {
      const date = new Date();

      // Format the date as "July 6, Wednesday"
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long", // Full month name (e.g., "July")
        day: "numeric", // Numeric day (e.g., "6")
        weekday: "long", // Full weekday name (e.g., "Wednesday")
      }).format(date);

      // Format the time as "HH:mm"
      let hours = date.getHours();
      let minutes = date.getMinutes();

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      this.currentTime = `${hours}:${minutes}`;
      this.currentDate = formattedDate;
    },

    unlockScreen() {
      this.toggleLock(); // Dispatch action to toggle lock state
      playSound("unlock");
    },
    // Handle touch start
    handleTouchStart(e) {
      this.touchStartY = e.touches[0].clientY;
    },
    handleTouchEnd(e) {
      const touchEndY = e.changedTouches[0].clientY;
      if (this.touchStartY - touchEndY > 50) {
        // Detect swipe up
        this.unlockScreen();
      }
    },
    // Handle mouse down (begin swipe)
    handleMouseDown(e) {
      this.mouseStartY = e.clientY;
      this.isSwiping = true; // Enable swiping state
    },
    // Handle mouse up (end swipe)
    handleMouseUp(e) {
      if (!this.isSwiping) return; // Only proceed if swiping

      const mouseEndY = e.clientY;
      if (this.mouseStartY - mouseEndY > 50) {
        // Detect swipe up
        this.unlockScreen();
      }
      this.isSwiping = false; // Reset swiping state
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 97;
  width: 100%;
  height: 100%;
  color: #fff;
  background: var(--background);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: rem(10);
}

.lock-icon {
  margin-top: rem(20);
  margin-bottom: rem(10);
  width: rem(11);
  height: rem(14);

  svg {
    width: 100%;
    height: 100%;
  }
}

.date {
  font-size: rem(16);
  line-height: 1;
}

.time {
  font-size: rem(60);
  font-weight: 500;
  line-height: 1;
}

.notifications {
  margin-top: rem(10);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);
}

.notification {
  padding: rem(7.5);
  width: 100%;
  height: rem(48);
  color: var(--foreground);
  backdrop-filter: blur(rem(20));
  background: rgba(245, 248, 255, 0.5);
  border-radius: rem(5.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(5);

  &-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(5.5);
  }

  &-icon {
    width: rem(15.5);
    height: rem(15.5);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    font-size: rem(10);
    font-weight: 600;
  }

  &-time {
    margin-left: auto;
    font-size: rem(10);
  }

  &-text {
    font-size: rem(10);
  }
}

.dark .notification {
  background: rgba(20, 20, 20, 0.46);
}

.actions {
  margin-top: auto;
  margin-bottom: rem(15);
  padding: 0 rem(5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);
}

.action {
  width: rem(44);
  height: rem(44);
  background: rgba($color: #000000, $alpha: 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:nth-child(1) svg {
    width: rem(8);
    height: rem(21);
  }

  &:nth-child(2) svg {
    width: rem(18);
    height: rem(14);
  }
}

.dark .action {
  color: #838286;
  background: rgba($color: #4e4e4e, $alpha: 0.4);
}
</style>
