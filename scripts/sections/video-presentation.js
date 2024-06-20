import { getById } from '../utils/get-by-id.js';

// ----------------------------
// --  VIDEO PRESENTATION
// ----------------------------------------------------------------------------------

const
  $VideoPresentationVideoPreview = getById("video-presentation-video-preview"),
  $VideoPresentationPlayBox      = getById("video-presentation-play-box");

$VideoPresentationVideoPreview.addEventListener("mouseover", () => {
  $VideoPresentationPlayBox.classList.add("hover");
});

$VideoPresentationVideoPreview.addEventListener("mouseout", () => {
  $VideoPresentationPlayBox.classList.remove("hover");
});
