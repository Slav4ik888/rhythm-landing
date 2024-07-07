import { getById } from '../utils/get-by-id.js';
import { screenResizeListener } from  '../utils/screen-resize-listener.js';
import { addNotVisible, removeNotVisible } from '../utils/class-visible.js';


// --------------------
// --  USE-FOR-BUSINESS
// ----------------------------------------------------------------------------------

const
  $UsefullForBusinessLeft  = getById("usefull-for-business-left"),
  $UsefullForBusinessRight = getById("usefull-for-business-right");

let
  ufbActiveItemId = 0;

const
  ufbListItems = document.querySelectorAll('.list-ufb-item'),
  ufbLastIdx =  ufbListItems.length -  1;


$UsefullForBusinessLeft.addEventListener("click", () => {
  if (ufbActiveItemId === 0) {
    ufbActiveItemId = ufbLastIdx;
    addNotVisible(ufbListItems[0]);
    removeNotVisible(ufbListItems[ufbLastIdx]);
  }
  else {
    ufbActiveItemId  = ufbActiveItemId - 1;
    removeNotVisible(ufbListItems[ufbActiveItemId]);
    addNotVisible(ufbListItems[ufbActiveItemId + 1]);
  }
});

$UsefullForBusinessRight.addEventListener('click', function (e) {
  if (ufbActiveItemId === ufbLastIdx) {
    ufbActiveItemId = 0;
    addNotVisible(ufbListItems[ufbLastIdx]);
    removeNotVisible(ufbListItems[0]);
  }
  else {
    ufbActiveItemId  = ufbActiveItemId + 1;
    removeNotVisible(ufbListItems[ufbActiveItemId]);
    addNotVisible(ufbListItems[ufbActiveItemId - 1]);
  }
});


// --------------------
// --  SCREEN-RESIZE-LISTENER
// ----------------------------------------------------------------------------------

screenResizeListener((l) => {
  // console.log('screenResizeListener');
  if (l < 768) {
    // console.log('<<< 768');

    // Если во время листания изменили экран, то для 1й элемент делаем активным
    ufbActiveItemId = 0;
    removeNotVisible(ufbListItems[0]);

    // Скрываем все остальные элементы
    for (let i = ufbActiveItemId + 1; i < ufbListItems.length; i++)  {
      addNotVisible(ufbListItems[i]);
    }
  }
  else {
    // console.log('>>> 768');
    // Открываем все элементы
    ufbActiveItemId = 0;

    for (let i = ufbActiveItemId; i < ufbListItems.length; i++)  {
      removeNotVisible(ufbListItems[i]);
    }
  }
});
