<template>
  <div class="screen" ref="screen">
    <div class="header" :class="{ active: isScrolled }">
      <div class="header__edit">Править</div>
      <div class="header__group">
        <div class="header__group-title">Сообщения</div>
        <div class="header__group-add" @click="$emit('addContact')">
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
      <div class="message" v-for="contact in getContacts" :key="contact.id">
        <div class="message-overlay" @click="openMessage(contact.id)"></div>

        <div class="message__avatar">
          <span class="message__avatar-dot"></span>
          <img :src="contact.avatar" alt="" />
        </div>

        <div class="message__info">
          <div class="message__info-sender">
            {{ contact.name }} {{ contact.surname }}
          </div>
          <div class="message__info-text">
            {{ contact.last_message.text || "" }}
          </div>
        </div>

        <div class="message__date">
          <span v-if="contact.last_message.date">{{
            dateToTime(contact.last_message.date)
          }}</span>
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

        <div class="message__actions">
          <div class="btn">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.309877 2.396H1.02909V11.9883C1.02909 13.0975 1.88134 14 2.92869 14H9.0097C10.0571 14 10.9094 13.0975 10.9094 11.9883V2.396H11.6903C11.8614 2.396 12 2.24908 12 2.06787C12 1.88664 11.8614 1.73973 11.6903 1.73973H7.84931V0.887923C7.84931 0.398312 7.4732 0 7.01095 0H4.9893C4.52695 0 4.15082 0.398284 4.15082 0.887923V1.73973H0.309877C0.138736 1.73973 0 1.88664 0 2.06787C0 2.24908 0.138736 2.396 0.309877 2.396ZM4.77057 0.887923C4.77057 0.76228 4.87071 0.65627 4.98933 0.65627H7.01098C7.13157 0.65627 7.22961 0.760229 7.22961 0.887923V1.73973H4.77057V0.887923ZM3.34415 10.8903V5.16627C3.34415 4.98504 3.48301 4.83812 3.65403 4.83812C3.82514 4.83812 3.96388 4.98504 3.96388 5.16627V10.8904C3.96388 11.0716 3.82514 11.2185 3.65403 11.2185C3.48301 11.2185 3.34415 11.0716 3.34415 10.8903ZM5.65933 10.8903V5.16627C5.65933 4.98504 5.79807 4.83812 5.96918 4.83812C6.14032 4.83812 6.27903 4.98504 6.27903 5.16627V10.8904C6.27903 11.0716 6.1403 11.2185 5.96918 11.2185C5.79807 11.2185 5.65933 11.0716 5.65933 10.8903ZM7.97441 10.8903V5.16627C7.97441 4.98504 8.11325 4.83812 8.28413 4.83812C8.45538 4.83812 8.59399 4.98504 8.59399 5.16627V10.8904C8.59399 11.0716 8.45538 11.2185 8.28413 11.2185C8.11325 11.2185 7.97441 11.0716 7.97441 10.8903Z"
                fill="#FF393D"
              />
            </svg>
          </div>
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
    ...mapState(["contacts"]),
    getContacts() {
      const contacts = this.contacts.filter((item) => item.messages);
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.search.toLowerCase());
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
  overflow-x: hidden;
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
      overflow: hidden;
      opacity: 0;

      &.active {
        margin-left: rem(8);
        width: rem(100);
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

  &__actions {
    position: absolute;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(15);
    transition: var(--transition-ease);
    opacity: 0;

    .btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: rem(15);
        height: rem(15);
      }

      &:last-child svg {
        width: rem(12);
        height: rem(12);
      }
    }
  }

  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    .message__date {
      pointer-events: none;
      opacity: 0;
    }

    .message__actions {
      opacity: 1;
    }
  }
}
</style>
