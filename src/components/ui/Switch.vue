<template>
  <label class="switch">
    <input type="checkbox" :checked="checked" @change="change" />
    <span class="knob"></span>
  </label>
</template>

<script>
import { playSound } from "@/composables/useMe";

export default {
  name: "TheSwitch",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change($event) {
      if (this.disabled) return;
      this.$emit("change", $event.target.checked);
      playSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.switch {
  position: relative;
  width: rem(21);
  height: rem(12);
  cursor: pointer;

  input[type="checkbox"] {
    display: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input:checked + .knob {
    background-color: #2ad05e;
  }

  input:checked + .knob:before {
    left: rem(10);
    // box-shadow: rem(-2) 0 rem(4) 0 rgba(0, 0, 0, 0.25);
  }

  .knob {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4d4d4d20;
    border-radius: 9999px;
    transition: all 0.2s ease-in-out;
  }

  .knob:before {
    position: absolute;
    content: "";
    left: rem(1);
    top: 50%;
    transform: translateY(-50%);
    width: rem(10);
    height: rem(10);
    background-color: #fff;
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
}

.dark .switch {
  .knob {
    background-color: #4d4d4d;
  }

  .knob::before {
    background-color: #d9d9d9;
  }
}
</style>
