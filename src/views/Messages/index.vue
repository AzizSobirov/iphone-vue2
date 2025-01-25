<template>
  <div class="screen" ref="screen">
    <div class="header" :class="{ active: isScrolled }">
      <div class="header__edit">Править</div>
      <div class="header__group">
        <div class="header__group-title">Сообщения</div>
        <div class="header__group-add">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.625 1.125V9.875M1.25 5.5H10"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="header__search">
        <div class="header__search-inp">
          <div class="header__search-icon">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.375 11.875L8.125 8.625M1.625 5.91667C1.625 6.4146 1.72307 6.90765 1.91362 7.36768C2.10417 7.8277 2.38346 8.24569 2.73555 8.59778C3.08764 8.94987 3.50563 9.22916 3.96566 9.41971C4.42569 9.61026 4.91874 9.70833 5.41667 9.70833C5.9146 9.70833 6.40765 9.61026 6.86768 9.41971C7.3277 9.22916 7.74569 8.94987 8.09778 8.59778C8.44987 8.24569 8.72916 7.8277 8.91971 7.36768C9.11026 6.90765 9.20833 6.4146 9.20833 5.91667C9.20833 5.41874 9.11026 4.92569 8.91971 4.46566C8.72916 4.00563 8.44987 3.58764 8.09778 3.23555C7.74569 2.88346 7.3277 2.60417 6.86768 2.41362C6.40765 2.22307 5.9146 2.125 5.41667 2.125C4.91874 2.125 4.42569 2.22307 3.96566 2.41362C3.50563 2.60417 3.08764 2.88346 2.73555 3.23555C2.38346 3.58764 2.10417 4.00563 1.91362 4.46566C1.72307 4.92569 1.625 5.41874 1.625 5.91667Z"
                stroke="currentColor"
                stroke-width="1.08333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input type="text" v-model="search" placeholder="Поиск" />
        </div>
        <div
          class="header__search-cancel"
          :class="{ active: search }"
          @click="search = ''"
        >
          Отменить
        </div>
      </div>
    </div>

    <div class="messages">
      <div
        class="message"
        v-for="message in getMessages"
        :key="message.id"
        @click="openMessage(message.id)"
      >
        <div class="message__avatar">
          <span class="message__avatar-dot"></span>
          <img :src="message.avatar" alt="" />
        </div>

        <div class="message__info">
          <div class="message__info-sender">{{ message.name }}</div>
          <div class="message__info-text">{{ message.text }}</div>
        </div>

        <div class="message__date">
          <span>{{ dateToTime(message.date) }}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.125 2.75L6.875 5.5L4.125 8.25"
              stroke="#5B5A61"
              stroke-width="0.916667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { playSound } from "@/composables/useMe";
import { dateToTime } from "@/composables/useDate";

export default {
  name: "Messages",
  data() {
    return {
      isScrolled: false,
      search: "",
    };
  },
  computed: {
    ...mapState(["messages"]),
    getMessages() {
      return this.messages.filter((message) => {
        return message.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    dateToTime() {
      return dateToTime;
    },
  },

  methods: {
    openMessage(id) {
      playSound();
      this.$router.push(`/messages/${id}`);
    },
    scrollHandler() {
      this.isScrolled = this.$refs.screen.scrollTop > 0;
    },
  },
  mounted() {
    this.$refs.screen.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    this.$refs.screen.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding-top: 0;
}

.header {
  position: sticky;
  top: 0;
  z-index: 2;
  margin-left: calc(var(--safearea-inline) * -1);
  padding-top: calc(var(--safearea-top) + rem(10));
  padding-bottom: rem(10);
  padding-left: var(--safearea-inline);
  padding-right: var(--safearea-inline);
  width: calc(100% + var(--safearea-inline) * 2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);

  &.active {
    background: rgba(255, 255, 255, 0.41);
    backdrop-filter: blur(16px);
  }

  &__edit {
    color: var(--primary);
    font-size: rem(11);
  }

  &__group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(10);

    &-title {
      font-size: rem(20);
      font-weight: 700;
      line-height: 1;
    }

    &-add {
      width: rem(10);
      height: rem(10);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &-inp {
      padding: rem(8);
      width: 100%;
      background: var(--foreground-light);
      border-radius: rem(7);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(6);

      input {
        width: 100%;
        color: var(--foreground);
        font-size: rem(10);
        font-weight: 500;

        &::placeholder {
          color: #5b5a61;
        }
      }
    }

    &-icon {
      width: rem(13);
      height: rem(13);
      color: #5b5a61;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-cancel {
      width: 0;
      color: var(--primary);
      font-size: rem(10);
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition-ease);
      opacity: 0;

      &.active {
        margin-left: rem(8);
        width: rem(50);
        opacity: 1;
      }
    }
  }
}

.dark .header.active {
  background: rgba(23, 23, 23, 0.41);
}

.messages {
  padding-top: rem(6);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);
}

.message {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: rem(10);
  cursor: pointer;

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(8);

    &-dot {
      min-width: rem(6);
      width: rem(6);
      height: rem(6);
      background: var(--primary);
      border-radius: 50%;
    }

    & > img {
      min-width: rem(30);
      width: rem(30);
      height: rem(30);
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__info {
    padding-bottom: rem(10);
    border-bottom: rem(1) solid #5b5a6133;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(4);

    &-sender {
      font-size: rem(10);
      font-weight: 600;
    }

    &-text {
      color: #5b5a61;
      font-size: rem(8);
      font-weight: 500;
      line-height: 1.5;
    }
  }

  &__date {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(4);

    span {
      font-size: rem(8);
      font-weight: 500;
    }

    svg {
      width: rem(10);
      height: rem(10);
    }
  }
}
</style>
