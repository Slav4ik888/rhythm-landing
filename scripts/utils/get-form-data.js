import { getUTMParameters } from './get-utm-parameters.js';

/**
 * Возвращает объект с данными из формы
 * @param {string} formName 
 */
export const getFormData = (formName) => {
  const
    form = document.forms[formName].elements,
    body = {};

  for (let i = 0; i < form.length; i++) {
    if (form[i].name) {
      body[form[i].name] = form[i].value;
    }
  }

  const utmParams = getUTMParameters(body);
  console.log(utmParams);
  
  return body;
};
