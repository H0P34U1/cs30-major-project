// Major project

// eslint-disable-next-line no-redeclare
const canvass = document.getElementById("canvass");
canvass.width = window.innerWidth - 60;
canvass.height = 500;

let context = canvass.getContext("2d"); 
let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvass.width, canvass.height);

let draw_color = "black";
let draw_width = "2";
let draw_opacity = "1";
let is_drawing = false;

let restore_array = [];
let index = -1;

function change_color(element) {
  draw_color = element.style.background;
}

function pencil() {
  is_drawing = false;
}

canvass.addEventListener("touchstart", start, false);
canvass.addEventListener("touchmove", draw, false);
canvass.addEventListener("mousedown", start, false);
canvass.addEventListener("mousemove", draw, false);

canvass.addEventListener("touchend", stop, false);
canvass.addEventListener("mouseup", stop, false);
canvass.addEventListener("mouseout", stop, false);


function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvass.offsetLeft, event.clientY - canvass.offsetTop);
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(event.clientX - canvass.offsetLeft, event.clientY - canvass.offsetTop);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
  event.preventDefault();
}

// eslint-disable-next-line no-redeclare
function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();

  // eslint-disable-next-line eqeqeq
  if ( event.type != "mouseout" ) {
    restore_array.push(context.getImageData(0, 0, canvass.width, canvass.height));
    index += 1;
  }
}

function clear_canvas() {
  context.fillStyle = start_background_color;
  context.clearRect(0, 0, canvass.width, canvass.height);
  context.fillRect(0, 0, canvass.width, canvass.height);

  restore_array = [];
  index = -1;
}

function undo_last() {
  // eslint-disable-next-line no-compare-neg-zero
  if ( index <- 0 ) {
    clear_canvas();
  }
  else {
    index -= 1;
    restore_array.pop();
    context.putImageData(restore_array[index], 0, 0);
  }
}