let size = 16; //size x size grid
let total_pixels = size * size;
const container = document.querySelector(".container");
// creation of (size * size) grid total size
for (let j = 0; j < size; j++) {
    // create for each j row
    for (let i = 1; i <= size; i++) {
        // create for each i col
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("id", i + j * size);
        container.appendChild(pixel);
    }
}

// checks if mousedown to draw
var mouseDown = 0;
document.body.onmousedown = function() { 
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}
const pixels = document.querySelectorAll(".pixel");
let colorDraw = 0; // 0 black, 1 rainbow
// action element for hovering over a pixel
pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function() {
        if (mouseDown == 1) {
            if (colorDraw == 0) {
                changeCanvas(pixel.id, "black");
            } else {
                changeCanvas(pixel.id, randColor());
            }
        }
    });
});


function randColor() {
    // returns a random hexadecimal color
    let color = "#"
    let hex_letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += hex_letters[Math.floor(Math.random() * hex_letters.length)];
    }
    return color;
}

function changeCanvas(value_ID, color) {
    // colors the ID value background by black color
    const draw = document.getElementById(value_ID);
    draw.style.backgroundColor = color;
}

// black color button
function blackBtn() {
    colorDraw = 0;
}

// rainbow color button
function rainbowBtn() {
    colorDraw = 1;
}

// reset canvas button
function resetBtn() {
    for (let i = 1; i <= total_pixels; i++) {
        const draw = document.getElementById(i);
        draw.style.backgroundColor = "white";
    }
}

