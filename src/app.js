const main = document.querySelector('main');
const original_canvas = document.querySelector('.canvas').firstChild;
var canvas = document.querySelector('#canvas');

function setCanvasTo(element) {
  canvas = element;
}

let hovered = canvas;

const handle_mousemove = (event) => {
  hovered.style.outline = '';
  hovered = document.elementFromPoint(event.x, event.y);
  hovered.style.outline = '2px dashed var(--body)';
}

const handle_mouseleave = () => {
  hovered.style.outline = '';
}

function activateEvents() {
  canvas.addEventListener('mousemove', handle_mousemove);
  canvas.addEventListener('mouseleave', handle_mouseleave);
}

function desactivateEvents() {
  canvas.removeEventListener('mousemove', handle_mousemove);
  canvas.removeEventListener('mouseleave', handle_mouseleave);
}

export { setCanvasTo, main, original_canvas, canvas, activateEvents, desactivateEvents };
