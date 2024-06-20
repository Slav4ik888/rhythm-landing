import { getById } from '../utils/get-by-id.js';


// --------------------
// --  PRICES
// ----------------------------------------------------------------------------------

const
  $PricesBtn           = getById("prices-btn"),
  $PricesPopup         = getById("prices-popup-form"),
  $PricesPopupCloseBtn = getById("prices-popup-close-btn");
  

$PricesBtn.addEventListener("click", () => {
  $PricesPopup.style.display = "flex";
});

$PricesPopup.addEventListener('click', function (e) {
  if (e.target === $PricesPopup) {
    $PricesPopup.style.display = 'none';
  }
});

$PricesPopupCloseBtn.addEventListener('click', function (e) {
  $PricesPopup.style.display = 'none';
});
