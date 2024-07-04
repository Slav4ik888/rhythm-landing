import { getById } from '../utils/get-by-id.js';

const
  getDemo = getById('get-demo'),
  primarySecondary = getById('primary-secondary'),
  devTimeline = getById('dev-timeline'),
  whyWe = getById('why-we'),
  prices = getById('prices'),
  footer = getById('footer');

getDemo.classList.add('not-visible');
primarySecondary.classList.add('not-visible');
devTimeline.classList.add('not-visible');
whyWe.classList.add('not-visible');
prices.classList.add('not-visible');
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