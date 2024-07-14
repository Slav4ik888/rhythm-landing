
/**
 * Получает все параметры utm-меток из URL и сохраняет в переданный объект в поле utms
 * @param {object} formdata данные с формы, для отправки на сервер
 * @returns formdata с добавленным полем utms в котором utm-метки
 */
export function getUTMParameters(formdata) {
  const urlParams = new URLSearchParams(window.location.search);
  // const utmParameters = {};
  formdata.utms = {};

    
  urlParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
          // utmParameters[key] = value;
          formdata.utms[key] = value;
      }
  });
    
  return formdata;
}

// Пример использования:
// http://rhy.thm.su/?utm_source=sendsay&utm_medium=email&utm_campaign=start&utm_term=first_letter
// const utmParams = getUTMParameters();
// {
//   utm_source: 'sendsay',
//   utm_medium: 'email',
//   utm_campaign: 'start',
//   utm_term: 'first_letter'
// }

// console.log(utmParams);
