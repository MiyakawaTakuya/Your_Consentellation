// function setup() {

// }

// function draw() {
//     ellipse(50, 50, 80, 80);
// }

// function setup() {
//     createCanvas(640, 480);
// }

// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }


let canvasWidth = 600;
let canvasHeight = 600;
let numPoints = 150;
let minDistance = 50;
let pointSize = 1;
// let pointcolor = rgb;
var points = [];

class Point {
    constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
    }

    getDistance(point) {
        let dx = this.x - point.x;
        let dy = this.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas');
    for (var i = 0; i < numPoints; i++) {
        points.push(new Point());
    }
}

function draw() {
    drawPoints();
}

function drawPoints() {
    stroke(0.5);
    for (var i = 0; i < points.length; i++) {
        fill(30);
        ellipse(points[i].x, points[i].y, pointSize, pointSize);
        for (var j = i; j < numPoints; j++) {
            if (points[i].getDistance(points[j]) < minDistance) {
                line(points[i].x, points[i].y, points[j].x, points[j].y);
            }
        }
    }
}