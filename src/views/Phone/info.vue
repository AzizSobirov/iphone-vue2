<template>
  <div class="screen">
    <div class="header" v-if="contact">
      <div class="header-back" @click="goBack">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#5D647B" />
          <path
            d="M13 8L9 12L13 16"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="header__avatar">
        <img src="@/assets/img/no-avatar.svg" alt="" />
      </div>

      <div class="header__name">{{ contact.name }} {{ contact.surname }}</div>

      <div class="header__actions">
        <div class="btn">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.6019 20.0177L2.59325 20.0275C2.3076 20.3209 2.251 20.769 2.45605 21.1246C2.66318 21.4839 3.08569 21.6593 3.48638 21.5524L8.79876 20.1358C9.78957 20.48 10.8532 20.6667 11.9585 20.6667C17.2742 20.6667 21.5835 16.3575 21.5835 11.0417C21.5835 5.72601 17.2742 1.41675 11.9585 1.41675C6.64277 1.41675 2.33351 5.72601 2.33351 11.0417C2.33351 12.9694 2.90111 14.7669 3.87826 16.2733C3.85015 16.5648 3.80226 16.8989 3.72632 17.2787C3.51593 18.3306 3.20536 19.0432 2.9645 19.4768C2.84374 19.6942 2.73951 19.8431 2.67242 19.9308C2.63884 19.9748 2.61448 20.0034 2.6019 20.0177Z"
              fill="white"
            />
          </svg>
          <span>написать</span>
        </div>
        <div class="btn">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5221 15.0909L16.4791 13.3336C16.3378 13.2522 16.1818 13.1995 16.02 13.1784C15.8583 13.1574 15.694 13.1684 15.5365 13.2108C15.379 13.2533 15.2314 13.3264 15.1022 13.4259C14.9729 13.5254 14.8646 13.6494 14.7832 13.7908L14.6619 13.9986C14.3546 14.5251 13.8951 14.8593 13.2971 14.9818C13.0126 15.0444 12.7178 15.0437 12.4336 14.9799C12.1493 14.9161 11.8826 14.7906 11.6521 14.6124C10.657 13.8629 9.71607 13.0439 8.83634 12.1617C7.95411 11.2824 7.13526 10.3416 6.38592 9.34656C6.20754 9.11595 6.08199 8.84897 6.01814 8.56449C5.95428 8.28001 5.95369 7.98497 6.01639 7.70023C6.13976 7.10132 6.4736 6.64079 7.00202 6.33387L7.20865 6.2138C7.49352 6.04876 7.70144 5.7776 7.78694 5.45964C7.87244 5.14167 7.82855 4.80277 7.66488 4.51709L5.90739 1.47402C5.75893 1.21596 5.52252 1.02 5.24142 0.922025C4.96032 0.824048 4.65335 0.830605 4.37669 0.940495L4.33878 0.955117C3.74638 1.18335 2.08704 1.79304 1.65222 2.2282C1.58229 2.29814 1.51669 2.37228 1.4558 2.45021C0.406193 3.79332 0.933671 5.9757 1.48794 7.40744C2.50879 10.0439 4.44598 12.5809 6.43151 14.5666C8.41783 16.553 10.9531 18.4903 13.5899 19.5125C14.5043 19.867 15.5328 20.1471 16.5199 20.1471C17.3463 20.1471 18.1697 19.9468 18.7688 19.3477C18.9665 19.1501 19.1739 18.7089 19.2908 18.4566C19.5638 17.8678 19.8028 17.2544 20.0449 16.6522L20.06 16.6145C20.17 16.3384 20.1761 16.0318 20.0771 15.7516C19.9781 15.4714 19.7808 15.2366 19.5218 15.0909L19.5221 15.0909Z"
              fill="white"
            />
          </svg>
          <span>позвонить</span>
        </div>
      </div>
    </div>

    <div class="info" v-if="contact">
      <div class="info__phone">
        <div class="info__phone-label">Телефон</div>
        <div class="info__phone-number">{{ contact.number }}</div>
      </div>

      <div class="info__actions">
        <div class="info__actions-item">Отправить сообщение</div>
        <div
          v-if="!contact.favourite"
          class="info__actions-item"
          @click="addFavourite(contact)"
        >
          Добавить в Избранные
        </div>
        <div
          v-else
          class="info__actions-item danger"
          @click="deleteFavourite(contact)"
        >
          Удалить из Избранных
        </div>
        <div class="info__actions-item danger" @click="deleteContact(contact)">
          Удалить из контактов
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { playSound } from "@/composables/useMe";

export default {
  name: "ContactInfo",
  data() {
    return {
      contact: null,
    };
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    ...mapMutations(["addFavourite", "deleteFavourite", "deleteContact"]),
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/phone");
      }

      playSound();
    },
  },
  mounted() {
    this.contact = this.contacts.find(
      (item) => item.id == this.$route.params.id
    );

    if (!this.contact) {
      this.$router.push("/phone");
    }

    let statusbar = document.querySelector(".statusbar");
    statusbar && statusbar.style.setProperty("--foreground", "#fff");
  },
  watch: {
    contacts(value) {
      this.contact = this.contacts.find(
        (item) => item.id == this.$route.params.id
      );

      if (!this.contact) {
        this.$router.push("/phone");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding: 0;
  overflow: hidden;
}

.header {
  position: relative;
  padding-top: calc(var(--safearea-top) + rem(10));
  padding-bottom: rem(10);
  padding-left: rem(8);
  padding-right: rem(8);
  color: #fff;
  background: linear-gradient(182deg, #50566a 0%, #262932 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(18);

  &-back {
    position: absolute;
    left: var(--safearea-inline);
    width: rem(24);
    height: rem(24);
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__avatar {
    width: rem(68);
    height: rem(68);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__name {
    font-size: rem(20);
    font-weight: 500;
    line-height: 1;
  }

  &__actions {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(8);

    .btn {
      height: rem(52);
      background: #484f60;
      border-radius: rem(7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: rem(6);
      cursor: pointer;
      transition: background var(--transition-ease);

      &:hover {
        background: #5c6479;
      }
    }

    svg {
      width: rem(22);
      height: rem(22);
    }

    span {
      font-size: rem(10);
    }
  }
}

.info {
  padding: rem(20) var(--safearea-inline);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);

  &__phone {
    padding: rem(10) rem(13);
    width: 100%;
    background: var(--foreground-light);
    border-radius: rem(6);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(6);

    &-label {
      color: #8c8c98;
      font-size: rem(10);
      font-weight: 500;
    }

    &-number {
      color: var(--primary);
      font-size: rem(10);
      font-weight: 500;
    }
  }

  &__actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: rem(6);
    overflow: hidden;

    &-item {
      padding: rem(12) rem(13);
      width: 100%;
      color: var(--primary);
      font-size: rem(10);
      font-weight: 500;
      line-height: 1;
      background: var(--foreground-light);
      transition: background var(--transition-ease);
      cursor: pointer;

      &:hover {
        background: rgba(28, 28, 30, 0.18);
      }

      &.danger {
        color: #ff3c3f;
      }

      &:not(:last-child) {
        border-bottom: rem(1) solid var(--foreground-light);
      }
    }
  }
}

.dark .info {
  &__phone {
    background: #1c1c1e;
  }

  &__actions {
    &-item {
      background: #1c1c1e;

      &:hover {
        background: #252527;
      }
    }
  }
}
</style>
