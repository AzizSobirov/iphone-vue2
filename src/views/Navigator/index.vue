<template>
  <div class="screen">
    <!-- loader -->
    <div class="loader" ref="loader">
      <div class="loader-title">
        It's a lot <br />
        easier
      </div>
      <div class="loader-title">Uber</div>
    </div>

    <!-- content -->
    hello world
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$refs.loader.style.opacity = 0; // Start fade-out
      this.$refs.loader.addEventListener("transitionend", () => {
        this.$refs.loader.style.display = "none"; // Hide after transition
      });
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  font-family: "Uber Move", sans-serif;
  background: var(--background);
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: em(16);
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  padding: em(60) em(25);
  width: 100%;
  height: 100%;
  background: var(--background);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: var(--transition-ease);

  &-title {
    font-size: em(28);
    font-weight: 500;
  }
}
</style>
