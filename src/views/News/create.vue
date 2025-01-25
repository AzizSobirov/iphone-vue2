<template>
  <div class="screen" ref="screen">
    <div class="header">
      <img class="header-icon" src="./img/app-icon.svg" alt="" />
      <div class="header-title">Подать объявление</div>
    </div>

    <form class="form" @submit.prevent="createAnnouncement">
      <div class="form-group">
        <select v-model="annoncement.author.category" required>
          <option selected disabled value="">Выберите категорию</option>
          <option value="Автомобиль">Автомобиль</option>
          <option value="Недвижимость">Недвижимость</option>
          <option value="Работа">Работа</option>
          <option value="Другое">Другое</option>
        </select>

        <textarea
          v-model="annoncement.desc"
          placeholder="Введите текст"
          required
        ></textarea>
      </div>

      <div class="form-price">
        <span>Стоимость объявления </span>
        <span>25,000$</span>
      </div>

      <div class="form__preview">
        <div class="form__preview-title">Демонстрация вашего объявления</div>

        <div class="item">
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
                {{ annoncement.author.name }}
              </div>
            </div>

            <div class="author-category">{{ annoncement.author.category }}</div>
          </div>

          <div class="announcement">
            <p class="announcement-desc">
              {{ annoncement.desc }}
            </p>

            <div class="announcement-actions">
              <div class="btn btn-call">Позвонить</div>
              <div class="btn btn-write">Написать</div>
            </div>
          </div>
        </div>
      </div>

      <div class="form__actions">
        <button
          class="btn btn-back"
          type="reset"
          @click="$router.push('/news')"
        >
          Назад
        </button>
        <button class="btn btn-submit" type="submit">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewsCreate",
  data() {
    return {
      annoncement: {
        id: 0,
        author: {
          id: 0,
          name: "Source Insensitive",
          category: "",
        },
        desc: "",
      },
    };
  },
  methods: {
    createAnnouncement() {
      this.$router.push("/news");
    },
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

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(18);

  &-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);
  }

  select,
  textarea {
    padding: rem(14);
    width: 100%;
    color: #474747;
    font-size: rem(10);
    font-family: "Gilroy", sans-serif;
    background: var(--foreground-light);
    border: 1px solid #1a1a1a33;
    border-radius: rem(8);
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-indent: 1px;
    text-overflow: "";

    option {
      color: #000;
    }
  }

  textarea {
    min-height: rem(100);

    &::placeholder {
      color: inherit;
    }
  }

  &-price {
    width: 100%;
    font-size: rem(10);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(10);

    span:first-child {
      color: #3e3e3e;
    }
  }
}

.dark .form {
  select,
  textarea {
    color: #5b5b5b;
    background: #181818;
    border: none;
  }

  select option {
    color: #fff;
  }
}

.form__preview {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(10);

  &-title {
    font-size: rem(10);
    font-weight: 500;
  }
}

.form__actions {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(10);

  .btn {
    height: rem(38);
    font-size: rem(10);
    font-weight: 600;
    font-family: "Gilroy", sans-serif;
    line-height: 1;
    border-radius: rem(8);
    transition: background var(--transition-ease);
    cursor: pointer;

    &-back {
      color: #7f7f7f;
      background: rgba(24, 24, 24, 0.13);

      &:hover {
        color: #fff;
        background: #2d2d2d;
      }
    }

    &-submit {
      color: #fff;
      background: var(--primary);
      box-shadow: 0 0 rem(45) 0 rgba(254, 80, 83, 0.35);

      &:hover {
        background: #ff6f71;
      }
    }
  }
}

.dark .form__actions {
  .btn {
    &-back {
      background: #181818;

      &:hover {
        color: #fff;
        background: #2d2d2d;
      }
    }
  }
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(8);
  transition: var(--transition-ease);
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
    height: rem(24);
    color: #fff;
    font-size: rem(9);
    font-weight: 500;
    line-height: 1;
    border-radius: rem(5);
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
</style>
