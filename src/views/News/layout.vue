<template>
  <div class="news">
    <transition name="inner-transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.news {
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
  gap: rem(20);
  --primary: #fe5053;
  --primary-light: #fe505324;
  --green: #4aad6e;
  --green-light: #4aad6e24;
  --green-dark: #358e56;
}

.dark .screen {
  background: #121212;
  --green: #50fe90;
}


</style>
