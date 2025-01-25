<template>
  <div class="layout">
    <transition name="inner-transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.layout {
  height: 100%;
  width: 100%;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
}
</style>
