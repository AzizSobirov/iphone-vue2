<template>
  <div class="screen">
    <div class="content">
      <div class="content-img">
        <img class="img-light" src="./img/gift-light.svg" alt="" />
        <img class="img-dark" src="./img/gift-dark.svg" alt="" />
      </div>
      <div class="content-title">Промокод</div>
      <p class="content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>

    <form class="form" @submit.prevent="receiveGift">
      <div class="form-title">Введите код приглашения</div>
      <input
        type="text"
        placeholder="Введите код приглашения"
        v-model="code"
        required
      />
      <button type="submit" class="btn btn-primary">Применить</button>
      <div class="btn btn-black">Отменить</div>
    </form>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "Gift",
  data() {
    return {
      code: "",
    };
  },

  methods: {
    receiveGift() {
      console.log("gift");
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  font-family: "Gilroy", sans-serif;
  background-color: var(--background);
  background-image: url("./img/bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: var(--base-radius);
  overflow: hidden;
  --primary: #4285f4;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    z-index: 2;
    height: rem(315);
    width: rem(70);
  }

  &::before {
    left: 0;
    background: url("./img/left.png") right/cover no-repeat;
  }

  &::after {
    right: 0;
    background: url("./img/right.png") left/cover no-repeat;
  }
}

.dark .screen {
  background-color: #11131a;
  background-image: linear-gradient(180deg, #12222933 0%, #11e9ff33 100%),
    url("./img/bg-dark.png");
}

.content {
  margin: rem(30) 0;
  padding: 0 rem(10);
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: rem(16);

  &-img {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: rem(45);
      height: rem(45);
      pointer-events: none;
      background: url("./img/gift-light.svg") center/contain no-repeat;
    }

    &::before {
      left: 0;
      transform: translate(0, rem(40)) rotate(-24deg);
    }

    &::after {
      right: 0;
      transform: translate(0, rem(-25)) rotate(24deg);
    }

    img {
      width: rem(80);
      height: rem(80);
      object-fit: contain;
    }
  }

  .img-dark {
    display: none;
  }

  &-title {
    font-size: rem(15);
    font-weight: 700;
  }

  &-desc {
    font-size: rem(10);
    line-height: 1.5;
  }
}

.dark .content {
  &-img {
    &::before,
    &::after {
      background: url("./img/gift-dark.svg") center/contain no-repeat;
    }
  }

  .img-light {
    display: none;
  }

  .img-dark {
    display: block;
    filter: drop-shadow(0 0 rem(75) rgba(75, 217, 164, 0.36));
  }
}

.form {
  padding: 0 rem(5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(10);

  &-title {
    font-size: rem(12);
    font-weight: 600;
  }

  input {
    margin-bottom: rem(5);
    padding: 0 rem(10);
    height: rem(56);
    width: 100%;
    font-size: rem(12);
    font-weight: 500;
    text-align: center;
    background: #888c95;
    border-radius: rem(12);

    &::placeholder {
      color: #cacaca;
    }
  }
}

.dark .form {
  input {
    background: #0b1c22;
  }
}

.btn {
  position: relative;
  width: 100%;
  height: rem(58);
  font-size: rem(12);
  font-weight: 600;
  border-radius: rem(12);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(10);
  transition: background var(--transition-ease), color var(--transition-ease);
  cursor: pointer;

  &-primary {
    margin-top: rem(28);
    color: #fff;
    background: linear-gradient(1deg, #00b59c 0%, #63e4a7 100%);

    &:hover {
      background: linear-gradient(1deg, #00b59c 0%, #63e4a7 100%) !important;
    }
  }

  &-black {
    color: #5f6776;
    background: #b2b7c0;

    &:hover {
      color: #fff;
      background: #22252c !important;
    }
  }

  svg {
    width: rem(22);
    height: rem(22);
  }
}

.dark .btn {
  &-black {
    color: #fff;
    background: rgba(255, 255, 255, 0.13);
  }
}
</style>
