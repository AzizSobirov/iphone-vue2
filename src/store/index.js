import Vue from "vue";
import Vuex from "vuex";

import bg1 from "../assets/img/backgrounds/dark-1.png";
import bg2 from "../assets/img/backgrounds/light-1.png";
import noAvatar from "../assets/img/no-avatar.svg";

Vue.use(Vuex);

const backgrounds = [bg1];

export default new Vuex.Store({
  state: {
    device: {
      locked: false,
      theme: "light",
      scale: 1.63, // vh
      fontFamily: "SF Pro Display",
      background: bg1,
    },
    profile: {
      avatar: noAvatar,
      name: "John Doe",
      number: "+123456789",
    },

    fonts: [],
    backgrounds: backgrounds,
  },
  getters: {},
  mutations: {
    getSettings(state) {
      if (localStorage.getItem("iphone")) {
        state.device = JSON.parse(localStorage.getItem("iphone"));
        // state.device.locked = true;
      }
    },
    toggleLock(state) {
      state.device.locked = false;
    },
    toggleTheme(state, value) {
      state.device.theme = value ? "light" : "dark";
      state.device.background = value ? bg1 : bg2;
      localStorage.setItem("iphone", JSON.stringify(state.device));
    },
    changeScale(state, input) {
      state.device.scale = input.target.value;
      localStorage.setItem("iphone", JSON.stringify(state.device));
    },
  },
  actions: {},
});
