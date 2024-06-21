import { getById } from '../utils/get-by-id.js';


// --------------------
// --  PRICES
// ----------------------------------------------------------------------------------

const
  $PricesBtn           = getById("prices-btn"),
  $PricesPopup         = getById("prices-popup-form"),
  $PricesPopupCloseBtn = getById("prices-popup-close-btn"),
  $PricesPopupSendBtn  = getById("prices-popup-send-btn");


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

$PricesPopupSendBtn.addEventListener('click', () => {
  console.log('Click btn');

    // fetch('http://localhost:9090/api/hello', {
    fetch('http://rhy.thm.su/api/hello', {
      method: 'GET', // или 'POST' в зависимости от вашего запроса
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
