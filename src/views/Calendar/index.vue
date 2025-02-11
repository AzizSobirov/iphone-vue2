<template>
  <div class="screen" ref="screen">
    <div class="year" v-for="(year, yearIndex) in years" :key="yearIndex">
      <h1 class="year-title">{{ year }}</h1>

      <div class="months">
        <div
          v-for="(month, index) in months"
          :key="index"
          class="month"
          @click="$router.push(`/calendar/${index + 1}/${year}`)"
        >
          <h2
            class="month-name"
            :class="{ active: isCurrentMonth(year, index) }"
          >
            {{ month }}
          </h2>
          <div class="days">
            <!-- Add empty divs for days before the first day -->
            <div
              v-for="empty in emptyDays(year, index)"
              :key="'empty-' + empty"
              class="empty-day"
            ></div>

            <!-- Add actual days of the month -->
            <div
              v-for="day in daysInMonth(year, index)"
              :key="day"
              class="day"
              :class="{
                highlight: isCurrentDay(year, index, day),
                active:
                  isCurrentMonth(year, index) && isCurrentDay(year, index, day),
              }"
            >
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      months: [
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
      ],
      currentYear: new Date().getFullYear(),
      currentDate: new Date(), // Current date for comparison
    };
  },
  computed: {
    // Generate array for three years: current year and next two years
    years() {
      return [this.currentYear, this.currentYear + 1, this.currentYear + 2];
    },
  },
  methods: {
    // Get the number of days in a month for a specific year
    daysInMonth(year, month) {
      return Array.from(
        { length: new Date(year, month + 1, 0).getDate() },
        (_, i) => i + 1
      );
    },

    // Get the number of empty days before the first day of the month for a specific year
    emptyDays(year, month) {
      const firstDay = new Date(year, month, 1).getDay();
      return firstDay === 0 ? 6 : firstDay - 1;
    },

    // Check if the current month is the one in the loop
    isCurrentMonth(year, month) {
      const currentMonth = new Date().getMonth(); // 0-indexed
      const currentYear = new Date().getFullYear();
      return year === currentYear && month === currentMonth;
    },

    // Check if the current day is the one in the loop
    isCurrentDay(year, month, day) {
      return (
        year === this.currentDate.getFullYear() &&
        month === this.currentDate.getMonth() &&
        day === this.currentDate.getDate()
      );
    },

    scrollHandler() {
      const screen = this.$refs.screen;
      const months = screen.querySelectorAll(".month");

      months.forEach((month) => {
        const monthRect = month.getBoundingClientRect();
        const screenRect = screen.getBoundingClientRect();

        // Check if the month is fully visible within the screen
        if (
          monthRect.top >= screenRect.top && // Top is within the screen
          monthRect.bottom <= screenRect.bottom // Bottom is within the screen
        ) {
          month.classList.add("active");
        } else {
          month.classList.remove("active");
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

.year {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &-title {
    color: var(--primary);
    font-size: rem(24);
    line-height: 1;
  }
}

.months {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(14);
}

.month {
  width: 100%;
  transition: var(--transition-ease);
  opacity: 0.5;
  cursor: pointer;

  &.active {
    opacity: 1;
  }

  .month-name {
    font-size: rem(10);
    margin-bottom: rem(14);

    &.active {
      color: var(--primary);
    }
  }

  .days {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: rem(2);

    .day {
      min-width: rem(26);
      width: rem(26);
      height: rem(26);
      font-size: rem(8);
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      &.highlight {
        background-color: var(--primary);
        color: #fff;
      }
    }
  }
}
</style>
