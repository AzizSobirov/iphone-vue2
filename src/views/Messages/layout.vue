<template>
  <div class="layout">
    <transition name="inner-transition" mode="out-in">
      <router-view @addContact="openSheet" />
    </transition>

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
import { mapState, mapMutations } from "vuex";
import Sheet from "@webzlodimir/vue-bottom-sheet-vue2";
import noAvatar from "@/assets/img/no-avatar.svg";

export default {
  components: { Sheet },
  data() {
    return {
      contact: {
        id: 0,
        avatar: "",
        name: "",
        surname: "",
        number: "",
      },
    };
  },
  computed: {
    ...mapState(["contacts"]),
    validateContact() {
      return (
        this.contact.name.length > 0 &&
        this.contact.surname.length > 0 &&
        this.contact.number.length > 0
      );
    },
  },
  methods: {
    ...mapMutations(["addContact"]),
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

    changeAvatar($event) {
      console.log($event);
    },

    submitForm() {
      this.contact.id = this.contacts.length + 1;
      this.addContact({
        id: this.contact.id,
        avatar: noAvatar,
        name: this.contact.name,
        surname: this.contact.surname,
        number: this.contact.number,
        last_message: {},
        messages: [],
      });
      this.$router.push(`/messages/${this.contact.id}`);
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
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
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
