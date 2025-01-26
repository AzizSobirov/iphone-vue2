<template>
  <div class="screen">
    <div class="budget">
      <div class="budget-title">ТЕКУЩИЙ БЮДЖЕТ</div>
      <div class="budget-price"><span>$</span> 99,000,000</div>
    </div>

    <div class="image">
      <div class="image-bg">
        <img src="./img/lottery.png" alt="" />
      </div>
      <img src="./img/lottery.png" alt="" />
    </div>

    <div class="countdown">
      <div class="countdown-title">ДО НАЧАЛА РОЗЫГРЫША</div>
      <flip-countdown
        deadline="2025-02-25 00:00:00"
        :showDays="false"
        :showHours="false"
        @timeElapsed="timeElapsedHandler"
      ></flip-countdown>
    </div>

    <div class="btn">
      <div class="btn-group">
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1774 5.58342L11.24 5.87993L11.8702 3.62146C11.9537 3.32197 11.9149 3.00154 11.7622 2.73068C11.6095 2.45981 11.3555 2.26069 11.056 2.17712L9.36217 1.70448C9.23681 2.15372 8.93814 2.53476 8.53184 2.76378C8.12554 2.9928 7.6449 3.05104 7.19567 2.92568C6.74643 2.80033 6.36539 2.50165 6.13636 2.09535C5.90734 1.68905 5.8491 1.20842 5.97446 0.759182L4.2806 0.286534C3.98111 0.202965 3.66069 0.241791 3.38982 0.394471C3.11896 0.547152 2.91984 0.80118 2.83627 1.10067L2.20607 3.35914L3.26868 3.65565C3.41843 3.69744 3.54544 3.797 3.62178 3.93243C3.69812 4.06786 3.71754 4.22807 3.67575 4.37782C3.63397 4.52757 3.53441 4.65458 3.39898 4.73092C3.26354 4.80726 3.10333 4.82667 2.95358 4.78489L1.89097 4.48838L0.315481 10.1346C0.231912 10.4341 0.270738 10.7545 0.423419 11.0253C0.576099 11.2962 0.830127 11.4953 1.12962 11.5789L7.90504 13.4695C8.20453 13.5531 8.52495 13.5142 8.79582 13.3616C9.06668 13.2089 9.2658 12.9548 9.34937 12.6554L10.9249 7.00917L9.86225 6.71266C9.71251 6.67088 9.58549 6.57132 9.50915 6.43588C9.43281 6.30045 9.4134 6.14024 9.45518 5.99049C9.49697 5.84075 9.59653 5.71373 9.73196 5.63739C9.86739 5.56105 10.0276 5.54164 10.1774 5.58342ZM5.61068 5.52632L4.54807 5.22981C4.39832 5.18802 4.27131 5.08846 4.19497 4.95303C4.11863 4.8176 4.09921 4.65739 4.141 4.50764C4.18278 4.35789 4.28234 4.23088 4.41777 4.15454C4.55321 4.0782 4.71342 4.05879 4.86317 4.10057L5.92578 4.39708C6.07552 4.43886 6.20254 4.53842 6.27888 4.67386C6.35522 4.80929 6.37463 4.9695 6.33285 5.11925C6.29106 5.26899 6.1915 5.39601 6.05607 5.47235C5.92064 5.54869 5.76042 5.5681 5.61068 5.52632ZM8.26777 6.26774L7.20516 5.97123C7.05541 5.92945 6.9284 5.82989 6.85206 5.69446C6.77572 5.55902 6.75631 5.39881 6.79809 5.24907C6.83988 5.09932 6.93944 4.97231 7.07487 4.89597C7.2103 4.81963 7.37051 4.80021 7.52026 4.842L8.58287 5.13851C8.73262 5.18029 8.85963 5.27985 8.93597 5.41528C9.01231 5.55072 9.03172 5.71093 8.98994 5.86067C8.94815 6.01042 8.84859 6.13743 8.71316 6.21377C8.57773 6.29011 8.41752 6.30953 8.26777 6.26774Z"
            fill="white"
          />
        </svg>
        <span>Купить билет</span>
      </div>
      <span>$1,500</span>
    </div>
  </div>
</template>

<script>
import FlipCountdown from "@/components/FlipCountDown.vue";

export default {
  name: "Lottery",
  components: {
    FlipCountdown,
  },
  methods: {
    timeElapsedHandler() {
      console.log("Time elapsed!");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding-top: calc(var(--safearea-top) + rem(20));
  padding-left: calc(var(--safearea-inline) + rem(5));
  padding-right: calc(var(--safearea-inline) + rem(5));
  padding-bottom: calc(var(--safearea-bottom) + rem(15));
  font-family: "ProximaNova", sans-serif;
  background: #f5f8ff;
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(20);
}

.dark .screen {
  background: #191a23;
}

.budget {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(10);

  &-title {
    color: #606379;
    font-size: rem(10);
    font-weight: 700;
    line-height: 1;
  }

  &-price {
    font-size: rem(30);
    font-weight: 700;
    line-height: 1;

    span {
      color: #ffb74b;
    }
  }
}

.image {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: url(./img/lottery.png) center/contain no-repeat;
    opacity: 0.5;
    pointer-events: none;
  }

  &::before {
    top: rem(80);
    left: rem(-80);
    width: rem(155);
    height: rem(155);
    transform: rotate(-18deg);
  }

  &::after {
    top: rem(-5);
    right: rem(-55);
    width: rem(120);
    height: rem(120);
    transform: rotate(10deg);
  }

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(rem(100));
  }

  img {
    width: 100%;
    height: rem(218);
    object-fit: cover;
    transform: scale(1.2) translateY(rem(-10));
  }

  & > img {
    position: relative;
    z-index: 2;
  }
}

.countdown {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(12);

  &-title {
    color: #606379;
    font-size: rem(8.5);
    font-weight: 700;
    line-height: 1;
  }
}

.btn {
  margin-top: auto;
  padding: 0 rem(15);
  height: rem(42);
  width: 100%;
  box-shadow: 0 0 rem(45) 0 rgba(254, 130, 69, 0.35);
  background: linear-gradient(5deg, #ff5a24 0%, #ffac67 100%);
  border-radius: rem(8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);
  cursor: pointer;
  transition: opacity var(--transition-ease);

  &:hover {
    background: linear-gradient(5deg, #f67449 0%, #f7b580 100%);
  }

  &-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(8);
  }

  svg {
    width: rem(12);
    height: rem(14);
  }

  span {
    color: #fff;
    font-size: rem(10);
    font-weight: 500;
    font-family: "Gilroy", sans-serif;
    line-height: 1;
  }
}
</style>
