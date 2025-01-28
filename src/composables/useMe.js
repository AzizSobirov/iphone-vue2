import clickMp3 from "@/assets/sounds/click.mp3";
import unlockMp3 from "@/assets/sounds/unlock.mp3";
import cameraMp3 from "@/assets/sounds/camera.mp3";
import messageSentMp3 from "@/assets/sounds/message-sent.mp3";
import dialMp3 from "@/assets/sounds/dial.mp3";
import busyMp3 from "@/assets/sounds/busy.mp3";
import ringingMp3 from "@/assets/sounds/ringing.mp3";
import store from "@/store";

const audio = new Audio();

export const playSound = (sound = "click", src) => {
  const deviceState = store.state.device;

  audio.volume = deviceState.mute ? 0 : deviceState.volume / 100;

  if (!audio) return;

  if (sound) {
    if (sound === "click") {
      audio.src = clickMp3;
      audio.play();
    } else if (sound === "unlock") {
      audio.src = unlockMp3;
      audio.play();
    } else if (sound === "camera") {
      audio.src = cameraMp3;
      audio.play();
    } else if (sound === "message-sent") {
      audio.src = messageSentMp3;
      audio.play();
    } else if (sound === "dial") {
      audio.src = dialMp3;
      audio.play();
    } else if (sound === "busy") {
      audio.src = busyMp3;
      audio.play();
    } else if (sound === "ringing") {
      audio.src = ringingMp3;
      audio.play();
    }
  } else if (src) {
    audio.src = src;
    audio.play();
  }
};

export const stopSound = () => audio.pause();
