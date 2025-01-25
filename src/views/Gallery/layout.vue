<template>
  <div class="gallery">
    <transition name="inner-transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.gallery {
  height: 100%;
  width: 100%;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
}

.screen {
  padding: 0 !important;
}
</style>
