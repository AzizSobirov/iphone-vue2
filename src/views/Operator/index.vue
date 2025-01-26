<template>
  <div class="screen">hello</div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  height: 100%;
  width: 100%;
  font-family: "Gilroy", sans-serif;
  background: var(--background);
  border-radius: var(--base-radius);
  overflow: hidden;
  --primary: #4285f4;
}

.dark .layout {
  background: linear-gradient(180deg, #121212 0%, #16191f 50%, #121212 99%);
}
</style>
