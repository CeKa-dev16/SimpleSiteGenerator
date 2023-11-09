const main = document.querySelector('main');
const original_canvas = document.querySelector('.canvas').firstChild;
var canvas = document.querySelector('#canvas');

function setCanvasTo(element) {
  canvas = element;
}

export { setCanvasTo, main, original_canvas, canvas };