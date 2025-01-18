import clickMp3 from "@/assets/sounds/click.mp3";
import unlockMp3 from "@/assets/sounds/unlock.mp3";

export const playSound = (sound = "click") => {
  const audio = new Audio();

  if (!audio) return;

  if (sound === "click") {
    audio.src = clickMp3;
    audio.play();
  } else if (sound === "unlock") {
    audio.src = unlockMp3;
    audio.play();
  }
};
