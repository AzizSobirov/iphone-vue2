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

    <div class="actions">
      <div class="btn btn-primary" @click="toggleModal">Создать группу</div>
      <div class="btn btn-black" @click="openPage('join')">
        Вступить в группу
      </div>
    </div>

    <transition name="lockscreen-transition" mode="out-in">
      <div class="modal" v-if="modal">
        <div class="btn-close" @click="toggleModal">
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

        <form class="invite" @submit.prevent="sendInvite">
          <div class="invite-title">Пригласть в группу</div>
          <input
            type="text"
            v-model="playerId"
            placeholder="Введите #ID игрока"
          />
          <button class="btn btn-primary" type="submit">Отправить</button>
        </form>

        <div class="invitation">
          <div class="invitation-title">Массовое приглашение</div>
          <div class="invitation-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
          </div>

          <div class="invitation-code">{{ code }}</div>

          <div class="btn btn-primary" @click="copyCode">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.083 7.91659V6.12492C15.083 5.64974 14.8942 5.19402 14.5582 4.85802C14.2222 4.52202 13.7665 4.33325 13.2913 4.33325H6.12467C5.64949 4.33325 5.19378 4.52202 4.85777 4.85802C4.52177 5.19402 4.33301 5.64974 4.33301 6.12492V13.2916C4.33301 13.7668 4.52177 14.2225 4.85777 14.5585C5.19378 14.8945 5.64949 15.0833 6.12467 15.0833H7.91634M7.91634 9.70825C7.91634 9.23307 8.10511 8.77736 8.44111 8.44135C8.77711 8.10535 9.23283 7.91659 9.70801 7.91659H16.8747C17.3499 7.91659 17.8056 8.10535 18.1416 8.44135C18.4776 8.77736 18.6663 9.23307 18.6663 9.70825V16.8749C18.6663 17.3501 18.4776 17.8058 18.1416 18.1418C17.8056 18.4778 17.3499 18.6666 16.8747 18.6666H9.70801C9.23283 18.6666 8.77711 18.4778 8.44111 18.1418C8.10511 17.8058 7.91634 17.3501 7.91634 16.8749V9.70825Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{{ isCopied ? "Скопировано" : "Скопировать код" }}</span>
          </div>

          <div class="btn btn-black" @click="generateCode">Изменить код</div>
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
      modal: false,
      playerId: "",
      code: "",
      isCopied: false,
    };
  },

  methods: {
    openPage(path) {
      this.$router.push(`/groups/${path}`);
      playSound();
    },
    toggleModal() {
      this.modal = !this.modal;
      playSound();
    },
    generateCode() {
      this.code = Math.random().toString(36).slice(2);
    },
    copyCode() {
      navigator.clipboard.writeText(this.code).then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 1000);
      });
    },
    createGroup() {
      console.log("create group");
    },
    sendInvite() {
      console.log("send invite");
    },
  },
  mounted() {
    this.generateCode();
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
  height: rem(58);
  font-size: rem(12);
  font-weight: 500;
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
    width: rem(28);
    height: rem(28);
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

  .invite,
  .invitation {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(15);

    &-title {
      font-size: rem(12);
      font-weight: 600;
    }

    &-desc {
      width: 100%;
      text-align: center;
      font-size: rem(12);
      line-height: 1.5;
    }
  }

  .invitation {
    margin-top: rem(10);

    &-code {
      font-size: rem(18);
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  input {
    padding: 0 rem(10);
    height: rem(58);
    width: 100%;
    font-size: rem(12);
    font-weight: 600;
    text-align: center;
    background: var(--foreground-light);
    border-radius: rem(12);
    border: rem(1) solid var(--foreground-light);
  }
}

.dark .modal {
  background: rgba(19, 19, 20, 0.85);
}
</style>
