import { getById } from '../utils/get-by-id.js';

const
  footer = getById('footer');

footer.classList.add('not-visible');


// const
//   $menuBtn = getById('.menu__button'),
//   $menuList = getById('.menu__list');

// $menuBtn.addEventListener('click', () => { 
//   let expanded = $menuBtn.getAttribute('aria-expanded') === 'true' || 'false';
//   $menuBtn.setAttribute('aria-expanded', ! expanded);
//   $menuBtn.classList.toggle('menu__button--open');
//   $menuList.classList.toggle('menu__list--open');
// });
