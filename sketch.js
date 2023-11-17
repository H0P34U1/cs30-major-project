// Major project

let pencilColor;
let thickness;
let previousPos;
let currentPos;
let button;
let isDrawingEnabled;
let isLiningEnabled;

function tools() {
  button = createButton("pencil");
  button.style("background-color", "gray");
  button.style("color", "white");
  button.position(50, 50);
  button.size(50, 50);
  button.mousePressed(pencil);
}

function equip() {
  button = createButton("line");
  button.style("background-color", "gray");
  button.style("color", "white");
  button.position(120, 50);
  button.size(50, 50);
  button.mousePressed(lining);
}

function colorCode() {
  noStroke();
  fill(200, 200, 200);
  rect(0, 0, 20, height / 6);
  fill("black");
  rect(0, 50, 20, height / 6);
  fill("red");
  rect(0, 100, 20, height / 6);
  fill(153, 51, 0);
  rect(0, 150, 20, height / 6);
  fill("orange");
  rect(0, 200, 20, height / 6);
  fill("yellow");
  rect(0, 250, 20, height / 6);
  fill("lime");
  rect(0, 300, 20, height / 6);
  fill("green");
  rect(0, 350, 20, height / 6);
  fill("aqua");
  rect(0, 400, 20, height / 6);
  fill("blue");
  rect(0, 450, 20, height / 6);
  fill("purple");
  rect(0, 500, 20, height / 6);
  fill(255, 102, 255);
  rect(0, 550, 20, height / 6);
}

function pencil() {
  if (mouseX < 100, mouseY < 100) {
    isDrawingEnabled = !isDrawingEnabled;
  }
}

function lining() {
  if (mouseY < 100, mouseX < 200) {
    isLiningEnabled = !isLiningEnabled;
    if (isLiningEnabled) {
      previousPos.x = mouseX;
      previousPos.y = mouseY;
    }
  }
}

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
  if (isDrawingEnabled) {
    trail();
  }

  if (isLiningEnabled && mouseIsPressed) {
    currentPos.x = mouseX;
    currentPos.y = mouseY;

    stroke(0);
    strokeWeight(2);
    line(previousPos.x, previousPos.y, currentPos.x, currentPos.y);

    previousPos.x = currentPos.x;
    previousPos.y = currentPos.y;
  }

  noStroke();
  fill(50, 50, 50);
  rect(10, 0, 2000, 50);
  fill(pencilColor);
  ellipse(650, 22, 25);
  fill("white");
  ellipse(600, 22, thickness);

  noStroke();
  textSize(26);
  fill("white");
  text("Drawing Game", 750, 30);

  colorCode();
  tools();
  equip();
}

function mousePressed() {
  if (mouseX < 20) {
    if (mouseY < 50) {
      pencilColor = color(250, 250, 250);
    } 
    else if (mouseY < 100) {
      pencilColor = color("black");
    } 
    else if (mouseY < 150) {
      pencilColor = color("red");
    } 
    else if (mouseY < 200) {
      pencilColor = color(153, 51, 0);
    } 
    else if (mouseY < 250) {
      pencilColor = color("orange");
    } 
    else if (mouseY < 300) {
      pencilColor = color("yellow");
    } 
    else if (mouseY < 350) {
      pencilColor = color("lime");
    } 
    else if (mouseY < 400) {
      pencilColor = color("green");
    } 
    else if (mouseY < 450) {
      pencilColor = color("aqua");
    } 
    else if (mouseY < 500) {
      pencilColor = color("blue");
    } 
    else if (mouseY < 550) {
      pencilColor = color("purple");
    } 
    else if (mouseY < 600) {
      pencilColor = color(255, 102, 255);
    } 
    else if (mouseX < 100, mouseY < 100) {
      isDrawingEnabled = !isDrawingEnabled;
    }
  }
}

function trail() {
  if (mouseIsPressed) {
    stroke(pencilColor);
    strokeWeight(thickness);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mouseWheel(event) {
  thickness += event.delta / 100;
  thickness = constrain(thickness, 1, 30);
  return false;
}

function keyPressed() {
  if (isDrawingEnabled) {
    if (key === "e") {
      background(250);
    }
  }
  if (isLiningEnabled) {
    if (key === "e") {
      background(250)
      set: previousPos.x = undefined;
      set: previousPos.y = undefined;
    }
    else if (isLiningEnabled) {
      if (key === "r") {
        set: previousPos.x = undefined;
        set: previousPos.y = undefined;
      }
    }
  }
}
