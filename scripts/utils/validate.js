import { getById } from './get-by-id.js';
import { isEmptyStr, isNotEmail, isNotEmptyStr, isNotStr } from './validators.js';

/**
 * Проверяет корректность полей и если есть ошибки,
 * выводит их на экран в форму
 * 
 * @param {object} body - объект с данными
 * @param {string} classPrefix 'prices' | 'get-demo'
 * @returns {boolean}
 */
export const validate = (body, classPrefix) => {
  const
    $FormHeplerName    = getById(classPrefix + "-form-helper-name"),
    $FormHeplerCompany = getById(classPrefix + "-form-helper-company"),
    $FormHeplerEmail   = getById(classPrefix + "-form-helper-email"),
    errors = {};
  
  // Очищает все ранее выведенные ошибки в форме
  $FormHeplerName.textContent = '';
  $FormHeplerName.classList.add('not-visible');
  $FormHeplerCompany.textContent = '';
  $FormHeplerCompany.classList.add('not-visible');
  $FormHeplerEmail.textContent = '';
  $FormHeplerEmail.classList.add('not-visible');
  
  // Email
  if (isNotEmail(body.email)) {
    errors.email = 'Не корректный email';
    $FormHeplerEmail.textContent = errors.email;
    $FormHeplerEmail.classList.remove('not-visible');
  }
  // Name
  if (isEmptyStr(body.name) || isNotStr(body.name)) {
    errors.name = 'Не корректное имя';
    $FormHeplerName.textContent = errors.name;
    $FormHeplerName.classList.remove('not-visible');
  }
  if (body.name?.length > 50) {
    errors.name = 'Имя должно быть меньше 50 символов';
    $FormHeplerName.textContent = errors.name;
    $FormHeplerName.classList.remove('not-visible');
  }
  // Company name
  if (isNotEmptyStr(body.company) && isNotStr(body.company)) {
    errors.company = 'Не корректное название компании';
    $FormHeplerCompany.textContent = errors.company;
    $FormHeplerCompany.classList.remove('not-visible');
  }
  if (body.company?.length > 50) {
    errors.company = 'Название компании должно быть меньше 50 символов';
    $FormHeplerCompany.textContent = errors.company;
    $FormHeplerCompany.classList.remove('not-visible');
  }

  // Проверка
  if (Object.keys(errors).length > 0) {
    console.log('errors: ', errors);

    return false
  }

  return true;
}
