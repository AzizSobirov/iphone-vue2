<template>
  <div class="screen" ref="screen">
    <div class="header">
      <div class="header__user">
        <img class="header__user-avatar" src="./img/avatar.png" alt="" />
        <div class="header__user-info">
          <div class="header__user-name">Source</div>
          <div class="header__user-surname">Insensitive</div>
        </div>
      </div>
    </div>

    <div class="content">
      <img class="img-light" src="./img/group-light.png" alt="" />
      <img class="img-dark" src="./img/group.png" alt="" />
      <div class="content-title">Приложение Группа</div>
      <p class="content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>

    <form class="form" @submit.prevent="joinGroup">
      <div class="form-title">Вступить в группу</div>
      <input
        type="text"
        placeholder="Введите код приглашения"
        v-model="code"
        required
      />
      <button type="submit" class="btn btn-primary">Вступить</button>
      <div class="btn btn-black" @click="openPage('/')">Отменить</div>
    </form>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "Groups-Join",
  data() {
    return {
      code: "",
    };
  },

  methods: {
    openPage(path) {
      this.$router.push(`/groups${path}`);
      playSound();
    },
    joinGroup() {
      console.log("join group");
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  padding: rem(10) rem(5);
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

  img {
    margin-bottom: rem(8);
    width: rem(120);
    height: auto;
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
  .img-light {
    display: none;
  }

  .img-dark {
    display: block;
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
    font-weight: 600;
    text-align: center;
    background: var(--foreground-light);
    border-radius: rem(12);
    border: rem(1) solid var(--foreground-light);
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
    color: #fff;
    background: #3371ff;

    &:hover {
      background: rgb(110, 164, 252) !important;
    }
  }

  &-black {
    color: #5f6776;
    background: #c6cad2;

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
    background: #1a1d22;
  }
}
</style>
