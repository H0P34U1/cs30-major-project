class MyLine {
    constructor() {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winmouseY
    }
    show() {
        stroke(255)
        lines(this.px, this.py, this.x, this.y)
    }
}