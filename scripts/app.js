import './sections/index.js';
import { displayCurrentYear } from './utils/display-current-year.js';

displayCurrentYear();



// -------------------------
// --  ПЛАВНАЯ ПРОКРУТКА
// ----------------------------------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth',
        // block: 'start'
      });
  });
});


// -------------------------
// --  ПЛАВНАЯ ПРОКРУТКА С ОТСТУПОМ СВЕРХУ
// ----------------------------------------------------------------------------------

// Устанавливаем значение отступа сверху
let topSpace = -100;

// Получаем все элементы с классом internal-link
const links = document.querySelectorAll('.internal-link');

// Добавляем обработчик события клика
links.forEach(link => {
  link.addEventListener('click', function (event) {

    // Получаем элемент, на который указывает ссылка
    const target = document.getElementById(this.getAttribute('href')?.slice(1));

    // Вычисляем позицию элемента относительно верха окна
    let top = target.offsetTop;

    // Добавляем отступ
    top += topSpace; // Пример значения отступа

    // Прокручиваем страницу до нужной позиции
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Превентивные меры - предупреждающие, предохранительные действия. Это меры предупредительного характера в ситуациях, когда необходимо снизить риски возникновения нежелательных событий.
