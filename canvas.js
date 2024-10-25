//Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); //canvas element
const ctx = canvas.getContext('2d'); //makes canvas 2D

ctx.fillStyle = "darkgray";
ctx.fillRect(0,0, canvas.clientWidth, canvas.height);