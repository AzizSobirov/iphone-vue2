<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="$emit('change', $event)"
    />
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.checkbox {
  position: relative;

  input {
    display: none;
  }

  span {
    width: em(12);
    height: em(12);
    border-radius: 9999px;
    border: em(1.5) solid #00000020;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-ease);
  }

  input:checked + span {
    background: var(--primary);
    border-color: var(--primary);
  }

  input:checked + span::after {
    content: "";
    position: absolute;
    margin-top: em(1);
    width: em(7);
    height: em(7);
    background: url('data:image/svg+xml,<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 3L2.5 5L6.5 1" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" /></svg>')
      center/contain no-repeat;
  }
}
</style>
