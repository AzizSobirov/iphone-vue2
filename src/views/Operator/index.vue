<template>
  <div class="screen">
    <div class="header">
      <div class="header__user">
        <img class="header__user-avatar" src="./img/avatar.png" alt="" />
        <div class="header__user-info">
          <div class="header__user-name">Source</div>
          <div class="header__user-surname">Insensitive</div>
        </div>
      </div>
    </div>

    <div class="my-number">
      <img class="img-light" src="./img/sim-light.png" alt="" />
      <img class="img-dark" src="./img/sim-dark.png" alt="" />

      <div class="group">
        <div class="group-title">Номер телефона</div>
        <div class="group-number">34-56-89</div>
      </div>
    </div>

    <div class="balance">
      <div class="balance-title">Баланс</div>
      <div class="balance-value">$14,593</div>

      <div class="balance-bottom">
        <img class="img-dark" src="./img/sim-transparent-dark.png" alt="" />
        <img class="img-light" src="./img/sim-transparent-light.png" alt="" />
        <span>Безлимит на все</span>
      </div>
    </div>

    <div class="limits">
      <div class="limits__item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.01775 3.37292H7.22121L8.82294 7.37725L6.82078 8.57855C7.67847 10.3177 9.086 11.7252 10.8251 12.5829L12.0264 10.5807L16.0307 12.1824V15.3859C16.0307 15.8107 15.862 16.2181 15.5616 16.5185C15.2612 16.8189 14.8538 16.9876 14.429 16.9876C11.305 16.7978 8.35856 15.4712 6.14551 13.2581C3.93246 11.0451 2.60586 8.09862 2.41602 4.97466C2.41602 4.54985 2.58477 4.14244 2.88515 3.84206C3.18553 3.54168 3.59294 3.37292 4.01775 3.37292Z"
            stroke="#38CF89"
            stroke-width="1.60173"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="limits__item-value">500</div>
        <div class="limits__item-title">Минуты</div>
      </div>

      <div class="limits__item">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29681 7.37725H13.7037M7.29681 10.5807H12.102M15.3055 3.37292C15.9427 3.37292 16.5538 3.62605 17.0044 4.07663C17.4549 4.5272 17.7081 5.13831 17.7081 5.77552V12.1824C17.7081 12.8197 17.4549 13.4308 17.0044 13.8813C16.5538 14.3319 15.9427 14.585 15.3055 14.585H11.3011L7.29681 16.9876V14.585H5.69508C5.05787 14.585 4.44676 14.3319 3.99619 13.8813C3.54561 13.4308 3.29248 12.8197 3.29248 12.1824V5.77552C3.29248 5.13831 3.54561 4.5272 3.99619 4.07663C4.44676 3.62605 5.05787 3.37292 5.69508 3.37292H15.3055Z"
            stroke="#38CF89"
            stroke-width="1.60173"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="limits__item-value">500</div>
        <div class="limits__item-title">Минуты</div>
      </div>

      <div class="limits__item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.57129 14.585V12.1824M8.77475 14.585V9.7798M11.9782 14.585V7.37721M15.1817 14.585V4.97461"
            stroke="#38CF89"
            stroke-width="1.60173"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="limits__item-value">500</div>
        <div class="limits__item-title">Минуты</div>
      </div>
    </div>

    <div class="btn btn-primary" @click="openSheet">Пополнить баланс</div>

    <Sheet ref="sheet" :max-height="1080" :zIndex="9">
      <template #header>
        <div class="top-right">
          <img class="img-light" src="./img/sim-right-light.png" alt="" />
          <img class="img-dark" src="./img/sim-right-dark.png" alt="" />
        </div>
      </template>

      <div class="sheet">
        <div class="my-number">
          <img class="img-light" src="./img/sim-light.png" alt="" />
          <img class="img-dark" src="./img/sim-dark.png" alt="" />

          <div class="group">
            <div class="group-title">Номер телефона</div>
            <div class="group-number">34-56-89</div>
          </div>
        </div>

        <div class="group">
          <div class="group-label">СПОСОБ ОПЛАТЫ</div>
          <div class="group__content">
            <div class="icon">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.125 7.75285H14.875M4.95833 11.2945H4.96542M7.79167 11.2945H9.20833M2.125 6.33618C2.125 5.7726 2.34888 5.23209 2.7474 4.83358C3.14591 4.43506 3.68641 4.21118 4.25 4.21118H12.75C13.3136 4.21118 13.8541 4.43506 14.2526 4.83358C14.6511 5.23209 14.875 5.7726 14.875 6.33618V12.0028C14.875 12.5664 14.6511 13.1069 14.2526 13.5055C13.8541 13.904 13.3136 14.1278 12.75 14.1278H4.25C3.68641 14.1278 3.14591 13.904 2.7474 13.5055C2.34888 13.1069 2.125 12.5664 2.125 12.0028V6.33618Z"
                  stroke="#2EAB71"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="group-value">Банковская карта</div>
          </div>
        </div>

        <div class="group group-2">
          <div class="group-label">сумма оплаты</div>
          <div class="group__content">
            <div class="icon">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8288 6.3361C11.6879 5.93606 11.4304 5.58737 11.0895 5.3349C10.7487 5.08243 10.3401 4.93773 9.91634 4.91943H7.08301C6.51942 4.91943 5.97892 5.14332 5.58041 5.54183C5.18189 5.94035 4.95801 6.48085 4.95801 7.04443C4.95801 7.60802 5.18189 8.14852 5.58041 8.54704C5.97892 8.94555 6.51942 9.16943 7.08301 9.16943H9.91634C10.4799 9.16943 11.0204 9.39332 11.4189 9.79183C11.8175 10.1903 12.0413 10.7308 12.0413 11.2944C12.0413 11.858 11.8175 12.3985 11.4189 12.797C11.0204 13.1956 10.4799 13.4194 9.91634 13.4194H7.08301C6.65924 13.4011 6.25065 13.2564 5.90982 13.004C5.56898 12.7515 5.3115 12.4028 5.17051 12.0028M8.49967 2.79443V4.91943M8.49967 13.4194V15.5444"
                  stroke="#2EAB71"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="group-value">{{ amount }}</div>
          </div>

          <Slider
            class="slider-operator"
            :value="amount"
            :min="0"
            :max="1000"
            @update="(value) => (amount = value)"
          />
        </div>

        <div class="btn btn-primary" @click="topUpBalance">
          Пополнить баланс
        </div>
      </div>
    </Sheet>
  </div>
</template>

<script>
import Sheet from "@webzlodimir/vue-bottom-sheet-vue2";
import { Slider } from "@/components/ui";

export default {
  name: "Operator",
  components: { Sheet, Slider },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    openSheet() {
      this.$refs.sheet.open();
    },
    closeSheet() {
      this.$refs.sheet.close();
    },
    topUpBalance() {
      this.amount = 0;
      this.closeSheet();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding-bottom: calc(var(--safearea-bottom) + rem(15));
  position: relative;
  height: 100%;
  width: 100%;
  font-family: "Gilroy", sans-serif;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(26);
  --primary: #4285f4;
}

.dark .layout {
  background: linear-gradient(180deg, #121212 0%, #16191f 50%, #121212 99%);
}

.header {
  padding: rem(10) 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  &__user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(8);

    &-avatar {
      width: rem(28);
      height: rem(28);
      border-radius: rem(3);
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &-name {
      font-size: rem(12);
      font-weight: 700;
    }

    &-surname {
      color: #565f6d;
      font-size: rem(10);
      font-weight: 500;
    }
  }
}

.my-number {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(15);

  img {
    width: rem(28);
    height: rem(35);
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(8);

    &-title {
      color: #41464e;
      font-size: rem(8);
      font-weight: 500;
      line-height: 1;
    }

    &-number {
      font-size: rem(18);
      font-weight: 700;
      line-height: 1;
    }
  }
}

.balance {
  position: relative;
  padding: rem(16);
  width: 100%;
  height: rem(115);
  color: #fff;
  background: linear-gradient(184deg, #2ca76d, #1e724b);
  box-shadow: 0 rem(15) rem(45) 0 rgba(56, 207, 137, 0.12);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(5);

  &-title {
    font-size: rem(8);
    font-weight: 500;
  }

  &-value {
    font-size: rem(18);
    font-weight: 600;
  }

  &-bottom {
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: rem(100);
      height: rem(125);
      object-position: bottom;
    }

    span {
      position: relative;
      bottom: rem(8);
      right: rem(15);
      font-size: rem(10);
      font-weight: 600;
    }
  }
}

.limits {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: rem(10);

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(6);

    svg {
      width: rem(20);
      height: rem(20);
    }

    &-value {
      font-size: rem(12);
      font-weight: 600;
      line-height: 1;
    }

    &-title {
      color: #41464e;
      font-size: rem(12);
      font-weight: 500;
      line-height: 1;
    }
  }
}

.btn {
  position: relative;
  width: 100%;
  height: rem(43);
  font-size: rem(12);
  font-weight: 500;
  border-radius: rem(8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(10);
  transition: background var(--transition-ease), color var(--transition-ease);
  cursor: pointer;

  &-primary {
    margin-top: auto;
    color: #fff;
    background: linear-gradient(180deg, #35c682 0%, #268f5e 100%);

    &:hover {
      background: linear-gradient(180deg, #3ddf93 0%, #2fae73 100%);
    }
  }
}

.img-dark {
  display: none;
}

.dark {
  .img-light {
    display: none;
  }

  .img-dark {
    display: block;
  }
}

.sheet {
  position: relative;
  padding: rem(30) rem(20);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(25);

  .group {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(8);

    &__content {
      padding: rem(10);
      width: 100%;
      background: var(--foreground-light);
      border-radius: rem(5);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(6);
    }

    &-label {
      font-size: rem(8);
      font-weight: 700;
      text-transform: uppercase;
    }

    &-value {
      font-size: rem(10);
      font-weight: 600;
    }

    .icon {
      width: rem(18);
      height: rem(18);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-2 .group__content {
      border-radius: rem(5) rem(5) 0 0;
    }

    .slider-operator {
      position: absolute;
      bottom: rem(-14);
      left: 0;
    }
  }
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: rem(84);
  }
}
</style>

<style lang="scss">
.bottom-sheet {
  position: absolute !important;

  &__content {
    background: #e6ebf6 !important;
  }
}

.dark .bottom-sheet {
  &__content {
    background: #121212 !important;
  }

  &__draggable-thumb {
    background: #fff !important;
  }
}
</style>
