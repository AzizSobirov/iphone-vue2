<template>
  <div class="layout">
    <transition name="inner-transition" mode="out-in">
      <router-view @saveContact="saveContact" />
    </transition>

    <div class="tabs">
      <router-link
        class="tab"
        v-for="tab in tabs"
        :key="tab.name"
        :to="`/phone${tab.link}`"
      >
        <div class="tab-icon" v-html="tab.icon"></div>
        <div class="tab-name">{{ tab.name }}</div>
      </router-link>
    </div>

    <Sheet ref="sheet" :can-swipe="false" :zIndex="9">
      <form class="form" @submit.prevent="submitForm">
        <div class="form__header">
          <div class="btn" @click="closeSheet">Отменить</div>
          <div class="form__header-title">Контакт</div>
          <button
            type="submit"
            class="btn"
            :class="{ disabled: !validateContact }"
          >
            Готово
          </button>
        </div>

        <div class="form__avatar">
          <img src="@/assets/img/no-avatar.svg" alt="" />

          <label for="avatar">
            <input
              type="file"
              id="avatar"
              @change="changeAvatar"
              accept="image/*"
            />
            <span>Добавить фото</span>
          </label>
        </div>

        <div class="form__group">
          <input
            type="text"
            v-model="contact.name"
            placeholder="Имя"
            required
          />
          <input
            type="text"
            v-model="contact.surname"
            placeholder="Фамилия"
            required
          />
          <input
            type="text"
            v-model="contact.number"
            placeholder="Телефон"
            required
          />
        </div>
      </form>
    </Sheet>
  </div>
</template>

<script>
import Sheet from "@webzlodimir/vue-bottom-sheet-vue2";

export default {
  components: { Sheet },
  data() {
    return {
      contact: {
        avatar: "",
        name: "",
        surname: "",
        number: "",
      },
      tabs: [
        {
          name: "Избранные",
          icon: '<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.348.843c.205-.63 1.096-.63 1.301 0l2.114 6.506a.684.684 0 00.65.473h6.842c.662 0 .938.848.402 1.237l-5.535 4.021a.684.684 0 00-.248.765l2.114 6.506c.204.63-.517 1.155-1.053.765l-5.534-4.02a.684.684 0 00-.805 0l-5.534 4.02c-.536.39-1.257-.134-1.053-.765l2.114-6.506a.684.684 0 00-.248-.765L.34 9.06c-.536-.39-.26-1.238.403-1.238h6.84c.297 0 .56-.19.651-.473L10.348.843z" fill="currentColor"/></svg>',
          link: "/favorites",
        },
        {
          name: "Контакты",
          icon: '<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.841" cy="10.839" r="9.577" stroke="currentColor" stroke-width="1.368"/><circle cx="10.839" cy="8.102" r="3.42" fill="currentColor"/><path d="M18.365 15.915c-6.02-5.476-12.541-2.282-15.05 0 0 0 4.739 4.091 8.278 3.803 3.016-.246 6.772-3.803 6.772-3.803z" fill="currentColor" stroke="currentColor" stroke-width="1.368"/></svg>',
          link: "/contacts",
        },
        {
          name: "Недавние",
          icon: '<svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.675 21.1c5.667 0 10.261-4.595 10.261-10.262 0-5.667-4.594-10.261-10.26-10.261C5.007.577.413 5.17.413 10.838c0 5.667 4.594 10.261 10.261 10.261zm.683-8.894V4.681H9.99v6.841H4.518v1.368h6.84v-.684z" fill="currentColor"/></svg>',
          link: "/recent",
        },
        {
          name: "Клавиши",
          icon: '<svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.993" cy="3.682" r="2.736" fill="currentColor"/><circle cx="9.832" cy="3.682" r="2.736" fill="currentColor"/><circle cx="16.675" cy="3.682" r="2.736" fill="currentColor"/><circle cx="2.993" cy="10.523" r="2.736" fill="currentColor"/><circle cx="9.832" cy="10.523" r="2.736" fill="currentColor"/><circle cx="16.675" cy="10.523" r="2.736" fill="currentColor"/><circle cx="2.993" cy="17.363" r="2.736" fill="currentColor"/><circle cx="9.832" cy="17.363" r="2.736" fill="currentColor"/><circle cx="16.675" cy="17.363" r="2.736" fill="currentColor"/></svg>',
          link: "/",
        },
      ],
    };
  },
  computed: {
    validateContact() {
      return (
        this.contact.name.length > 0 &&
        this.contact.surname.length > 0 &&
        this.contact.number.length > 0
      );
    },
  },
  methods: {
    openSheet() {
      this.$refs.sheet.open();
    },
    closeSheet() {
      this.$refs.sheet.close();
      this.contact = {
        avatar: "",
        name: "",
        surname: "",
        number: "",
      };
    },

    saveContact($event) {
      this.contact.number = $event || "";
      this.openSheet();
    },

    changeAvatar($event) {
      console.log($event);
    },

    submitForm() {
      this.closeSheet();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.layout {
  height: 100%;
  width: 100%;
}

.tabs {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: rem(8);
  padding-left: var(--safearea-inline);
  padding-right: var(--safearea-inline);
  padding-bottom: calc(var(--safearea-bottom) + rem(5));
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);
}

.dark .tabs {
  backdrop-filter: blur(rem(20));
  background: rgba(23, 23, 23, 0.41);
}

.tab {
  color: #a3a3a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(6);

  &.router-link-exact-active {
    color: var(--primary);
  }

  &-icon {
    width: rem(20);
    height: rem(20);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color var(--transition-ease);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &-name {
    font-size: rem(8.5);
    font-weight: 500;
    transition: color var(--transition-ease);
  }
}

.form {
  padding-top: rem(12);
  padding-bottom: calc(var(--safearea-bottom) + rem(10));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(15);

  &__header {
    position: relative;
    padding: 0 rem(14);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(10);

    &-title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: rem(10);
      font-weight: 600;
    }

    .btn {
      color: var(--primary);
      font-size: rem(10);
      font-weight: 600;
      cursor: pointer;

      &.disabled {
        color: var(--foreground);
        opacity: 0.5;
      }
    }
  }

  &__avatar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(18);

    img {
      width: rem(98);
      height: rem(98);
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      padding: rem(8) rem(10);
      background: rgba(50, 50, 52, 0.13);
      border-radius: 9999px;
      font-size: rem(10);
      font-weight: 600;
      line-height: 1;
      cursor: pointer;
      transition: var(--transition-ease);

      &:hover {
        background: rgba(50, 50, 52, 0.2);
      }
    }

    input {
      display: none;
    }
  }

  &__group {
    margin-top: rem(10);
    padding: 0 rem(14);
    width: 100%;
    background: rgba(50, 50, 52, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      padding: rem(12) 0;
      width: 100%;
      font-size: rem(10);
      font-weight: 500;

      &:not(:last-child) {
        border-bottom: rem(1) solid rgba(50, 50, 52, 0.13);
      }
    }
  }
}

.dark .form {
  &__avatar {
    span {
      background: #323234;

      &:hover {
        background: #4c4c4f;
      }
    }
  }

  &__group {
    background: #323234;

    input {
      &:not(:last-child) {
        border-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>

<style lang="scss">
@use "@/assets/scss/_mixins.scss" as *;

.bottom-sheet {
  position: absolute !important;
  width: 100% !important;

  &__content {
    max-width: 100% !important;
    height: fit-content !important;
    background: #d4d9e5 !important;
    border-radius: rem(15) rem(15) 0 0 !important;
  }

  &__draggable-area {
    display: none !important;
  }
}

.dark .bottom-sheet {
  &__content {
    background: #1c1c1e !important;
  }
}
</style>
