const WIDTH = 800;
const HEIGHT = 600;
const TITLE = "Javascript Canvas Boilerplate";

let canvas;
let ctx;

window.onload = main;

function main(){
    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    init();
}

/* Initialization */
function init(){
    window.requestAnimationFrame(update);
}

/* Update loop */
function update(time){
    draw();
    window.requestAnimationFrame(update);
}

/* Draw to the canvas */
function draw(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}