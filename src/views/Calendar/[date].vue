<template>
  <div class="screen">
    <div class="header">
      <router-link to="/calendar" class="btn-back">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="#FE5053"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <div class="month-title">{{ monthName }}</div>
    </div>

    <div class="calendar-grid">
      <div
        class="day-label"
        v-for="(day, index) in daysOfWeek"
        :key="index"
        :class="{ active: isActiveDay(index) }"
      >
        {{ day }}
      </div>
      <div
        v-for="n in emptyDays"
        :key="`empty-${n}`"
        class="day-cell empty"
      ></div>
      <div
        class="day-cell"
        v-for="(day, index) in daysInMonth"
        :key="`day-${index}`"
        :class="{ today: isToday(day) }"
      >
        {{ day }}
      </div>
    </div>

    <p class="no-events">Нет событий</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysOfWeek: ["П", "В", "С", "Ч", "П", "С", "В"],
      currentDate: {
        day: new Date().getDate(),
        month: parseInt(this.$route.params.month),
        year: parseInt(this.$route.params.year),
      },
    };
  },
  computed: {
    monthName() {
      const monthNames = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      return monthNames[this.currentDate.month - 1];
    },
    daysInMonth() {
      const date = new Date(this.currentDate.year, this.currentDate.month, 0);
      const days = Array.from({ length: date.getDate() }, (_, i) => i + 1);
      return days;
    },
    emptyDays() {
      const firstDayOfMonth = new Date(
        this.currentDate.year,
        this.currentDate.month - 1,
        1
      ).getDay();
      return firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    },
  },
  methods: {
    isToday(day) {
      const today = new Date();
      return (
        day === this.currentDate.day &&
        this.currentDate.month === today.getMonth() + 1 &&
        this.currentDate.year === today.getFullYear()
      );
    },
    isActiveDay(index) {
      const today = new Date();

      // Adjust JavaScript's getDay() (Sunday = 0) to align with your week starting on Monday
      const adjustedDay = (today.getDay() + 6) % 7; // Monday = 0, Sunday = 6

      return (
        adjustedDay === index &&
        this.currentDate.month === today.getMonth() + 1 &&
        this.currentDate.year === today.getFullYear()
      );
    },
    validateRouteParams() {
      const { month, year } = this.$route.params;
      if (!month || !year || isNaN(month) || isNaN(year)) {
        this.$router.push("/calendar");
      }
    },
  },
  created() {
    this.validateRouteParams();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  gap: rem(20);
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(10);

  .btn-back {
    width: rem(8);
    height: rem(14);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .month-title {
    font-size: rem(21);
    font-weight: 700;
    line-height: 1;
  }
}

.calendar-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: rem(10);

  .day-label {
    font-size: rem(10);
    font-weight: 400;
    text-align: center;
    opacity: 0.6;

    &.active {
      font-weight: 600;
      opacity: 1;
    }
  }

  .day-cell {
    text-align: center;
    font-size: rem(12);
    padding: rem(5);
    border-radius: 50%;

    &.today {
      color: white;
      background-color: var(--primary);
      font-weight: 600;
    }

    &.empty {
      background: none;
    }
  }
}

.no-events {
  margin-top: rem(80);
  width: 100%;
  color: #6f6f6f;
  font-size: rem(16);
  font-weight: 700;
  text-align: center;
}
</style>
