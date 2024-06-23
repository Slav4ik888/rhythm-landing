import { SETTINGS } from '../consts/index.js';
import { getById } from './get-by-id.js';


const
  $PopupSucces         = getById("popup-success"),
  $PopupSuccesCloseBtn = getById("popup-success-close-btn"),
  $PopupSuccesBtn      = getById("popup-success-btn"),
  $PopupFailed         = getById("popup-failed"),
  $PopupFailedCloseBtn = getById("popup-failed-close-btn"),
  $PopupFailedBtn      = getById("popup-failed-btn");


  $PopupSucces.addEventListener('click', function (e) {
    if (e.target === $PopupSucces) {
      $PopupSucces.style.display = 'none';
    }
  });

  $PopupSuccesCloseBtn.addEventListener('click', function (e) {
    $PopupSucces.style.display = 'none';
  });

  $PopupSuccesBtn.addEventListener('click', function (e) {
    $PopupSucces.style.display = 'none';
  });

  $PopupFailed.addEventListener('click', function (e) {
    if (e.target === $PopupFailed) {
      $PopupFailed.style.display = 'none';
    }
  });

  $PopupFailedCloseBtn.addEventListener('click', function (e) {
    $PopupFailed.style.display = 'none';
  });

  $PopupFailedBtn.addEventListener('click', function (e) {
    $PopupFailed.style.display = 'none';
  });

  


/**
 * Проверяет корректность полей и если есть ошибки,
 * выводит их на экран в форму
 * 
 * @param {object} body - объект с данными
 * @param {string} classPrefix 'prices' | 'get-demo'
 * @param {element} elemPopup - for 'prices'
 * @returns {boolean}
 */
export const getRequest = async (body, classPrefix, elemPopup) => {

  try {
    const
      pricesType  = classPrefix === 'prices',
      getDemoType = classPrefix === 'get-demo',
      url = SETTINGS.url + (pricesType ?  '/get-prices'  : getDemoType ? '/get-demo' : '');

    const response = await fetch(url, {
      method  : 'POST',
      body    : JSON.stringify(body),
      headers : {
        'Content-Type': 'application/json'
      }
    });

    console.log(111111);
    
    console.log(222222);
    const data = await response.json();
    console.log('data: ', data);

    // Prices
    if (pricesType) {
      console.log(33333);
      elemPopup.style.display = 'none'; // Закрываем запрос
    }
    if (getDemoType) {
      console.log(444444);
    }

    $PopupSucces.style.display = 'flex';
  }
  catch (error) {
    console.error('Error:', error);
    $PopupFailed.style.display = 'flex';
  }
};
