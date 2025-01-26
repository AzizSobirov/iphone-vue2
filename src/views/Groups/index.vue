<template>
  <div class="screen" ref="screen">
    <div class="header">
      <div class="header__user">
        <img class="header__user-avatar" src="./img/avatar.png" alt="" />
        <div class="header__user-info">
          <div class="header__user-name">Lets</div>
          <div class="header__user-surname">Pashkovsky</div>
        </div>
        <div class="header__user-icon">
          <img src="./img/icon.png" alt="" />
        </div>
      </div>

      <div class="btn btn-create" @click="openPage('create')">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.49967 3.20825V10.7916M2.70801 6.99992H10.2913"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="bg-icons">
      <img src="./img/icon-1.png" alt="" />
      <img src="./img/icon-2.png" alt="" />
      <img src="./img/icon-2.png" alt="" />
    </div>

    <div class="search">
      <div class="users__count">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.625 11.875V10.7917C1.625 10.217 1.85327 9.66593 2.2596 9.2596C2.66593 8.85327 3.21703 8.625 3.79167 8.625H5.95833C6.53297 8.625 7.08407 8.85327 7.4904 9.2596C7.89673 9.66593 8.125 10.217 8.125 10.7917V11.875M8.66667 2.19542C9.13272 2.31475 9.54581 2.5858 9.8408 2.96584C10.1358 3.34588 10.2959 3.81329 10.2959 4.29438C10.2959 4.77547 10.1358 5.24288 9.8408 5.62292C9.54581 6.00296 9.13272 6.27401 8.66667 6.39334M11.375 11.875V10.7917C11.3722 10.3135 11.2114 9.84961 10.9174 9.4724C10.6235 9.09518 10.213 8.82581 9.75 8.70626M2.70833 4.29167C2.70833 4.8663 2.93661 5.4174 3.34294 5.82373C3.74926 6.23006 4.30036 6.45833 4.875 6.45833C5.44964 6.45833 6.00074 6.23006 6.40706 5.82373C6.81339 5.4174 7.04167 4.8663 7.04167 4.29167C7.04167 3.71703 6.81339 3.16593 6.40706 2.7596C6.00074 2.35327 5.44964 2.125 4.875 2.125C4.30036 2.125 3.74926 2.35327 3.34294 2.7596C2.93661 3.16593 2.70833 3.71703 2.70833 4.29167Z"
            stroke="#4285F4"
            stroke-width="1.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{{ participants.length }}</span>
      </div>

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

    <div class="participants">
      <div
        class="participant"
        v-for="(participant, index) in getParticipants"
        :key="index"
      >
        <div class="participant-avatar" :class="{ online: participant.online }">
          <img :src="participant.avatar" alt="" />
        </div>
        <div class="participant-info">
          <div class="participant-name">{{ participant.name }}</div>
          <div class="participant-surname">{{ participant.surname }}</div>
        </div>
        <div v-if="participant.admin" class="participant-icon">
          <img src="./img/icon.png" alt="" />
        </div>
      </div>
    </div>

    <div class="actions">
      <div class="btn btn-black">Расформировать группу</div>
    </div>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";
import avatar from "./img/avatar.png";

export default {
  name: "Groups",
  data() {
    return {
      search: "",
      participants: [
        {
          name: "Lets",
          surname: "Pashkovsky",
          avatar: avatar,
          online: true,
          admin: true,
        },
        {
          name: "Someone",
          surname: "Pashkovsky",
          avatar: avatar,
          online: true,
          admin: false,
        },
        {
          name: "LLL",
          surname: "Pashkovsky",
          avatar: avatar,
          online: false,
          admin: false,
        },
        {
          name: "Lets",
          surname: "Pashkovsky",
          avatar: avatar,
          online: true,
          admin: false,
        },
        {
          name: "Lets",
          surname: "Pashkovsky",
          avatar: avatar,
          online: false,
          admin: false,
        },
        {
          name: "Lets",
          surname: "Pashkovsky",
          avatar: avatar,
          online: true,
          admin: false,
        },
      ],
    };
  },
  computed: {
    getParticipants() {
      return this.participants.filter((participant) => {
        return (
          participant.name.toLowerCase().includes(this.search.toLowerCase()) ||
          participant.surname.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  methods: {
    openPage(path) {
      this.$router.push(`/groups/${path}`);
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  padding: rem(10) rem(5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  &__user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(8);

    &-avatar {
      width: rem(28);
      height: rem(28);
      border-radius: rem(3);
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &-name {
      font-size: rem(12);
      font-weight: 700;
    }

    &-surname {
      color: #565f6d;
      font-size: rem(10);
      font-weight: 500;
    }

    &-icon {
      width: rem(14);
      height: rem(14);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .btn-create {
    width: rem(24);
    height: rem(24);
    box-shadow: 0 rem(15) rem(22) 0 rgba(66, 133, 244, 0.55);
    background: var(--primary);
    border-radius: rem(5);

    &:hover {
      background: #649fff;
    }

    svg {
      width: rem(14);
      height: rem(14);
    }
  }
}

.bg-icons {
  img {
    position: absolute;
    pointer-events: none;
    object-fit: contain;

    &:nth-child(1) {
      top: rem(100);
      left: 0;
      transform: translate(-45%, 0);
      width: rem(30);
      height: rem(40);
    }

    &:nth-child(2) {
      top: rem(50);
      right: 0;
      transform: translate(45%, 0);
      width: rem(40);
      height: rem(50);
    }

    &:nth-child(3) {
      bottom: rem(60);
      right: 0;
      transform: translate(25%, 0) rotate(-5deg);
      width: rem(50);
      height: rem(60);
    }
  }
}

.search {
  margin-top: rem(20);
  padding: 0 rem(5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  .users__count {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(6);

    svg {
      width: rem(14);
      height: rem(14);
    }

    span {
      font-size: rem(12);
    }
  }

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

.participants {
  margin-top: rem(20);
  padding: 0 rem(5);
  width: 100%;
  height: rem(300);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(12);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
}

.participant {
  padding: rem(6);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(12);

  &-avatar {
    position: relative;
    width: rem(32);
    height: rem(32);
    border-radius: rem(3);
    object-fit: cover;

    &.online {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
        width: rem(5);
        height: rem(5);
        background: #49cf6d;
        border: rem(1.5) solid var(--background);
        border-radius: 50%;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &-name {
    font-size: rem(12);
    font-weight: 700;
  }

  &-surname {
    color: #565f6d;
    font-size: rem(10);
    font-weight: 500;
  }

  &-icon {
    margin-left: auto;
    width: rem(14);
    height: rem(14);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.actions {
  margin-top: rem(18);
  padding: 0 rem(5);
}

.btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-ease), color var(--transition-ease);
  cursor: pointer;

  &-black {
    width: 100%;
    height: rem(43);
    color: #5f6776;
    font-size: rem(12);
    font-weight: 500;
    background: #c6cad2;
    border-radius: rem(8);

    &:hover {
      color: #fff;
      background: #22252c !important;
    }
  }
}

.dark .btn {
  &-black {
    background: #1a1d22;
  }
}
</style>
