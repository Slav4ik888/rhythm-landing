import { getById } from '../utils/get-by-id.js';
import { removeNotVisible, addNotVisible } from '../utils/class-visible.js';
import { screenResizeListener } from  '../utils/screen-resize-listener.js';


// --------------------
// --  DEV-TIMELINE
// ----------------------------------------------------------------------------------

// Snoska
const
  $DevTimelineSnoskaAnchor   = getById("dev-timeline-snoska-anchor"),
  $DevTimelineSnoskaBox      = getById("dev-timeline-snoska-box"),
  $DevTimelineTitleBoxSnoska = getById("item-dev-tl-title-box-snoska");
  

$DevTimelineSnoskaAnchor.addEventListener("mouseover", () => {
  removeNotVisible($DevTimelineSnoskaBox);
});

$DevTimelineSnoskaAnchor.addEventListener("mouseout", () => {
  addNotVisible($DevTimelineSnoskaBox);
});

$DevTimelineTitleBoxSnoska.addEventListener("click", () => {
  removeNotVisible($DevTimelineSnoskaBox);
});

document.addEventListener("click", (e) => {
  if (! e.target.classList.contains('item-dev-tl-title-box-snoska')) {
    addNotVisible($DevTimelineSnoskaBox);
  }
});


// --------------------
// --  ARROWS
// ----------------------------------------------------------------------------------

const
  $DevTimelineLeft  = getById("dev-timeline-left"),
  $DevTimelineRight = getById("dev-timeline-right");

let
  dtActiveItemId = 0;

const
  dtListItems = document.querySelectorAll('.item-dev-tl'),
  dtLastIdx = dtListItems.length - 1;
  

$DevTimelineLeft.addEventListener("click", () => {
  if (dtActiveItemId === 0) {
    dtActiveItemId = dtLastIdx;
    addNotVisible(dtListItems[0]);
    removeNotVisible(dtListItems[dtLastIdx]);
  }
  else {
    dtActiveItemId  = dtActiveItemId - 1;
    removeNotVisible(dtListItems[dtActiveItemId]);
    addNotVisible(dtListItems[dtActiveItemId + 1]);
  }
});

$DevTimelineRight.addEventListener('click', function (e) {
  if (dtActiveItemId === dtLastIdx) {
    dtActiveItemId = 0;
    addNotVisible(dtListItems[dtLastIdx]);
    removeNotVisible(dtListItems[0]);
  }
  else {
    dtActiveItemId  = dtActiveItemId + 1;
    removeNotVisible(dtListItems[dtActiveItemId]);
    addNotVisible(dtListItems[dtActiveItemId - 1]);
  }
});


screenResizeListener((l) => {
  // console.log('screenResizeListener');
  if (l < 768) {
    // console.log('<<< 768');

    // Если во время листания изменили экран, то для 1й элемент делаем активным
    dtActiveItemId = 0;
    removeNotVisible(dtListItems[0]);

    // Скрываем все остальные элементы
    for (let i = dtActiveItemId + 1; i < dtListItems.length; i++)  {
      addNotVisible(dtListItems[i]);
    }
  }
  else {
    // console.log('>>> 768');
    // Открываем все элементы
    dtActiveItemId = 0;

    for (let i = dtActiveItemId; i < dtListItems.length; i++)  {
      removeNotVisible(dtListItems[i]);
    }
  }
});
