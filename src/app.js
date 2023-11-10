const main = document.querySelector("main");
const original_canvas = document.querySelector(".canvas").firstChild;
var ownCanvas = document.querySelector("#canvas");

function setCanvasTo(element) {
  ownCanvas = element;
}

let hovered = canvas;

const handle_mousemove = (event) => {
  hovered.style.outline = "";
  hovered = document.elementFromPoint(event.x, event.y);
  hovered.style.outline = "2px dashed var(--body)";
};

const handle_mouseleave = () => {
  hovered.style.outline = "";
};

function activateEvents() {
  ownCanvas.addEventListener("mousemove", handle_mousemove);
  ownCanvas.addEventListener("mouseleave", handle_mouseleave);
}

function desactivateEvents() {
  ownCanvas.removeEventListener("mousemove", handle_mousemove);
  ownCanvas.removeEventListener("mouseleave", handle_mouseleave);
}

export {
  setCanvasTo,
  main,
  original_canvas,
  ownCanvas,
  activateEvents,
  desactivateEvents,
};
