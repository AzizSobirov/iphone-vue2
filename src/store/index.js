import Vue from "vue";
import Vuex from "vuex";

import bg1 from "../assets/img/backgrounds/dark-1.png";
import bg2 from "../assets/img/backgrounds/light-1.png";

Vue.use(Vuex);

const backgrounds = [bg1];

export default new Vuex.Store({
  state: {
    device: {
      locked: true,
      theme: "dark",
      scale: 1.63,
      fontFamily: "SF Pro Display",
      background: bg1,
    },

    fonts: [],
    backgrounds: backgrounds,
  },
  getters: {},
  mutations: {
    toggleLock(state) {
      state.device.locked = !state.device.locked;
    },
    toggleTheme(state) {
      const theme = state.device.theme;
      state.device.theme = theme === "light" ? "dark" : "light";
      state.device.background = theme === "dark" ? bg2 : bg1;
    },
  },
  actions: {
    toggleLock({ commit }) {
      commit("toggleLock");
    },
    toggleTheme({ commit }) {
      commit("toggleTheme");
    },
  },
});
