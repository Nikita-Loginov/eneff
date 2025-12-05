const pauseVideo = (video) => {
  video.pause();
};

const playVideo = (video) => {
  video.play();
};

export const initVideos = (e) => {
  const videoBox = e.target.closest('[data-block="video-box"]');

  if (!videoBox) return;


  const targetVideo = videoBox
    ? videoBox.querySelector("video")
    : null;

  if (!targetVideo) {
    console.warn("Видео не найдено для кнопки:", btn);

    return;
  }

  const action = videoBox.getAttribute("data-action");

  if (action === "play" || targetVideo.paused) {
    playVideo(targetVideo);

    videoBox.setAttribute("data-action", "pause");
  } else if (action === "pause" || !targetVideo.paused) {
    pauseVideo(targetVideo);

    videoBox.setAttribute("data-action", "play");
  }

  e.stopPropagation();
};
