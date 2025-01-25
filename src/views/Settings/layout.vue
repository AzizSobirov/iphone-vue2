<template>
  <div class="settings">
    <transition name="inner-transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.settings {
  height: 100%;
  width: 100%;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(16);
}
</style>
