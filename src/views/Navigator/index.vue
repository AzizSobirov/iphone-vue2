<template>
  <div class="screen">
    <div class="header">
      <div class="header__app">
        <img class="header__app-logo" src="./img/logo.svg" alt="" />
        <div class="header__app-name">Навигатор</div>
      </div>
    </div>

    <div class="select">
      <div
        class="select__trigger"
        :class="{ active: select.active }"
        @click="
          () => {
            select.active = !select.active;
            playSound();
          }
        "
      >
        <div class="select__trigger-value">{{ select.value }}</div>
        <div class="select__trigger-icon">
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.25L4.5 4.75L8 1.25"
              stroke="currentColor"
              stroke-width="1.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div v-if="select.active" class="select__options">
        <div
          class="select__option"
          v-for="(option, index) in select.options"
          :key="index"
          @click="
            () => {
              select.value = option;
              select.active = false;
              playSound();
            }
          "
        >
          <div class="select__option-value">{{ option }}</div>
        </div>
      </div>
    </div>

    <div class="search">
      <div class="search__input">
        <input type="text" placeholder="Поиск" v-model="search" />
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.25 12.25L8.75 8.75M1.75 5.83333C1.75 6.36956 1.85562 6.90055 2.06083 7.39596C2.26603 7.89137 2.56681 8.34151 2.94598 8.72069C3.32515 9.09986 3.7753 9.40064 4.27071 9.60584C4.76612 9.81105 5.2971 9.91667 5.83333 9.91667C6.36956 9.91667 6.90055 9.81105 7.39596 9.60584C7.89137 9.40064 8.34151 9.09986 8.72069 8.72069C9.09986 8.34151 9.40064 7.89137 9.60584 7.39596C9.81105 6.90055 9.91667 6.36956 9.91667 5.83333C9.91667 5.2971 9.81105 4.76612 9.60584 4.27071C9.40064 3.7753 9.09986 3.32515 8.72069 2.94598C8.34151 2.56681 7.89137 2.26603 7.39596 2.06083C6.90055 1.85562 6.36956 1.75 5.83333 1.75C5.2971 1.75 4.76612 1.85562 4.27071 2.06083C3.7753 2.26603 3.32515 2.56681 2.94598 2.94598C2.56681 3.32515 2.26603 3.7753 2.06083 4.27071C1.85562 4.76612 1.75 5.2971 1.75 5.83333Z"
            stroke="currentColor"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="locations">
      <div class="location" v-for="location in getLocations" :key="location.id">
        <div class="location__icon">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_166_325)">
              <path
                d="M8.02317 3.91946V3.17286H9.84732C9.94405 3.17286 10.0369 3.13451 10.1053 3.06611C10.1739 2.99757 10.2122 2.90484 10.2122 2.80798V1.34871C10.2122 1.25184 10.1739 1.15912 10.1053 1.09058C10.0369 1.02217 9.94405 0.983826 9.84732 0.983826H7.65828C7.56155 0.983826 7.46869 1.02217 7.40028 1.09058C7.33174 1.15912 7.2934 1.25184 7.2934 1.34871V3.91946C5.46925 3.90249 2.55058 5.3619 2.20801 7.55093H13.1086C12.766 5.3619 9.84732 3.90249 8.02317 3.91946Z"
                fill="#0A83FB"
              />
              <path
                d="M1.45668 14.8477H13.8611C14.0626 14.8477 14.226 15.0111 14.226 15.2125V15.9422C14.226 16.1437 14.0626 16.3071 13.8611 16.3071H1.45668C1.2552 16.3071 1.0918 16.1437 1.0918 15.9422V15.2125C1.0918 15.0111 1.2552 14.8477 1.45668 14.8477Z"
                fill="#0A83FB"
              />
              <path
                d="M2.55078 10.4696H4.01005V14.118H2.55078V10.4696Z"
                fill="#0A83FB"
              />
              <path
                d="M1.82143 9.73992H13.4964C13.8993 9.73992 14.226 9.41325 14.226 9.01028C14.226 8.60719 13.8993 8.28052 13.4964 8.28052H1.82143C1.41847 8.28052 1.0918 8.60719 1.0918 9.01028C1.0918 9.41325 1.41847 9.73992 1.82143 9.73992Z"
                fill="#0A83FB"
              />
              <path
                d="M8.38867 10.4696H9.84807V14.118H8.38867V10.4696Z"
                fill="#0A83FB"
              />
              <path
                d="M5.46973 10.4696H6.92913V14.118H5.46973V10.4696Z"
                fill="#0A83FB"
              />
              <path
                d="M11.3066 10.4696H12.7659V14.118H11.3066V10.4696Z"
                fill="#0A83FB"
              />
            </g>
            <defs>
              <clipPath id="clip0_166_325">
                <rect
                  width="15.3232"
                  height="15.3232"
                  fill="white"
                  transform="translate(-0.00292969 0.983826)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="location__group">
          <div class="location__name">{{ location.name }}</div>
          <div class="location__distance">{{ location.distance }}</div>
        </div>
        <div class="btn">Метка</div>
      </div>
    </div>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "Navigator",
  data() {
    return {
      search: "",
      select: {
        active: false,
        value: "Общественные места",
        options: [
          "Общественные места",
          "Общественные места 2",
          "Общественные места 3",
        ],
      },
      locations: [
        {
          id: 1,
          name: "Мэрия г. Лос-Сантос",
          distance: "255 км от Вас",
        },
        {
          id: 2,
          name: "Something",
          distance: "255 км от Вас",
        },
        {
          id: 3,
          name: "Audi",
          distance: "255 км от Вас",
        },
        {
          id: 4,
          name: "Lamborghini",
          distance: "255 км от Вас",
        },
        {
          id: 5,
          name: "Мэрия г. Лос-Сантос",
          distance: "255 км от Вас",
        },
        {
          id: 6,
          name: "Мэрия г. Лос-Сантос",
          distance: "255 км от Вас",
        },
        {
          id: 7,
          name: "Мэрия г. Лос-Сантос",
          distance: "255 км от Вас",
        },
        {
          id: 8,
          name: "Мэрия г. Лос-Сантос",
          distance: "255 км от Вас",
        },
      ],
    };
  },
  computed: {
    getLocations() {
      return this.locations.filter((location) =>
        location.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    playSound() {
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  padding-bottom: 0;
  height: 100%;
  width: 100%;
  font-family: "Gilroy", sans-serif;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(15);
  --primary: #0a83fb;
}

.dark .screen {
  background: linear-gradient(180deg, #121212 0%, #16191f 50%, #121212 99%);
}

.header {
  padding: rem(10) 0 0;
  width: 100%;
  font-family: "ProximaNova", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  &__app {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(10);

    &-logo {
      width: rem(25);
      height: rem(25);
      border-radius: rem(3);
      object-fit: cover;
    }

    &-name {
      font-size: rem(14);
      font-weight: 700;
    }
  }
}

.select {
  position: relative;
  width: 100%;

  &__trigger {
    position: relative;
    z-index: 2;
    padding: 0 rem(14);
    height: rem(38);
    width: 100%;
    border: rem(1) solid var(--foreground-light);
    border-radius: rem(6);
    transition: border var(--transition-ease), color var(--transition-ease);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(10);
    cursor: pointer;

    &-value {
      font-size: rem(10);
      font-weight: 600;
    }

    &-icon {
      width: rem(10);
      height: rem(10);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-ease);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &.active {
      color: #fff;
      background: var(--primary);
      border-color: var(--primary);

      .select__trigger-icon {
        color: #fff;
        transform: rotateX(-180deg);
      }
    }
  }

  &__options {
    position: absolute;
    top: calc(100% - rem(10));
    left: 0;
    padding: rem(10) rem(10) 0;
    width: 100%;
    background: #d8dde8;
    border-radius: 0 0 rem(6) rem(6);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__option {
    position: relative;
    padding: rem(10) 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);
    cursor: pointer;

    &:not(:last-child) {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: rem(30);
        width: calc(100% - rem(35));
        border: rem(1) solid #33394510;
      }
    }

    &-value {
      font-size: rem(10);
      font-weight: 600;
    }
  }

  .icon {
    padding: rem(5);
    width: rem(22);
    height: rem(22);
    background: var(--primary);
    border-radius: rem(4);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}

.dark .select {
  &__options {
    background: #2a2f39;
  }

  &__option::after {
    border-color: #333945;
  }
}

.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  &__input {
    padding: 0 rem(10);
    width: 100%;
    height: rem(34);
    background: var(--foreground-light);
    border-radius: rem(5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(10);

    input {
      width: 100%;
      font-size: rem(11);
      font-weight: 500;
    }

    svg {
      min-width: rem(14);
      width: rem(14);
      height: rem(14);
    }
  }
}

.dark .search {
  &__input {
    background: #101113;
  }
}

.locations {
  padding-bottom: calc(var(--safearea-bottom) + rem(10));
  height: rem(370);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);

  &::-webkit-scrollbar {
    display: none;
  }
}

.location {
  padding: rem(10);
  width: 100%;
  background: var(--foreground-light);
  border: rem(1) solid var(--foreground-light);
  border-radius: rem(6);
  transition: background var(--transition-ease), color var(--transition-ease),
    border var(--transition-ease);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);
  cursor: pointer;

  &__icon {
    min-width: rem(15);
    width: rem(15);
    height: rem(15);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__group {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: rem(2);
  }

  &__name {
    font-size: rem(10);
    font-weight: 600;
  }

  &__distance {
    font-size: rem(10);
    font-weight: 500;
    opacity: 0.6;
  }

  .btn {
    width: rem(53);
    height: rem(22);
    color: #747582;
    font-size: rem(10);
    font-weight: 500;
    background: var(--foreground-light);
    border-radius: rem(3);
    transition: background var(--transition-ease), color var(--transition-ease);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .btn {
    color: #fff;
    background: #0a83fb;
  }
}

.dark .location {
  background: #1d2024;

  &:hover {
    .btn {
      box-shadow: 0 0 rem(23) 0 rgba(10, 131, 251, 0.35),
        inset 0 0 rem(7) 0 rgba(255, 255, 255, 0.25);
    }
  }
}
</style>
