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
          {{ msg.text }}
        </div>
      </template>
    </div>

    <div class="footer"></div>
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
      message: null,
    };
  },
  computed: {
    ...mapState(["messages", "profile"]),
    getMessages() {
      return this.messages.filter((message) => {
        return message.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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
    // openMessage(id) {
    //   playSound();
    //   this.$router.push(`/messages/${id}`);
    // },
    scrollHandler() {
      this.isScrolled = this.$refs.screen.scrollTop > 0;
    },
  },
  mounted() {
    this.getMessage();
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
    top: rem(100);
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
    padding: rem(10);
    max-width: 70%;
    font-size: rem(10);
    font-weight: 500;
    border-radius: rem(8);

    &.my-message {
      align-self: flex-end;
      color: #fff;
      background-color: var(--primary);
    }

    &.other-message {
      align-self: flex-start;
      background-color: var(--foreground-light);
    }
  }
}

.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-top: rem(5);
  padding-bottom: var(--safearea-bottom);
  width: 100%;
  height: rem(50);
  background: rgba(255, 255, 255, 0.41);
  backdrop-filter: blur(16px);
}
</style>
