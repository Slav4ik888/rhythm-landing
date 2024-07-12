import { getById } from '../utils/get-by-id.js';
import { removeNotVisible, addNotVisible } from '../utils/class-visible.js';


const $draggableExamplesSlideElement = getById('examples-slide-element');
const $containerFirstRowFrame        = getById('first-row-frame');
const $examplesLeftImageBox          = getById('examples-left-image-box');

let offsetX;

$draggableExamplesSlideElement.addEventListener('dragstart', dragStart);
$draggableExamplesSlideElement.addEventListener('drag', (e) => { e.preventDefault(); }); // Prevent default to allow custom drag
$draggableExamplesSlideElement.addEventListener('dragend', dragEnd);

$containerFirstRowFrame.addEventListener('dragover', dragover);
$containerFirstRowFrame.addEventListener('dragenter', dragenter);
$containerFirstRowFrame.addEventListener('dragleave', dragleave);
$containerFirstRowFrame.addEventListener('drop', dragdrop);

// ---------------------------------------------------------

function dragStart(e) {
  console.log('dragStart');
  // const target = e.target;

  const draggableRect = $draggableExamplesSlideElement.getBoundingClientRect();
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

  setTimeout(() => addNotVisible($draggableExamplesSlideElement));
}

function dragEnd(e) {
  console.log('dragEnd');
  // const target = e.target;

  const containerRect = $containerFirstRowFrame.getBoundingClientRect();
  const draggableRect = $draggableExamplesSlideElement.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;

  // Constrain within the container
  // x = Math.max(0, Math.min(containerRect.width - draggableRect.width, x));

  $draggableExamplesSlideElement.style.left = `${x}px`;
  removeNotVisible($draggableExamplesSlideElement);
}

// ---------------------------------------------------------

function dragover(e) {
  // console.log('dragover');
  e.preventDefault();
  const containerRect = $containerFirstRowFrame.getBoundingClientRect();
  // const draggableRect = $draggableExamplesSlideElement.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  console.log('x: ', x);

  $examplesLeftImageBox.style.width = `${x}px`;

  // Constrain within the container
  // x = Math.max(0, Math.min(containerRect.width - draggableRect.width, x));
  // y = Math.max(0, Math.min(containerRect.height - draggableRect.height, y));

  // $draggableExamplesSlideElement.style.left = `${x}px`;
  // $draggableExamplesSlideElement.style.top = `${y}px`;
}

function dragenter(e) {
  console.log('dragenter');
  // e.target.classList.add('hovered');
}

function dragleave(e) {
  console.log('dragleave');
  // e.target.classList.remove('hovered');
}

function dragdrop(e) {
  console.log('dragdrop');
  // e.target.append(item);
  // e.target.classList.remove('hovered');
}
