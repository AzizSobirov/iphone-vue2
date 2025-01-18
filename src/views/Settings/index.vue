<template>
  <div class="screen">
    <div class="title">Настройки</div>

    <div class="phone-size">
      РАЗМЕР ТЕЛЕФОНА

      <input
        type="range"
        id="font-range"
        min="1"
        max="100"
        :value="scaledValue"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["status", "device"]),

    scaledValue() {
      return ((this.device.scale - 2) / (2.8 - 2)) * 100;
    },
  },
  methods: {},
  mounted() {
    const iphone = document.querySelector(".iphone");

    const fontRange = document.getElementById("font-range");

    // Update the CSS custom property dynamically within the range
    fontRange.addEventListener("input", (event) => {
      let min = 2; // vh
      let max = 2.8; // vh

      // Calculate the new font size within the range [1, 3]
      let value =
        min +
        ((max - min) * (event.target.value - fontRange.min)) /
          (fontRange.max - fontRange.min);

      iphone.style.fontSize = `${value}vh`;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.screen {
  background: var(--background);
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: em(10);
}

.title {
  margin-top: em(18);
  font-size: em(20);
  font-weight: 700;
}

.phone-size {
  margin-top: auto;
  margin-bottom: em(8);
  font-size: em(10);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: em(5);
}
</style>
