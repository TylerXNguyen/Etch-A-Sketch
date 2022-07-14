let size = 16;
const container = document.querySelector(".container");
for (let j = 0; j < size; j++) {
    for (let i = 1; i <= size; i++) {
        // for each row
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("id", i + j * 16);
        pixel.textContent = i + j * 16;
        container.appendChild(pixel);
    }
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener("click", function() {
        console.log("CLICK");
        console.log(pixel.id);
    });
});