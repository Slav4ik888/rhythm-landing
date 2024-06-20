import { getById } from './get-by-id.js';


/**
 * Return full year '2022' to the Node - '.osnova-box-year'
 * @param {string} class 
 */
export const displayCurrentYear = () => {
  const $year = getById('osnova-box-year');
  
  $year.textContent = new Date().getFullYear();
}
