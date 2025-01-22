import Vue from "vue";
import Vuex from "vuex";

import bg1 from "../assets/img/wallpapers/dark-1.png";
import bg2 from "../assets/img/wallpapers/light-1.png";
import noAvatar from "../assets/img/no-avatar.svg";

Vue.use(Vuex);

const wallpapers = [bg1];

export default new Vuex.Store({
  state: {
    device: {
      locked: false,
      theme: "light",
      scale: 1.63, // vh
      fontFamily: "SF Pro Display",
      wallpaper: bg1,
    },
    profile: {
      avatar: noAvatar,
      name: "John Doe",
      number: "+123456789",
    },

    fonts: [],
    wallpapers: wallpapers,
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
      state.device.wallpaper = value ? bg2 : bg1;
      localStorage.setItem("iphone", JSON.stringify(state.device));
    },
    changeScale(state, value) {
      state.device.scale = parseFloat(value);
      localStorage.setItem("iphone", JSON.stringify(state.device));
    },
  },
  actions: {},
});
