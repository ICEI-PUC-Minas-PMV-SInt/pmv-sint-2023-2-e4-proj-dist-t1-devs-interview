import { appEmitter, EventTypes } from "@/config/events";

const ShareHandler = () => {
  appEmitter.addListener(EventTypes.SHARE_APP, () => {
    if (navigator.share) {
      navigator.share({
        title: "Roadmap Frontend Interview",
        text: "Veja o Roadmap Frontend Interview, aproveite quizzes sobre a área de frontend e compartilhe com seus amigos!",
        url: "https://rfendinterview.netlify.app/",
      });
    }
  });
  return null;
};

export default ShareHandler;
