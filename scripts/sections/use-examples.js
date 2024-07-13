import { getById } from '../utils/get-by-id.js';
import { removeNotVisible, addNotVisible } from '../utils/class-visible.js';


window.addEventListener('scroll', handleScroll);

let examplesSlideElementStarted = false;

const draggable    = getById('examples-slide-element');
const container    = getById('first-row-frame');
const leftImageBox = getById('examples-left-image-box');
const draggableRectWidth = draggable.getBoundingClientRect().width;


function handleScroll() {
  if (examplesSlideElementStarted) return; // Проверяем, чтобы запустился только 1 раз

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 3400) { // Пример проверки достижения определённой позиции
    examplesSlideElementStarted = true;
    
    leftImageBox.classList.toggle('examples-shrink');

    setTimeout(() => {
      leftImageBox.classList.toggle('examples-shrink-1');
      draggable.classList.toggle('examples-shrink-slide-1');
    }, 100);

    setTimeout(() => {
      leftImageBox.classList.toggle('examples-shrink-1'); // Expand back
      leftImageBox.classList.toggle('examples-shrink-2');
      draggable.classList.toggle('examples-shrink-slide-1');
      draggable.classList.toggle('examples-shrink-slide-2');
    }, 1000);

    setTimeout(() => {
      leftImageBox.classList.toggle('examples-shrink-2');
      leftImageBox.classList.toggle('examples-shrink-3'); // Expand back  examples-shrink-2
      draggable.classList.toggle('examples-shrink-slide-2');
      draggable.classList.toggle('examples-shrink-slide-3');
    }, 1800);

    setTimeout(() => {
      leftImageBox.classList.toggle('examples-shrink-3'); // Expand back  examples-shrink-2
      draggable.classList.toggle('examples-shrink-slide-3');
    }, 2800);
  }
}


// ---------------------------------------------------------


let offsetX;

// draggable.addEventListener('drag', (e) => { e.preventDefault(); }); // Prevent default to allow custom drag
draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

container.addEventListener('dragover', dragover);

// ---------------------------------------------------------

function dragStart(e) {
  // console.log('dragStart');
  const draggableRect = draggable.getBoundingClientRect();
  // {
  //   bottom: 759.6796875
  //   height: 410
  //   left: 681.5
  //   right: 701.5
  //   top: 349.6796875
  //   width: 20
  //   x: 681.5
  //   y: 349.6796875
  // }

  offsetX = e.clientX - draggableRect.left;

  setTimeout(() => addNotVisible(draggable));
}

function dragEnd(e) {
  // console.log('dragEnd');
  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;

  // Constrain within the container
  x = Math.max(0, Math.min(containerRect.width - draggableRectWidth, x));

  draggable.style.left = `${x}px`;
  leftImageBox.style.width = `${x + (draggableRectWidth / 2)}px`;
  removeNotVisible(draggable);
  // Чтобы после первого перетаскивания, картинка не перетаскивалась дальше, а только если схватили за ползунок
  offsetX = undefined;
}

// ---------------------------------------------------------

function dragover(e) {
  e.preventDefault();
  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  x = Math.max(0, Math.min(containerRect.width - draggableRectWidth, x));

  leftImageBox.style.width = `${x}px`;
}
