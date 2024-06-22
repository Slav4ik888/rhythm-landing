import { SETTINGS } from '../consts/index.js';
import { getById } from '../utils/get-by-id.js';
import { getFormData } from '../utils/get-form-data.js';
import { getRequest } from '../utils/requests.js';
import { validate } from '../utils/validate.js';


// --------------------
// --  PRICES
// ----------------------------------------------------------------------------------

const
  $PricesBtn           = getById("prices-btn"),
  $PricesPopup         = getById("prices-popup-form"),
  $PricesPopupCloseBtn = getById("prices-popup-close-btn"),
  $PricesForm          = getById("prices-form");


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


$PricesForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const body = getFormData('prices-form');
  if (! validate(body, 'prices')) return;

  getRequest(body, 'prices', $PricesPopup);
});
