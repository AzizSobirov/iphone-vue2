<template>
  <div ref="slider" class="slider">
    <!-- <input
      type="range"
      id="font-range"
      min="1.5"
      max="2.25"
      step="0.01"
      :value="device.scale"
      @input="changeScale"
    /> -->
  </div>
</template>

<script>
export default {
  name: "NoUiSlider",
  props: {
    start: {
      type: Array,
      default: () => [20, 80],
    },
    range: {
      type: Object,
      default: () => ({
        min: 0,
        max: 100,
      }),
    },
    step: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
}
</style>
