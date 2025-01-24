import Vue from "vue";
import Vuex from "vuex";

import noAvatar from "../assets/img/no-avatar.svg";

Vue.use(Vuex);

const wallpapers = [
  "/img/wallpapers/light-1.png",
  "/img/wallpapers/dark-1.png",
  "/img/wallpapers/1.png",
  "/img/wallpapers/2.png",
  "/img/wallpapers/3.png",
  "/img/wallpapers/4.png",
  "/img/wallpapers/5.png",
  "/img/wallpapers/6.png",
];

const ringtones = [
  {
    name: "Стандартный",
    src: "/sounds/1.ogg",
  },
  {
    name: "Michael Ringtone",
    src: "/sounds/2.ogg",
  },
  {
    name: "Izantachi - Zero Two",
    src: "/sounds/3.ogg",
  },
];

const gallery = [
  {
    id: 1,
    src: "/img/gallery/1.png",
  },
];

const saveSettings = (device) => {
  localStorage.setItem("iphone", JSON.stringify(device));
};

export default new Vuex.Store({
  state: {
    device: {
      locked: false,
      airplane_mode: false,
      notifications: false,
      screen_lock: false,
      theme: "light",
      fontSize: 16,
      fontFamily: "SF Pro Display",
      wallpaper: wallpapers[0],
      ringtone: ringtones[0],
      volume: 100,
      brightness: 100,
    },

    profile: {
      avatar: noAvatar,
      name: "John Doe",
      number: "+123456789",
    },

    wallpapers,
    ringtones,
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
    toggleNotifications(state, value) {
      state.device.notifications = value;
      saveSettings(state.device);
    },
    toggleAirplaneMode(state, value) {
      state.device.airplane_mode = value;
      saveSettings(state.device);
    },
    toggleScreenLock(state, value) {
      state.device.screen_lock = value;
      saveSettings(state.device);
    },
    setSize(state, value) {
      state.device.fontSize = parseFloat(value);
      saveSettings(state.device);
    },
    setWallpaper(state, value) {
      state.device.wallpaper = value;
      saveSettings(state.device);
    },
    setRingtone(state, value) {
      state.device.ringtone = value;
      saveSettings(state.device);
    },
    setVolume(state, value) {
      state.device.volume = parseFloat(value);
      saveSettings(state.device);
    },
    setBrightness(state, value) {
      state.device.brightness = parseFloat(value);
      saveSettings(state.device);
    },
    setTheme(state, value) {
      state.device.theme = value;
      state.device.wallpaper = value == "light" ? wallpapers[0] : wallpapers[1];
      saveSettings(state.device);
    },
  },
  actions: {},
});
