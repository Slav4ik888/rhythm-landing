import { SETTINGS } from '../consts/index.js';
import { getById } from '../utils/get-by-id.js';
import { getFormData } from '../utils/get-form-data.js';
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


$PricesForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const body = getFormData('prices-form');
  if (! validate(body, 'prices')) return;

  try {
    const response = await fetch(SETTINGS.url + '/get-prices', {
      method  : 'POST',
      body    : JSON.stringify(body),
      headers : {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log('Success:', result);
    $PricesPopup.style.display = 'none';

  }
  catch (error) {
    console.error('Error:', error);
  }
});
