import Vue from "vue";
import Vuex from "vuex";
import { playSound, stopSound } from "@/composables/useMe";

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
    src: "/img/gallery/1.jpg",
    time: "12:00",
  },
  {
    id: 2,
    src: "/img/gallery/2.jpg",
    time: "11:00",
  },
  {
    id: 3,
    src: "/img/gallery/3.jpg",
    time: "12:00",
  },
  {
    id: 4,
    src: "/img/gallery/4.jpg",
    time: "13:00",
  },
  {
    id: 1,
    src: "/img/gallery/1.jpg",
    time: "12:00",
  },
  {
    id: 2,
    src: "/img/gallery/2.jpg",
    time: "11:00",
  },
  {
    id: 3,
    src: "/img/gallery/3.jpg",
    time: "12:00",
  },
  {
    id: 4,
    src: "/img/gallery/4.jpg",
    time: "13:00",
  },
];

const contacts = [
  {
    id: 1,
    avatar: noAvatar,
    name: "Alice",
    surname: "Smith",
    number: "+1234567890",
    favourite: true,
    last_message: {
      date: new Date("2025-01-24"),
      text: "Hey, how are you doing?",
    },
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-21T10:15:00"),
        text: "Hey, are you free?",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-26T10:20:00"),
        text: "How are you?",
      },
      {
        id: 3,
        sender: 2,
        type: "location",
        location: [58.111, 26.222],
        date: new Date("2025-01-26T10:20:00"),
        text: "",
      },
    ],
  },
  {
    id: 2,
    avatar: noAvatar,
    name: "John",
    surname: "Doe",
    number: "+9876543210",
    favourite: false,
    last_message: {
      date: new Date("2025-01-22"),
      text: "Can you share the location?",
    },
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-20T15:30:00"),
        text: "What's the update?",
      },
      {
        id: 2,
        sender: 2,
        type: "location",
        location: [40.7128, -74.006],
        date: new Date("2025-01-22T12:15:00"),
        text: "",
      },
    ],
  },
  {
    id: 3,
    avatar: noAvatar,
    name: "Emma",
    surname: "Brown",
    number: "+1234432112",
    favourite: true,
    last_message: {
      date: new Date("2025-01-25"),
      text: "Thank you for the info!",
    },
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-24T08:10:00"),
        text: "Could you confirm?",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-25T09:30:00"),
        text: "Sure, noted.",
      },
      {
        id: 3,
        sender: 2,
        type: "location",
        location: [51.5074, -0.1278],
        date: new Date("2025-01-25T10:00:00"),
        text: "",
      },
    ],
  },
  {
    id: 4,
    avatar: noAvatar,
    name: "Olivia",
    surname: "Wilson",
    number: "+4445556677",
    favourite: false,
    last_message: {
      date: new Date("2025-01-26"),
      text: "Here's the location.",
    },
    messages: [
      {
        id: 1,
        sender: 2,
        type: "location",
        location: [34.0522, -118.2437],
        date: new Date("2025-01-25T18:45:00"),
        text: "",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-26T09:00:00"),
        text: "Received, thanks!",
      },
    ],
  },
  {
    id: 5,
    avatar: noAvatar,
    name: "Liam",
    surname: "Taylor",
    number: "+1122334455",
    favourite: true,
    last_message: {
      date: new Date("2025-01-23"),
      text: "Where are you now?",
    },
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-22T13:20:00"),
        text: "I'll be there soon.",
      },
      {
        id: 2,
        sender: 1,
        type: "location",
        location: [48.8566, 2.3522],
        date: new Date("2025-01-23T10:15:00"),
        text: "",
      },
    ],
  },
  {
    id: 6,
    avatar: noAvatar,
    name: "Noah",
    surname: "Anderson",
    number: "+9988776655",
    favourite: false,
    last_message: {
      date: new Date("2025-01-24"),
      text: "Can we meet at this spot?",
    },
    messages: [
      {
        id: 1,
        sender: 1,
        type: "location",
        location: [35.6895, 139.6917],
        date: new Date("2025-01-24T17:30:00"),
        text: "",
      },
      {
        id: 2,
        sender: 2,
        type: "text",
        date: new Date("2025-01-24T17:45:00"),
        text: "Got it, see you there!",
      },
    ],
  },
  {
    id: 7,
    avatar: noAvatar,
    name: "Sophia",
    surname: "Martinez",
    number: "+4433221100",
    favourite: true,
    last_message: {
      date: new Date("2025-01-26"),
      text: "Thanks for sharing.",
    },
    messages: [
      {
        id: 1,
        sender: 2,
        type: "location",
        location: [41.8781, -87.6298],
        date: new Date("2025-01-26T11:00:00"),
        text: "",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-26T11:15:00"),
        text: "No problem, anytime!",
      },
    ],
  },
  {
    id: 8,
    avatar: noAvatar,
    name: "Mia",
    surname: "Clark",
    number: "+5566778899",
    favourite: false,
    last_message: {
      date: new Date("2025-01-20"),
      text: "Are we good to go?",
    },
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-19T09:50:00"),
        text: "Yes, almost ready!",
      },
      {
        id: 2,
        sender: 2,
        type: "location",
        location: [59.3293, 18.0686],
        date: new Date("2025-01-20T08:00:00"),
        text: "",
      },
    ],
  },
  {
    id: 9,
    avatar: noAvatar,
    name: "James",
    surname: "Davis",
    number: "+6677889900",
    favourite: true,
    last_message: {
      date: new Date("2025-01-27"),
      text: "Got your location.",
    },
    messages: [
      {
        id: 1,
        sender: 2,
        type: "location",
        location: [37.7749, -122.4194],
        date: new Date("2025-01-27T12:00:00"),
        text: "",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-27T12:10:00"),
        text: "Great, see you soon.",
      },
    ],
  },
  {
    id: 10,
    avatar: noAvatar,
    name: "Isabella",
    surname: "White",
    number: "+7788990011",
    favourite: false,
    last_message: {
      date: new Date("2025-01-25"),
      text: "Let's connect there.",
    },
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-24T18:20:00"),
        text: "Where should we meet?",
      },
      {
        id: 2,
        sender: 2,
        type: "location",
        location: [60.1699, 24.9384],
        date: new Date("2025-01-25T10:00:00"),
        text: "",
      },
    ],
  },
];

const saveSettings = (device) => {
  let obj = { ...device, locked: true };
  localStorage.setItem("iphone", JSON.stringify(obj));
};

export default new Vuex.Store({
  state: {
    open: false,
    notification: null,
    calling: null,

    device: {
      mute: false,
      locked: true,
      airplane_mode: false,
      notifications: true,
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
      id: 1,
      avatar: noAvatar,
      name: "John Doe",
      number: "+123456789",
    },

    wallpapers,
    ringtones,
    gallery: [...gallery, ...gallery, ...gallery, ...gallery, ...gallery],
    contacts,
  },
  getters: {},
  mutations: {
    openPhone(state) {
      state.open = true;
    },
    getSettings(state) {
      if (localStorage.getItem("iphone")) {
        state.device = JSON.parse(localStorage.getItem("iphone"));
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
    toggleMute(state) {
      state.device.mute = !state.device.mute;
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
      saveSettings(state.device);
    },
    uploadPhoto(state, value) {
      state.gallery.push(value);
    },
    deletePhoto(state, value) {
      state.gallery = state.gallery.filter((item) => item.id !== value.id);
    },
    addFavourite(state, value) {
      state.contacts = state.contacts.map((item) =>
        item.id === value.id ? { ...item, favourite: !item.favourite } : item
      );
    },
    deleteFavourite(state, value) {
      state.contacts = state.contacts.map((item) =>
        item.id === value.id ? { ...item, favourite: !item.favourite } : item
      );
    },
    deleteContact(state, value) {
      state.contacts = state.contacts.filter((item) => item.id !== value.id);
    },
    pushNotification(state, value) {
      state.notification = value;
    },
    callPhone(state, value) {
      state.calling = {
        accepted: true,
        fullScreen: true,
      };
      playSound("ringing");
    },
    recieveCall(state, value) {
      state.calling = {
        accepted: false,
        fullScreen: state.device.locked,
      };
      playSound(null, state.device.ringtone.src);
    },
    acceptCall(state) {
      state.calling = {
        ...state.calling,
        accepted: true,
        fullScreen: true,
      };
      stopSound();
    },
    endCall(state) {
      state.calling = null;
      stopSound();
    },
    declineCall(state) {
      state.calling = null;
      stopSound();
    },
    addContact(state, value) {
      state.contacts.push(value);
    },
  },
  actions: {},
});
