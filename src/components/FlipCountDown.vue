<template>
  <flip-countdown
    :deadline="deadline"
    :showDays="showDays"
    :showHours="showHours"
    :showMinutes="showMinutes"
    :showSeconds="showSeconds"
    @timeElapsed="$emit('timeElapsed')"
  ></flip-countdown>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  name: "FlipCountDown",
  components: {
    FlipCountdown,
  },
  props: {
    deadline: {
      type: String,
      required: true,
    },
    showDays: {
      type: Boolean,
      default: true,
    },
    showHours: {
      type: Boolean,
      default: true,
    },
    showMinutes: {
      type: Boolean,
      default: true,
    },
    showSeconds: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    let slots = document.querySelectorAll(".flip-clock__slot");

    slots.forEach((slot) => {
      if (slot.textContent == "Minutes") {
        slot.textContent = "Минуты";
      } else if (slot.textContent == "Seconds") {
        slot.textContent = "Секунды";
      } else if (slot.textContent == "Hours") {
        slot.textContent = "Часы";
      } else if (slot.textContent == "Days") {
        slot.textContent = "Дни";
      }
    });
  },
};
</script>

<style lang="scss">
@use "@/assets/scss/_mixins.scss" as *;

.flip-clock {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(30);

  &::before {
    content: ":";
    position: absolute;
    top: rem(5);
    font-size: rem(24);
    font-weight: 600;
  }
}

.flip-clock__piece {
  margin: 0 !important;
  gap: rem(10) !important;
}

.flip-clock__slot {
  margin-top: rem(6);
  font-size: rem(10) !important;
  font-family: "ProximaNova", sans-serif !important;
  font-weight: 600 !important;
  text-transform: uppercase;
}

.flip-clock__card {
  font-size: rem(30) !important;
  gap: 0 !important;
}

.flip-card__top,
.flip-card__back::before {
  width: rem(50) !important;
  color: #1a1b25 !important;
  background: #fff !important;
}

.flip-card__bottom,
.flip-card__back-bottom {
  width: rem(50) !important;
  color: #1a1b25 !important;
  background: #eeeeee !important;
  border: none !important;
}
</style>
