<template>
  <div class="screen" ref="screen">
    <div class="header">
      <img class="header-icon" src="./img/app-icon.svg" alt="" />
      <div class="header-title">Лента объявлений</div>
    </div>

    <div class="list">
      <div class="item" v-for="(item, index) in news" :key="index">
        <div class="author">
          <div class="author__group">
            <div class="author__group-icon">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.0596 9.95294C4.18439 9.53762 4.43973 9.17359 4.78774 8.91485C5.13576 8.65611 5.55791 8.51644 5.99157 8.51657H8.00824C8.44245 8.51642 8.86512 8.65642 9.21339 8.91576C9.56165 9.1751 9.81692 9.53992 9.94121 9.95596M2.4624 6.4999C2.4624 7.09578 2.57977 7.68581 2.8078 8.23633C3.03583 8.78684 3.37006 9.28705 3.79141 9.7084C4.21275 10.1297 4.71296 10.464 5.26348 10.692C5.81399 10.92 6.40403 11.0374 6.9999 11.0374C7.59578 11.0374 8.18581 10.92 8.73633 10.692C9.28684 10.464 9.78705 10.1297 10.2084 9.7084C10.6297 9.28705 10.964 8.78684 11.192 8.23633C11.42 7.68581 11.5374 7.09578 11.5374 6.4999C11.5374 5.90403 11.42 5.31399 11.192 4.76348C10.964 4.21296 10.6297 3.71275 10.2084 3.29141C9.78705 2.87006 9.28684 2.53583 8.73633 2.3078C8.18581 2.07977 7.59578 1.9624 6.9999 1.9624C6.40403 1.9624 5.81399 2.07977 5.26348 2.3078C4.71296 2.53583 4.21275 2.87006 3.79141 3.29141C3.37006 3.71275 3.03583 4.21296 2.8078 4.76348C2.57977 5.31399 2.4624 5.90403 2.4624 6.4999ZM5.4874 5.49157C5.4874 5.89271 5.64675 6.27742 5.9304 6.56107C6.21405 6.84472 6.59876 7.00407 6.9999 7.00407C7.40104 7.00407 7.78575 6.84472 8.0694 6.56107C8.35305 6.27742 8.5124 5.89271 8.5124 5.49157C8.5124 5.09043 8.35305 4.70572 8.0694 4.42207C7.78575 4.13842 7.40104 3.97907 6.9999 3.97907C6.59876 3.97907 6.21405 4.13842 5.9304 4.42207C5.64675 4.70572 5.4874 5.09043 5.4874 5.49157Z"
                  stroke="currentColor"
                  stroke-width="1.00833"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="author__group-name">
              {{ item.author.name }}
            </div>
          </div>

          <div class="author-category">{{ item.author.category }}</div>
        </div>

        <div class="announcement">
          <p class="announcement-desc">
            {{ item.desc }}
          </p>

          <div class="announcement-actions">
            <div class="btn btn-call">Позвонить</div>
            <div class="btn btn-write">Написать</div>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/news/create" class="create">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00008 3.979V13.0207M3.47925 8.49984H12.5209"
          stroke="white"
          stroke-width="1.29167"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Подать объявление</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        {
          id: 0,
          author: {
            id: 0,
            name: "Source Insensitive",
            category: "Автомобиль",
          },
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },

        {
          id: 1,
          author: {
            id: 1,
            name: "Source Insensitive",
            category: "Автомобиль",
          },
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },

        {
          id: 2,
          author: {
            id: 2,
            name: "Source Insensitive",
            category: "Автомобиль",
          },
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },

        {
          id: 3,
          author: {
            id: 3,
            name: "Source Insensitive",
            category: "Автомобиль",
          },
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
    };
  },
  methods: {
    scrollHandler() {
      const screen = this.$refs.screen;
      const announcements = screen.querySelectorAll(".item");

      announcements.forEach((announcement) => {
        const announcementRect = announcement.getBoundingClientRect();
        const screenRect = screen.getBoundingClientRect();

        // Check if the announcement is fully visible within the screen
        if (
          announcementRect.top >= screenRect.top && // Top is within the screen
          announcementRect.bottom <= screenRect.bottom // Bottom is within the screen
        ) {
          announcement.classList.add("active");
        } else {
          announcement.classList.remove("active");
        }
      });
    },
  },
  mounted() {
    this.scrollHandler();
    this.$refs.screen.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    this.$refs.screen.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  padding-top: rem(10);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(10);

  &-icon {
    width: rem(25);
    height: rem(25);
    object-fit: contain;
  }

  &-title {
    font-size: rem(15);
    font-weight: 700;
  }
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(24);
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(8);
  transition: var(--transition-ease);
  opacity: 0.5;

  &.active {
    opacity: 1;
  }
}

.author {
  position: relative;
  padding: rem(10) rem(12);
  width: 100%;
  color: #fff;
  background: var(--primary);
  border-radius: rem(5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(8);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(60%, -65%);
    width: rem(86);
    height: rem(86);
    border: rem(24) solid currentColor;
    border-radius: 50%;
  }

  &__group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(6);

    &-icon {
      width: rem(14);
      height: rem(14);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-name {
      color: #fff;
      font-size: rem(11);
      font-weight: 500;
    }
  }

  &-category {
    font-size: rem(9);
    font-weight: 500;
  }
}

.dark .author {
  color: var(--primary);
  background: linear-gradient(
    90deg,
    var(--primary-light) 5%,
    rgba(254, 80, 114, 0) 100%
  );
}

.announcement {
  padding: rem(9) rem(10) rem(10);
  width: 100%;
  background: var(--foreground-light);
  border-radius: rem(5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(12);

  &-desc {
    font-size: rem(10);
    font-weight: 500;
    line-height: 1.35;
  }

  &-actions {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(10);
  }

  .btn {
    height: rem(40);
    color: #fff;
    font-size: rem(9);
    font-weight: 500;
    line-height: 1;
    border-radius: rem(8);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background var(--transition-ease);

    &-call {
      background: var(--green);
    }

    &-write {
      background: var(--primary);
    }
  }
}

.dark .announcement {
  background: linear-gradient(
    180deg,
    rgba(25, 25, 25, 0) 0%,
    rgba(25, 25, 25, 0.61) 100%
  );

  .btn {
    &-call {
      color: var(--green);
      background: var(--green-light);

      &:hover {
        color: var(--green-dark);
        background: var(--green);
      }
    }

    &-write {
      color: var(--primary);
      background: var(--primary-light);

      &:hover {
        color: #fff;
        background: #fe5072;
      }
    }
  }
}

.create {
  position: sticky;
  bottom: var(--safearea-bottom);
  margin: rem(20) auto 0;
  padding: rem(10) rem(12);
  background: var(--primary);
  border-radius: rem(8);
  box-shadow: 0 0 rem(45) 0 rgba(254, 80, 83, 0.35);
  transition: var(--transition-ease);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(8);

  &:hover {
    background: #ff6f71;
  }

  svg {
    width: rem(16);
    height: rem(16);
  }

  span {
    color: #fff;
    font-size: rem(10);
    font-weight: 500;
    line-height: 1;
  }
}
</style>
