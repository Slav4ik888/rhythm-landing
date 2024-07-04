import { getById } from '../utils/get-by-id.js';
import { screenResizeListener } from  '../utils/screen-resize-listener.js';


// --------------------
// --  USE-FOR-BUSINESS
// ----------------------------------------------------------------------------------

const
  $UsefullForBusinessLeft  = getById("usefull-for-business-left"),
  $UsefullForBusinessRight = getById("usefull-for-business-right");

let
  screenWidth  =  window.outerWidth,
  activeItemId = 0;

const
  listItems = document.querySelectorAll('.list-ufb-item'),
  lastIdx =  listItems.length -  1;

screenResizeListener((l) => {
  if (screenWidth < 768) {
    screenWidth = l;
    for (let i = activeItemId + 1; i < listItems.length; i++)  {
      listItems[i].classList.add('not-visible');
    }
  }
});


$UsefullForBusinessLeft.addEventListener("click", () => {
  if (activeItemId === 0) {
    activeItemId = lastIdx;
    listItems[0].classList.add('not-visible');
    listItems[lastIdx].classList.remove('not-visible');
  }
  else {
    activeItemId  = activeItemId - 1;
    listItems[activeItemId].classList.remove('not-visible');
    listItems[activeItemId + 1].classList.add('not-visible');
  }
});

$UsefullForBusinessRight.addEventListener('click', function (e) {
  if (activeItemId === lastIdx) {
    activeItemId = 0;
    listItems[lastIdx].classList.add('not-visible');
    listItems[0].classList.remove('not-visible');
  }
  else {
    activeItemId  = activeItemId + 1;
    listItems[activeItemId].classList.remove('not-visible');
    listItems[activeItemId - 1].classList.add('not-visible');
  }
});
