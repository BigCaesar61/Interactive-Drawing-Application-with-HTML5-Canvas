//Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); //canvas element
const ctx = canvas.getContext('2d'); //makes canvas 2D
let drawing = false;
let startX, startY;
let selectedTool = 'Line';
let color = '#000000'

ctx.fillStyle = "darkgray";
ctx.fillRect(0,0, canvas.clientWidth, canvas.height);

//Task 3: implement Shape Drawing Logic
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = color;
});

//above event listener is for mouse events when a user starts to draw

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

    const currentX = e.offsetX;
    const currentY = e.offsetY;

    ctx.beginPath();
    ctx.strokeStyle = color;

    if (selectedTool === 'line') {
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
    } else if (selectedTool === 'rectangle') {
        ctx.rect(startX, startY, currentX - startX, currentY - startY);
    } else if (selectedTool === 'circle') {
        const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    }

    ctx.stroke();
});

//event listener for drawing both lines and shapes

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

//event listener for when the user stops drawing


//Task 4: Implement color selection and canvas clearing functionality.

document.querySelectorAll('input[name="tool"]').forEach(tool => {
    tool.addEventListener('change', (e) => {
        selectedTool = e.target.value;
    });
});

//^ tool selector

document.getElementById('colorPicker').addEventListener('change', (e) => {
    color = e.target.value;
});

//color selector

document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
});

//clear canvas button