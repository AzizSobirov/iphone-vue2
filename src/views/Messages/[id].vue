<template>
  <div class="screen" ref="screen">
    <div class="header" :class="{ active: isScrolled }" v-if="message">
      <div class="header__back" @click="goBack">
        <div class="header__back-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 4.5L6.75 9L11.25 13.5"
              stroke="#0A83FB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="header__back-badge">184</div>
      </div>

      <div class="header__user">
        <img class="header__user-avatar" :src="message.avatar" alt="" />
        <div class="header__user-name">{{ message.name }}</div>
      </div>
    </div>

    <div class="messages" v-if="message">
      <!-- Grouped Messages by Date -->
      <template v-for="(group, index) in groupMessagesByDate">
        <!-- Sticky Date Header -->
        <div class="message-date" :key="`group-${index}`">
          {{ dateToTime(group.date) }}
        </div>

        <!-- Messages for the Date -->
        <div
          class="message"
          v-for="(msg, idx) in group.messages"
          :key="`msg-${index}-${idx}`"
          :class="{
            'my-message': msg.sender === profile.id,
            'other-message': msg.sender !== profile.id,
          }"
        >
          <span v-if="msg.type === 'text'" v-html="msg.text"></span>
          <img v-else src="./img/image.png" alt="" />
        </div>
      </template>
    </div>

    <div class="footer">
      <form class="form" @submit.prevent="handleSubmit">
        <label for="file" class="btn btn-file">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 4.33333H8.13042M1.625 8.66666L4.33333 5.95833C4.836 5.47462 5.45567 5.47462 5.95833 5.95833L8.66667 8.66666M7.58333 7.58333L8.125 7.04166C8.62767 6.55796 9.24733 6.55796 9.75 7.04166L11.375 8.66666M1.625 3.25C1.625 2.81902 1.7962 2.4057 2.10095 2.10095C2.4057 1.7962 2.81902 1.625 3.25 1.625H9.75C10.181 1.625 10.5943 1.7962 10.899 2.10095C11.2038 2.4057 11.375 2.81902 11.375 3.25V9.75C11.375 10.181 11.2038 10.5943 10.899 10.899C10.5943 11.2038 10.181 11.375 9.75 11.375H3.25C2.81902 11.375 2.4057 11.2038 2.10095 10.899C1.7962 10.5943 1.625 10.181 1.625 9.75V3.25Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input type="file" id="file" @change="handleFileUpload" />
        </label>
        <div class="btn btn-location" @click="sendLocation">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_70_5424)">
              <path
                d="M2.16683 6.49992C2.16683 7.64919 2.62338 8.75139 3.43603 9.56405C4.24869 10.3767 5.35089 10.8333 6.50016 10.8333M2.16683 6.49992C2.16683 5.35065 2.62338 4.24845 3.43603 3.43579C4.24869 2.62313 5.35089 2.16659 6.50016 2.16659M2.16683 6.49992H1.0835M6.50016 10.8333C7.64943 10.8333 8.75164 10.3767 9.56429 9.56405C10.377 8.75139 10.8335 7.64919 10.8335 6.49992M6.50016 10.8333V11.9166M10.8335 6.49992C10.8335 5.35065 10.377 4.24845 9.56429 3.43579C8.75164 2.62313 7.64943 2.16659 6.50016 2.16659M10.8335 6.49992H11.9168M6.50016 2.16659V1.08325M4.87516 6.49992C4.87516 6.9309 5.04637 7.34422 5.35111 7.64897C5.65586 7.95371 6.06919 8.12492 6.50016 8.12492C6.93114 8.12492 7.34447 7.95371 7.64921 7.64897C7.95396 7.34422 8.12516 6.9309 8.12516 6.49992C8.12516 6.06894 7.95396 5.65562 7.64921 5.35087C7.34447 5.04612 6.93114 4.87492 6.50016 4.87492C6.06919 4.87492 5.65586 5.04612 5.35111 5.35087C5.04637 5.65562 4.87516 6.06894 4.87516 6.49992Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_70_5424">
                <rect width="13" height="13" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="form-group">
          <textarea
            v-model="text"
            placeholder="Введите текст"
            required
          ></textarea>
          <button type="submit" class="btn btn-send">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 5.375V14.125M10.5 5.375L14 8.875M10.5 5.375L7 8.875"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { playSound } from "@/composables/useMe";
import { dateToTime } from "@/composables/useDate";

export default {
  name: "Messages",
  data() {
    return {
      isScrolled: false,
      message: null,
      text: "",
    };
  },
  computed: {
    ...mapState(["messages", "profile"]),
    dateToTime() {
      return dateToTime;
    },
    groupMessagesByDate() {
      const grouped = [];

      this.message.messages.forEach((msg) => {
        const date = msg.date.toDateString(); // Group by date only (ignoring time)
        const existingGroup = grouped.find((g) => g.date === date);

        if (existingGroup) {
          existingGroup.messages.push(msg);
        } else {
          grouped.push({
            date,
            messages: [msg],
          });
        }
      });

      return grouped;
    },
  },

  methods: {
    ...mapMutations(["sendMessage"]),
    goBack() {
      playSound();
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/messages");
      }
    },

    getMessage() {
      const id = this.$route.params.id;
      this.message = this.messages.find((message) => message.id == id);

      if (!this.message) {
        this.$router.push("/messages");
      }
    },

    handleFileUpload(file) {
      this.message.messages.push({
        id: this.message.messages.length + 1,
        type: "file",
        file: [45.123, 45.123],
        text: this.text,
        sender: this.profile.id,
        date: new Date(),
      });

      playSound("message-sent");
      this.text = "";

      this.scrollToBottom();
    },

    sendLocation() {
      this.message.messages.push({
        id: this.message.messages.length + 1,
        type: "location",
        location: [45.123, 45.123],
        text: this.text,
        sender: this.profile.id,
        date: new Date(),
      });

      playSound("message-sent");
      this.text = "";

      this.scrollToBottom();
    },

    handleSubmit() {
      this.message.messages.push({
        id: this.message.messages.length + 1,
        type: "text",
        text: this.text,
        sender: this.profile.id,
        date: new Date(),
      });

      playSound("message-sent");
      this.text = "";

      this.scrollToBottom();
    },

    scrollToBottom() {
      setTimeout(() => {
        this.$refs.screen.scroll(0, this.$refs.screen.scrollHeight);
      }, 10);
    },
    scrollHandler() {
      this.isScrolled = this.$refs.screen.scrollTop > 0;
    },
  },
  mounted() {
    this.getMessage();
    this.scrollToBottom();
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
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header {
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: calc(var(--safearea-top) + rem(10));
  padding-bottom: rem(10);
  padding-left: var(--safearea-inline);
  padding-right: var(--safearea-inline);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background: rgba(255, 255, 255, 0.41);
    backdrop-filter: blur(16px);
  }

  &__back {
    position: absolute;
    top: calc(var(--safearea-top) + rem(10));
    left: rem(10);
    display: flex;
    align-items: center;
    cursor: pointer;

    &-icon {
      width: rem(18);
      height: rem(18);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-badge {
      padding: rem(4) rem(5);
      color: #fff;
      font-size: rem(10);
      font-weight: 500;
      line-height: 1;
      background: var(--primary);
      border-radius: 9999px;
    }
  }

  &__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(8);

    &-avatar {
      width: rem(30);
      height: rem(30);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    &-name {
      font-size: rem(10);
      font-weight: 600;
      line-height: 1;
    }
  }
}

.dark .header.active {
  background: rgba(23, 23, 23, 0.41);
}

.messages {
  padding: 0 var(--safearea-inline) rem(10);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: rem(10);

  .message-date {
    position: sticky;
    top: rem(102);
    z-index: 2;
    margin: 0 auto;
    padding: rem(4) rem(6);
    width: fit-content;
    color: var(--foreground);
    font-size: rem(8);
    font-weight: 500;
    text-align: center;
    background-color: var(--background);
    border-radius: 9999px;
  }

  .message {
    width: fit-content;
    max-width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    span {
      padding: rem(10);
      width: fit-content;
      font-size: rem(10);
      font-weight: 500;
      border-radius: rem(8);
      white-space: pre-wrap;
    }

    img {
      width: rem(180);
      height: auto;
      max-height: rem(150);
      border-radius: rem(8);
      object-fit: cover;
    }

    &.my-message {
      align-self: flex-end;
      align-items: flex-end;

      span {
        color: #fff;
        background-color: var(--primary);
      }
    }

    &.other-message {
      align-self: flex-start;
      align-items: flex-start;

      span {
        background-color: var(--foreground-light);
      }
    }
  }
}

.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 2;
  margin-top: auto;
  padding-top: rem(5);
  padding-bottom: calc(var(--safearea-bottom) + rem(5));
  padding-left: var(--safearea-inline);
  padding-right: var(--safearea-inline);
  width: 100%;
  background: rgba(255, 255, 255, 0.41);
  backdrop-filter: blur(16px);
}

.dark .footer {
  background: rgba(23, 23, 23, 0.41);
}

.form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(5);

  &-group {
    margin-left: rem(3);
    padding: rem(3);
    border: rem(1) solid var(--foreground-light);
    border-radius: 9999px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(5);
  }

  textarea {
    padding: rem(6);
    height: rem(24);
    font-size: rem(10);
    font-weight: 500;
    resize: none;
    flex-grow: 1;
  }
}

.btn {
  min-width: rem(25);
  width: rem(25);
  height: rem(25);
  color: #727272;
  background: var(--foreground-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-ease);
  cursor: pointer;

  &:hover {
    color: #fff !important;
    background: var(--primary);
  }

  svg {
    width: rem(13);
    height: rem(14);
  }

  input[type="file"] {
    display: none;
  }

  &-send {
    min-width: rem(22);
    width: rem(22);
    height: rem(22);
    background: #2ed257;

    &:hover {
      background: #2ed257;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
}

.dark .btn {
  color: #a8a8aa;
}
</style>
