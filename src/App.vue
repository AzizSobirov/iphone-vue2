<template>
  <div id="app">
    <router-view />

    <div class="flex-col">
      <button @click="openPhone">Open Phone</button>

      <div class="flex-col" v-if="open">
        <button @click="pushNotification">send notification</button>
        <button @click="recieveCall">recieve call</button>
        <button v-if="calling" @click="endCall">end call</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["device", "open", "calling"]),
  },
  methods: {
    ...mapMutations([
      "openPhone",
      "pushNotification",
      "recieveCall",
      "endCall",
    ]),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.flex-col {
  padding: rem(20);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);
}
</style>
