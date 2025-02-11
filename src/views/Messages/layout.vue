<template>
  <div class="layout">
    <transition name="inner-transition" mode="out-in">
      <router-view @addContact="openSheet" />
    </transition>

    <Sheet ref="sheet" :can-swipe="false" :zIndex="9">
      <div class="message">
        <div class="message__header">
          <div class="message__header-title">Новое сообщение</div>
          <div class="message__header-cancel" @click="closeSheet">Отменить</div>
        </div>

        <div class="message__send">
          <form class="message__send-to" @submit.prevent="addUser">
            <span>Кому:</span>
            <div class="message__send-users">
              <span v-for="user in selected_users" :key="user.id">
                {{ user.name }}
              </span>
            </div>
            <input type="text" v-model="search" placeholder="Поиск" />
            <button type="submit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H13V7Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>

          <div v-if="selected_users.length" class="message__send-from">
            <span>От кого:</span>
            <span>{{ profile.name }} {{ profile.surname }}</span>
          </div>

          <div v-if="search" class="message__send-contacts">
            <div
              class="message__send-contact"
              v-for="contact in filteredContacts"
              :key="contact.id"
              @click="addUser(contact)"
            >
              <img :src="contact.avatar" alt="" />
              <div class="flex-col">
                <span>{{ contact.name }} {{ contact.surname }}</span>
                <span>{{ contact.number }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="messages" v-if="selected_users.length" ref="messages">
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

        <div class="footer" :class="{ disabled: !selected_users.length }">
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
    </Sheet>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Sheet from "@webzlodimir/vue-bottom-sheet-vue2";
import noAvatar from "@/assets/img/no-avatar.svg";
import { dateToTime } from "@/composables/useDate";
import { playSound } from "@/composables/useMe";

export default {
  components: { Sheet },
  data() {
    return {
      messages: [],
      selected_users: [],
      text: "",
      search: "",
    };
  },
  computed: {
    ...mapState(["contacts", "profile"]),
    filteredContacts() {
      return this.contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(this.search.toLowerCase()) ||
          contact.surname.toLowerCase().includes(this.search.toLowerCase()) ||
          contact.number.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
    dateToTime() {
      return dateToTime;
    },
    groupMessagesByDate() {
      const grouped = [];

      this.messages.forEach((msg) => {
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
    ...mapMutations(["addContact"]),
    openSheet() {
      this.$refs.sheet.open();
    },
    closeSheet() {
      this.$refs.sheet.close();
      this.selected_users = [];
    },

    addUser(data) {
      if (data && data.id) {
        this.selected_users.push(data);
      } else {
        this.selected_users.push({
          id: this.selected_users.length + 1,
          name: "name",
          surname: "surname",
          number: this.search,
          avatar: noAvatar,
        });
      }

      this.search = "";
    },

    handleFileUpload(file) {
      this.messages.push({
        id: this.messages.length + 1,
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
      this.messages.push({
        id: this.messages.length + 1,
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
      this.messages.push({
        id: this.messages.length + 1,
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
        this.$refs.messages.scroll(0, this.$refs.messages.scrollHeight);
      }, 10);
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

.message {
  position: relative;
  width: 100%;
  height: rem(510);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--background);

  &__header {
    position: relative;
    height: rem(35);
    width: 100%;
    background: var(--foreground-light);
    display: flex;
    align-items: center;
    justify-content: center;

    &-title {
      font-size: rem(10);
      font-weight: 600;
    }

    &-cancel {
      position: absolute;
      right: var(--safearea-inline);
      color: var(--primary);
      font-size: rem(10);
      font-weight: 500;
      cursor: pointer;
    }
  }

  &__send {
    position: absolute;
    top: rem(35);
    left: 0;
    z-index: 3;
    padding: rem(6) rem(10);
    width: 100%;
    background: var(--background);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-to {
      padding-bottom: rem(6);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: rem(1) solid var(--foreground-light);

      span {
        font-size: rem(10);
        font-weight: 500;
      }
    }

    &-users {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: rem(2);
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      span:first-child {
        margin-left: rem(5);
      }

      span {
        padding: rem(2) rem(4);
        color: var(--primary);
        background: #0a83fb20;
        border-radius: rem(4);
      }
    }

    &-contacts {
      margin-top: rem(6);
      max-height: rem(360);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(5);
      overflow: auto;
    }

    &-contact {
      padding-top: rem(4);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(5);
      cursor: pointer;

      img {
        margin-bottom: rem(6);
        width: rem(28);
        height: rem(28);
        border-radius: 50%;
        object-fit: cover;
      }

      .flex-col {
        padding-bottom: rem(6);
        flex-grow: 1;
        font-size: rem(10);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: rem(2);
        border-bottom: rem(1) solid var(--foreground-light);
      }

      span:first-child {
        font-weight: 500;
      }
    }

    &-from {
      padding: rem(6) 0 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(5);

      span {
        font-size: rem(10);
        font-weight: 500;
      }

      span:last-child {
        color: var(--primary);
      }
    }

    input {
      margin-left: rem(5);
      width: 80px;
      flex-grow: 1;
      font-size: rem(10);
    }

    button {
      margin-left: auto;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: rem(16);
        height: rem(16);
      }
    }
  }

  .messages {
    margin-top: auto;
    padding: rem(40) rem(10) rem(65);
    max-height: rem(475);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: rem(10);
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .message-date {
      position: relative;
      z-index: 2;
      margin: 0 auto;
      padding: rem(6) rem(10);
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
    position: absolute;
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

    &.disabled {
      pointer-events: none;
    }
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
      padding: rem(2) rem(6);
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
}

.dark .message {
  background: rgb(23, 23, 23);

  &__send {
    background: rgb(23, 23, 23);
  }

  .footer {
    background: rgba(23, 23, 23, 0.41);
  }

  .btn {
    color: #a8a8aa;
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
    background: var(--background) !important;
    border-radius: rem(15) rem(15) 0 0 !important;
  }

  &__draggable-area {
    display: none !important;
  }
}
</style>
