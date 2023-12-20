class myLines {
  constructor(winMouseX, winMouseY, pwinMouseX, pwinMouseY) {
    this.x = winMouseX;
    this.y = winMouseY;
    this.py = pwinMouseY;
    this.px = pwinMouseX;
  }
  show() {
    stroke(255);
    line(this.px, this.py, this.x, this.y);

  }
}