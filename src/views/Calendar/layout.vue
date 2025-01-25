<template>
  <div class="calendar">
    <transition name="inner-transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.calendar {
  height: 100%;
  width: 100%;
  font-family: "ProximaNova", sans-serif;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
}

.screen {
  padding-top: calc(var(--safearea-top) + rem(10));
  padding-bottom: calc(var(--safearea-bottom) + rem(10));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(30);
  --primary: #fe5053;
}
</style>
