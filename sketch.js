// Major project

let lines = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);

  previousPos = createVector(0, 0);
  currentPos = createVector(0, 0);
  pencilColor = color(0, 0, 0);
  thickness = 5;
  isDrawingEnabled = false;
  isLiningEnabled = false;
}

function draw() {

  if (mouseIsPressed) {
      let line = new myLines()
      lines.push(line)
  }

  for (let line of lines) {
    line.show()
  }
}
