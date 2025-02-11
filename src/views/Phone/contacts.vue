<template>
  <div class="screen" ref="screen">
    <div class="header" :class="{ active: isScrolled }">
      <div class="header__group">
        <div class="header__group-title">Контакты</div>
        <div class="header__group-add" @click="$emit('saveContact')">
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
          <input
            type="text"
            v-model="search"
            placeholder="Поиск"
            @input="filterContacts"
          />
        </div>
        <div
          class="header__search-cancel"
          :class="{ active: search }"
          @click="clearSearch"
        >
          Отменить
        </div>
      </div>
    </div>

    <div class="profile">
      <div class="profile-avatar"><img :src="profile.avatar" alt="" /></div>
      <div class="profile-info">
        <div class="profile-name">{{ profile.name }}</div>
        <div class="profile-number">Это Вы</div>
      </div>
    </div>

    <div class="contacts">
      <div
        v-for="(group, letter) in groupedContacts"
        :key="letter"
        class="contacts__group"
      >
        <div class="contacts__group-title">{{ letter }}</div>
        <div
          v-for="item in group"
          :key="item.id"
          class="contacts__item"
          @click="selectContact(item)"
        >
          {{ item.name }} {{ item.surname || "" }}
        </div>
      </div>
      <div v-if="!filteredContacts.length" class="no-results">
        Нет результатов
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { playSound } from "@/composables/useMe";

export default {
  data() {
    return {
      isScrolled: false,
      search: "",
      filteredContacts: [],
    };
  },
  computed: {
    ...mapState(["contacts", "profile"]),
    groupedContacts() {
      return this.filteredContacts.reduce((acc, item) => {
        const firstLetter = item.name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(item);
        return acc;
      }, {});
    },
  },
  methods: {
    scrollHandler() {
      this.isScrolled = this.$refs.screen.scrollTop > 0;
    },
    filterContacts() {
      const query = this.search.toLowerCase();
      this.filteredContacts = this.contacts.filter(
        (fav) =>
          fav.name.toLowerCase().includes(query) ||
          fav.surname.toLowerCase().includes(query) ||
          fav.number.includes(query) // Allow search by phone number
      );
    },
    clearSearch() {
      this.search = "";
      this.filterContacts();
    },
    selectContact(item) {
      this.$router.push(`/phone/${item.id}`);
      playSound();
    },
  },
  mounted() {
    this.filteredContacts = this.contacts;
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

.profile {
  padding: rem(5) 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(10);

  &-avatar {
    width: rem(32);
    height: rem(32);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(6);
  }

  &-name {
    font-size: rem(10);
    font-weight: 600;
  }

  &-number {
    color: var(--text-muted);
    font-size: rem(10);
    font-weight: 500;
  }
}

.contacts {
  padding-top: rem(10);
  padding-bottom: calc(var(--safearea-bottom) + rem(40));
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &__group {
    width: 100%;

    &-title {
      padding-bottom: rem(12);
      color: #5b5a61;
      font-size: rem(10);
      font-weight: 500;
      border-bottom: 1px solid var(--foreground-light);
    }
  }

  &__item {
    padding: rem(18) 0;
    font-size: rem(10);
    font-weight: 500;
    border-bottom: 1px solid var(--foreground-light);
    cursor: pointer;
  }
}

.no-results {
  padding: rem(16);
  width: 100%;
  color: #5b5a61;
  font-size: rem(12);
  text-align: center;
}
</style>
