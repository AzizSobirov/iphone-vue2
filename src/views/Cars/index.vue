<template>
  <div class="screen">
    <div class="header">
      <div class="header__user">
        <img class="header__user-avatar" src="./img/avatar.png" alt="" />
        <div class="header__user-info">
          <div class="header__user-name">Source</div>
          <div class="header__user-surname">Insensitive</div>
        </div>
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
              select.value = option.value;
              select.active = false;
              playSound();
            }
          "
        >
          <div class="icon" v-html="option.icon"></div>
          <div class="select__option-value">{{ option.value }}</div>
        </div>
      </div>
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
          <g clip-path="url(#clip0_70_9433)">
            <path
              d="M11.4658 1.76186C11.4124 1.6019 11.3058 1.46225 11.1687 1.36576C11.029 1.26928 10.8615 1.2185 10.6913 1.22104H2.3099C2.13978 1.2185 1.9722 1.26928 1.83255 1.36576C1.6929 1.46225 1.5888 1.6019 1.53548 1.76186L-0.000650694 6.38549V12.2355C-0.0108069 12.5249 0.217709 12.7687 0.507162 12.7763H0.542709H0.903255C1.19271 12.7865 1.43646 12.558 1.44408 12.2685C1.44408 12.2583 1.44408 12.2456 1.44408 12.2355V11.2605H11.5546V12.2355C11.5546 12.3929 11.6029 12.5224 11.6993 12.624C11.7958 12.7255 11.9228 12.7763 12.0777 12.7763H12.456C12.7454 12.7865 12.9892 12.558 12.9968 12.2685C12.9968 12.2583 12.9968 12.2456 12.9968 12.2355V6.38549L11.4658 1.76186ZM3.69115 8.98549C3.50579 9.17846 3.2722 9.27494 2.99544 9.27494C2.73138 9.28002 2.47494 9.17846 2.28197 8.99565C2.08646 8.81791 1.97728 8.56401 1.9849 8.29994C1.98743 7.74389 2.43939 7.29194 2.99544 7.2894C3.25951 7.28432 3.51341 7.3935 3.69115 7.58647C3.87396 7.7769 3.97552 8.03334 3.97044 8.29994C3.97298 8.55639 3.87396 8.80522 3.69115 8.98549ZM10.7345 8.98549C10.5466 9.17338 10.2876 9.27748 10.021 9.27494C9.76458 9.27748 9.51829 9.17846 9.33548 8.99565C9.14251 8.8103 9.04603 8.5767 9.04603 8.29994C9.04095 8.03588 9.14251 7.77944 9.32533 7.58647C9.50306 7.39096 9.75697 7.28178 10.021 7.2894C10.5771 7.29194 11.029 7.74389 11.0316 8.29994C11.0316 8.56401 10.9326 8.79506 10.7345 8.98549ZM1.4974 5.30131L2.49017 2.30522H10.506L11.5013 5.30131H1.4974Z"
              fill="#3371FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_70_9433">
              <rect
                width="13"
                height="13"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>{{ cars.length }}</span>
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

    <div class="cars">
      <div
        class="car"
        v-for="car in getCars"
        :key="car.id"
        :class="{ active: car.id == selectedCar }"
        @click="
          () => {
            selectedCar = car.id;
            playSound();
          }
        "
      >
        <div class="car__info">
          <div class="car__name">{{ car.name }}</div>
          <div class="car__group">
            <img class="car__brand" :src="car.brand" alt="" />
            <div class="car__number">{{ car.number }}</div>
          </div>
        </div>

        <img class="car__img" :src="car.image" alt="" />
      </div>
    </div>

    <div class="btn btn-primary">Доставить на парковку</div>
  </div>
</template>

<script>
import { playSound } from "@/composables/useMe";
import carImg from "./img/car.png";
import brandImg from "./img/brand.png";

export default {
  name: "Cars",
  data() {
    return {
      search: "",
      select: {
        active: false,
        value: "Мои личные автомобили",
        options: [
          {
            value: "Весь транспорт",
            icon: '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_70_10338)" fill="#fff"><path d="M1.074 6.273h2.578c.593 0 1.075.482 1.075 1.075v2.578c0 .593-.482 1.074-1.075 1.074H1.074A1.075 1.075 0 010 9.926V7.348c0-.593.481-1.075 1.074-1.075zM7.348 0h2.578C10.519 0 11 .481 11 1.074v2.578c0 .593-.481 1.075-1.074 1.075H7.348a1.075 1.075 0 01-1.075-1.075V1.074C6.273.481 6.755 0 7.348 0zM1.074 0h2.578c.593 0 1.075.481 1.075 1.074v2.578c0 .593-.482 1.075-1.075 1.075H1.074A1.075 1.075 0 010 3.652V1.074C0 .481.481 0 1.074 0zM7.348 6.273h2.578c.593 0 1.074.482 1.074 1.075v2.578C11 10.519 10.519 11 9.926 11H7.348a1.075 1.075 0 01-1.075-1.074V7.348c0-.593.482-1.075 1.075-1.075z"/></g><defs><clipPath id="prefix__clip0_70_10338"><path fill="#fff" d="M0 0h11v11H0z"/></clipPath></defs></svg>',
          },
          {
            value: "Личный транспорт",
            icon: '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_70_9544)"><path d="M10.585 1.165a.736.736 0 00-.715-.5H2.133a.757.757 0 00-.44.134.722.722 0 00-.275.366L0 5.433v5.4a.483.483 0 00.47.499h.365a.483.483 0 00.499-.469v-.93h9.333v.9a.5.5 0 00.133.358c.09.094.207.141.35.141h.349a.483.483 0 00.499-.469V5.433l-1.413-4.268zM3.408 7.833a.856.856 0 01-.642.267.934.934 0 01-.659-.258.836.836 0 01-.274-.642.938.938 0 01.933-.933.852.852 0 01.642.274.926.926 0 01.258.659.876.876 0 01-.258.633zm6.502 0a.92.92 0 01-.659.267.88.88 0 01-.633-.258.856.856 0 01-.267-.642.934.934 0 01.258-.659.836.836 0 01.642-.274c.513.003.93.42.933.933a.85.85 0 01-.274.633zM1.383 4.432L2.3 1.666h7.399l.918 2.766H1.383z" fill="#fff"/></g><defs><clipPath id="prefix__clip0_70_9544"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>',
          },
          {
            value: "Арендованный транспорт",
            icon: '<svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_2162_300)" fill="#fff"><path d="M10.17 7.164L9.019 4.61a.949.949 0 00-.866-.558H3.836c-.37 0-.71.218-.864.558L1.82 7.164a.95.95 0 00-.942.949v1.409c0 .167.074.327.205.438.826.693 2.87 1.04 4.911 1.04 2.044 0 4.086-.347 4.913-1.04.13-.11.206-.27.206-.438v-1.41a.95.95 0 00-.942-.948zM3.095 9.73a.854.854 0 11.853-.853c0 .47-.382.853-.853.853zm3.637-.193H5.26a.182.182 0 010-.364h1.47c.1 0 .182.082.182.182a.181.181 0 01-.181.182zm0-.958H5.26a.182.182 0 010-.364h1.47c.1 0 .182.082.182.182a.181.181 0 01-.181.182zm2.163 1.15a.854.854 0 010-1.705.853.853 0 010 1.706zM2.218 7.165L3.303 4.76a.585.585 0 01.533-.344h4.316c.23 0 .439.135.533.344l1.086 2.404H2.218z"/><path d="M3.094 9.367a.49.49 0 100-.978.49.49 0 000 .978zM8.894 8.39a.489.489 0 10.003.977.489.489 0 00-.003-.978zM8.743 11.575c0 .205.167.372.373.372h1.149a.374.374 0 00.374-.372v-1.013c-.509.26-1.174.449-1.896.576v.437zM1.35 11.575c0 .205.168.372.375.372h1.15a.373.373 0 00.372-.372v-.437c-.722-.127-1.387-.316-1.896-.576v1.013zM1.956 5.978h-.67a.757.757 0 00-.756.757v.42c0 .125.062.236.158.303.188-.322.508-.56.886-.634l.382-.846zM10.714 5.978h-.68l.382.846c.38.076.704.316.89.642a.374.374 0 00.165-.311v-.42a.757.757 0 00-.757-.757zM5.422 5.06a.182.182 0 00-.257-.015l-1.289 1.15a.182.182 0 00.242.271l1.29-1.15a.182.182 0 00.014-.256zM6.291 5.428l-.86.766a.182.182 0 00.243.272l.86-.766a.182.182 0 00-.243-.272zM3.928 3.507c.953 0 1.728-.774 1.728-1.727a1.729 1.729 0 00-3.455 0c0 .953.775 1.727 1.727 1.727zM3.16 1.684c0-.102.082-.182.182-.182.1 0 .182.08.182.182v.192a.182.182 0 01-.364 0v-.192zM6.914 2.58c.033 0 .065-.01.093-.025l.43-.255.431.255c.059.032.13.032.186 0l.43-.255.434.255a.181.181 0 00.227-.035l.607-.664a.177.177 0 00.047-.141.186.186 0 00-.074-.13l-.802-.572A.185.185 0 008.818.98H5.859c.104.245.16.516.16.8 0 .284-.056.555-.16.8h1.055z"/></g><defs><clipPath id="prefix__clip0_2162_300"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>',
          },
          {
            value: "Доступ с ключа",
            icon: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_70_10362)" fill="#fff"><path d="M1.053 5.965H.175A.175.175 0 000 6.14v3.684c0 .097.079.176.175.176h.878a.175.175 0 00.175-.176V6.14a.175.175 0 00-.175-.175zM9.755 7.214a.307.307 0 00-.334-.097L6.176 8.2a.863.863 0 01-.28.046H4.338c-.277 0-.548.082-.779.235l-.127.086a.176.176 0 01-.195-.292l.128-.086c.288-.192.627-.294.973-.294h1.067a.458.458 0 00.026-.51.172.172 0 01-.014-.029.724.724 0 00-.603-.339h-.918c-.403 0-.795-.137-1.11-.389a1.43 1.43 0 00-.89-.312h-.316v3.508h4.263c.193 0 .383-.053.548-.153L9.677 7.67a.303.303 0 00.078-.455zM8.772.877H7.719a.175.175 0 000 .351h1.053a.175.175 0 100-.35z"/><path d="M9.298 0H7.193a.702.702 0 00-.68.877H5.79a.877.877 0 00-.877.877v.074a.516.516 0 00-.196.123l-.702.702a.529.529 0 00-.155.372v2.589c0 .29.236.526.527.526h1.403c.29 0 .527-.235.527-.526v-2.59a.529.529 0 00-.155-.371L5.46 1.95a.516.516 0 00-.196-.123v-.074c0-.29.236-.525.526-.526h.846l.454 1.286a.7.7 0 00.662.468h.99a.7.7 0 00.66-.468L9.96.935A.702.702 0 009.298 0zM5.614 4.21v1.053a.175.175 0 01-.176.176h-.701a.175.175 0 01-.176-.176V4.211c0-.097.079-.176.176-.176h.701c.097 0 .176.079.176.176zm-.176-1.228a.35.35 0 11-.701.002.35.35 0 01.701-.002zM8.772 1.58H7.719a.526.526 0 010-1.053h1.053a.526.526 0 010 1.053z"/><path d="M8.648 4.334l.073-.072a.175.175 0 00.051-.124v-.805H7.72v.805c0 .046.018.091.051.124l.073.072a.175.175 0 01.051.125v.763a.174.174 0 01-.018.078l-.118.236a.175.175 0 000 .156l.104.208c.02.042.024.09.01.134l-.118.354a.175.175 0 00.042.18l.326.325c.068.069.18.069.248 0l.326-.325a.175.175 0 00.042-.18l-.118-.354a.175.175 0 01.01-.134l.103-.208a.175.175 0 000-.156L8.616 5.3a.174.174 0 01-.02-.078v-.763c0-.047.02-.092.052-.125z"/></g><defs><clipPath id="prefix__clip0_70_10362"><path fill="#fff" d="M0 0h10v10H0z"/></clipPath></defs></svg>',
          },
          {
            value: "Семейный транспорт",
            icon: '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_70_10371)" fill="#fff"><path d="M2.566 3.429c.945 0 1.715-.77 1.715-1.715C4.28.77 3.51 0 2.566 0 1.621 0 .852.77.852 1.714c0 .946.769 1.715 1.714 1.715zM5.5 8a2.05 2.05 0 00-2.048 2.049v.629c0 .178.144.322.322.322h3.452a.322.322 0 00.322-.322v-.629A2.05 2.05 0 005.5 8.001z"/><path d="M2.807 10.049c0-1.053.608-1.967 1.491-2.41a2.186 2.186 0 01-.47-3.233 2.55 2.55 0 00-1.262-.333A2.569 2.569 0 000 6.64v4.039c0 .178.144.322.322.322h2.54a.963.963 0 01-.055-.322v-.63z"/><path d="M5.5 7.356c.85 0 1.542-.692 1.542-1.542 0-.85-.692-1.542-1.542-1.542-.85 0-1.542.692-1.542 1.542 0 .85.692 1.542 1.542 1.542zM8.434 3.429c.946 0 1.715-.77 1.715-1.715C10.149.77 9.379 0 8.434 0 7.49 0 6.72.77 6.72 1.714c0 .946.769 1.715 1.714 1.715z"/><path d="M8.434 4.073c-.458 0-.89.122-1.263.333a2.186 2.186 0 01-.47 3.233 2.695 2.695 0 011.492 2.41v.629c0 .113-.02.221-.056.322h2.54a.322.322 0 00.323-.322V6.639a2.569 2.569 0 00-2.566-2.566z"/></g><defs><clipPath id="prefix__clip0_70_10371"><rect width="11" height="11" rx="2" fill="#fff"/></clipPath></defs></svg>',
          },
          {
            value: "Грузоперевозки",
            icon: '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_70_10379)" fill="#fff"><path d="M3.5 8.242a1 1 0 11-2 0 1 1 0 012 0zM7.964 1.864a.249.249 0 00-.214-.122H6v2h3.092L7.964 1.864z"/><path d="M10.83 4.755l-1.438-.513H5.75a.25.25 0 01-.25-.25v-2.25H.25a.25.25 0 00-.25.25v6c0 .138.112.25.25.25H1a1.5 1.5 0 113 0h3a1.5 1.5 0 113 0h.75a.25.25 0 00.25-.25v-3a.25.25 0 00-.17-.237z"/><path d="M9.5 8.242a1 1 0 11-2 0 1 1 0 012 0z"/></g><defs><clipPath id="prefix__clip0_70_10379"><path fill="#fff" d="M0 0h11v11H0z"/></clipPath></defs></svg>',
          },
        ],
      },
      cars: [
        {
          id: 1,
          name: "[RL] Grotti P40",
          number: "7UPR076",
          brand: brandImg,
          image: carImg,
        },
        {
          id: 2,
          name: "Something",
          number: "7UPR076",
          brand: brandImg,
          image: carImg,
        },
        {
          id: 3,

          name: "Audi",
          number: "7UPR076",
          brand: brandImg,
          image: carImg,
        },
        {
          id: 4,

          name: "Lamborghini",
          number: "7UPR076",
          brand: brandImg,
          image: carImg,
        },
        {
          id: 5,

          name: "[RL] Grotti P40",
          number: "7UPR076",
          brand: brandImg,
          image: carImg,
        },
        {
          id: 6,

          name: "[RL] Grotti P40",
          number: "7UPR076",
          brand: brandImg,
          image: carImg,
        },
      ],
      selectedCar: null,
    };
  },
  computed: {
    getCars() {
      return this.cars.filter((car) =>
        car.name.toLowerCase().includes(this.search.toLowerCase())
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
  padding-bottom: calc(var(--safearea-bottom) + rem(15));
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
  padding: rem(10) 0;
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
      font-weight: 600;
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

.cars {
  padding-bottom: rem(5);
  height: rem(300);
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

.car {
  padding: rem(6) rem(8) rem(6) rem(14);
  width: 100%;
  background: var(--foreground-light);
  border: rem(1.5) solid var(--foreground-light);
  border-radius: rem(6);
  transition: background var(--transition-ease), color var(--transition-ease),
    border var(--transition-ease);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(5);
  cursor: pointer;

  &.active {
    color: #fff;
    background: #3371ff;
    border-color: #3371ff;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);
  }

  &__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(4);
  }

  &__img {
    width: rem(80);
    height: rem(45);
    object-fit: contain;
  }

  &__name {
    font-size: rem(10);
    font-weight: 700;
  }

  &__number {
    font-size: rem(10);
    font-weight: 500;
  }

  &__brand {
    width: rem(28);
    height: rem(12);
    object-fit: contain;
  }
}

.btn {
  position: relative;
  width: 100%;
  height: rem(43);
  font-size: rem(12);
  font-weight: 500;
  border-radius: rem(8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(10);
  transition: background var(--transition-ease), color var(--transition-ease);
  cursor: pointer;

  &-primary {
    margin-top: auto;
    color: #fff;
    background: #3371ff;
    box-shadow: 0 0 45px 0 rgba(51, 113, 255, 0.55);

    &:hover {
      background: rgb(110, 164, 252) !important;
    }
  }
}
</style>
