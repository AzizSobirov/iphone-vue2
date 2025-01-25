import clickMp3 from "@/assets/sounds/click.mp3";
import unlockMp3 from "@/assets/sounds/unlock.mp3";
import cameraMp3 from "@/assets/sounds/camera.mp3";
import messageSentMp3 from "@/assets/sounds/message-sent.mp3";
import store from "@/store";

export const playSound = (sound = "click") => {
  const deviceState = store.state.device;

  const audio = new Audio();
  audio.volume = deviceState.volume / 100;

  if (!audio) return;

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
  }
};
