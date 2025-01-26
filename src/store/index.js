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

const messages = [
  {
    id: 1,
    avatar: noAvatar,
    name: "Alice Johnson",
    number: "+123456789",
    date: new Date("2025-01-24"),
    text: "Hey, how are you doing?",
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
        date: new Date("2025-01-21T10:20:00"),
        text: "Yes, I'm free. What's up?",
      },
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
        date: new Date("2025-01-21T10:20:00"),
        text: "Yes, I'm free. What's up?",
      },
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
        date: new Date("2025-01-21T10:20:00"),
        text: "Yes, I'm free. What's up?",
      },
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-22T10:15:00"),
        text: "Hey, are you free?",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-22T10:20:00"),
        text: "Yes, I'm free. What's up?",
      },
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-22T10:15:00"),
        text: "Hey, are you free?",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-23T10:20:00"),
        text: "Yes, I'm free. What's up?",
      },
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-23T10:15:00"),
        text: "Hey, are you free?",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-23T10:20:00"),
        text: "Yes, I'm free. What's up?",
      },
    ],
  },
  {
    id: 2,
    avatar: noAvatar,
    name: "Bob Martin",
    number: "+987654321",
    date: new Date("2025-01-22"),
    text: "Don't forget about tomorrow's meeting!",
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-22T14:05:00"),
        text: "Can you remind me of the time?",
      },
      {
        id: 2,
        sender: 2,
        type: "text",
        date: new Date("2025-01-22T14:10:00"),
        text: "Sure, it’s at 10 AM. Don’t be late!",
      },
    ],
  },
  {
    id: 3,
    avatar: noAvatar,
    name: "Charlie Brown",
    number: "+112233445",
    date: new Date("2025-01-20"),
    text: "Thanks for the help earlier!",
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-20T09:30:00"),
        text: "You're welcome! Anytime.",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-20T09:35:00"),
        text: "I really appreciate it. Thanks again!",
      },
    ],
  },
  {
    id: 4,
    avatar: noAvatar,
    name: "Diana Prince",
    number: "+1029384756",
    date: new Date("2025-01-21"),
    text: "The photoshoot was amazing!",
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-21T18:45:00"),
        text: "It was great working with you.",
      },
      {
        id: 2,
        sender: 2,
        type: "text",
        date: new Date("2025-01-21T18:50:00"),
        text: "Same here! Let’s do it again soon.",
      },
    ],
  },
  {
    id: 5,
    avatar: noAvatar,
    name: "Edward Cullen",
    number: "+998877665",
    date: new Date("2025-01-23"),
    text: "Can you send the documents?",
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-23T08:30:00"),
        text: "Sure, I’ll email them shortly.",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-23T08:35:00"),
        text: "Thanks, much appreciated!",
      },
    ],
  },
  {
    id: 6,
    avatar: noAvatar,
    name: "Fiona Gallagher",
    number: "+667788990",
    date: new Date("2025-01-25"),
    text: "Let’s catch up this weekend.",
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-25T12:00:00"),
        text: "Sounds good! Saturday works?",
      },
      {
        id: 2,
        sender: 2,
        type: "text",
        date: new Date("2025-01-25T12:05:00"),
        text: "Perfect. See you then!",
      },
    ],
  },
  {
    id: 7,
    avatar: noAvatar,
    name: "George Smith",
    number: "+556677889",
    date: new Date("2025-01-19"),
    text: "Did you check the new design?",
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-19T16:00:00"),
        text: "Yes, it looks great!",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-19T16:10:00"),
        text: "Thanks! Let me know if there’s feedback.",
      },
    ],
  },
  {
    id: 8,
    avatar: noAvatar,
    name: "Hannah Lee",
    number: "+445566778",
    date: new Date("2025-01-18"),
    text: "Can we reschedule the meeting?",
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-18T11:20:00"),
        text: "Sure, what time works for you?",
      },
      {
        id: 2,
        sender: 2,
        type: "text",
        date: new Date("2025-01-18T11:25:00"),
        text: "How about 3 PM tomorrow?",
      },
    ],
  },
  {
    id: 9,
    avatar: noAvatar,
    name: "Ian Thomas",
    number: "+1123581321",
    date: new Date("2025-01-15"),
    text: "The files are uploaded.",
    messages: [
      {
        id: 1,
        sender: 2,
        type: "text",
        date: new Date("2025-01-15T17:50:00"),
        text: "Great! I’ll review them now.",
      },
      {
        id: 2,
        sender: 1,
        type: "text",
        date: new Date("2025-01-15T17:55:00"),
        text: "Let me know if you need edits.",
      },
    ],
  },
  {
    id: 10,
    avatar: noAvatar,
    name: "Jack Sparrow",
    number: "+142536478",
    date: new Date("2025-01-10"),
    text: "Where’s the treasure map?",
    messages: [
      {
        id: 1,
        sender: 1,
        type: "text",
        date: new Date("2025-01-10T20:10:00"),
        text: "Hidden where no one can find it.",
      },
      {
        id: 2,
        sender: 2,
        type: "text",
        date: new Date("2025-01-10T20:15:00"),
        text: "You’re a true pirate!",
      },
    ],
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
      id: 1,
      avatar: noAvatar,
      name: "John Doe",
      number: "+123456789",
    },

    wallpapers,
    ringtones,
    gallery: [...gallery, ...gallery, ...gallery, ...gallery, ...gallery],
    messages,
  },
  getters: {},
  mutations: {
    getSettings(state) {
      if (localStorage.getItem("iphone")) {
        state.device = JSON.parse(localStorage.getItem("iphone"));
        // state.device.locked = true;
        state.device.theme = "dark";
        state.device.theme = "light";
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
      saveSettings(state.device);
    },
    uploadPhoto(state, value) {
      state.gallery.push(value);
    },
    deletePhoto(state, value) {
      state.gallery = state.gallery.filter((item) => item.id !== value.id);
    },
  },
  actions: {},
});
