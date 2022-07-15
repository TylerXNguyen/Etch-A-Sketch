let size = 16; //size x size grid
const container = document.querySelector(".container");
// creation of (size * size) grid total size
for (let j = 0; j < size; j++) {
    // create for each j row
    for (let i = 1; i <= size; i++) {
        // create for each i col
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("id", i + j * size);
        pixel.textContent = i + j * size;
        container.appendChild(pixel);
    }
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function() {
        changeRainbow(pixel.id);
        console.log(pixel.id);
        console.log(randColor());
    });
});

function randColor() {
    let color = "#"
    let hex_letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += hex_letters[Math.floor(Math.random() * hex_letters.length)];
    }
    return color;
}

function changeRainbow(value_ID) {
    const draw = document.getElementById(value_ID);
    draw.style.backgroundColor = randColor();
}

