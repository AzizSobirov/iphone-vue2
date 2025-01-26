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
      <img src="./img/group-light.png" alt="" />
      <div class="content-title">Приложение Группа</div>
      <p class="content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>

    <div class="actions">
      <div class="btn btn-primary" @click="openModal">Создать группу</div>
      <div class="btn btn-black" @click="openPage('join')">
        Вступить в группу
      </div>
    </div>

    <transition name="lockscreen-transition" mode="out-in">
      <div class="modal" v-if="modal">
        <div class="btn-close" @click="closeModal">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.51119 7.01127L11.8734 12.3735M6.51119 12.3735L11.8734 7.01127"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        
      </div>
    </transition>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "Groups-create",
  data() {
    return {
      modal: true,
    };
  },

  methods: {
    openPage(path) {
      this.$router.push(`/groups/${path}`);
      playSound();
    },
    openModal() {
      this.modal = true;
      playSound();
    },
    closeModal() {
      this.modal = false;
      playSound();
    },
    createGroup() {
      console.log("create group");
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
  margin: rem(40) 0 rem(110);
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

  &-title {
    font-size: rem(15);
    font-weight: 700;
  }

  &-desc {
    font-size: rem(10);
    line-height: 1.5;
  }
}

.actions {
  margin-top: rem(18);
  padding: 0 rem(5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);
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
}

.dark .btn {
  &-black {
    background: #1a1d22;
  }
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: calc(var(--safearea-top) + rem(10));
  padding-left: calc(var(--safearea-inline) + rem(5));
  padding-right: calc(var(--safearea-inline) + rem(5));
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6.5px);
  background: rgba(245, 248, 255, 0.87);
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  .btn-close {
    margin-left: auto;
    width: rem(24);
    height: rem(24);
    box-shadow: 0 rem(15) rem(22) 0 rgba(66, 133, 244, 0.55);
    background: var(--primary);
    border-radius: rem(5);
    transition: background var(--transition-ease), color var(--transition-ease);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: #649fff;
    }

    svg {
      width: rem(20);
      height: rem(20);
    }
  }
}
</style>
