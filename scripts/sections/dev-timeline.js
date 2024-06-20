import { getById } from '../utils/get-by-id.js';

// --------------------
// --  DEV-TIMELINE
// ----------------------------------------------------------------------------------

const
  $DevTimelineSnoskaAnchor = getById("dev-timeline-snoska-anchor"),
  $DevTimelineSnoskaBox = getById("dev-timeline-snoska-box");

$DevTimelineSnoskaAnchor.addEventListener("mouseover", () => {
  $DevTimelineSnoskaBox.classList.remove("not-visible");
});

$DevTimelineSnoskaAnchor.addEventListener("mouseout", () => {
  $DevTimelineSnoskaBox.classList.add("not-visible");
});
