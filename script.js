const container = document.querySelector("#container");
const button = document.querySelector("#button");
const tiles = document.querySelectorAll(".tiles")

function randomColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

function createGrid(numOfSquares) {
    container.innerHTML = "";
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("tiles");
    div.style.width = 100 / numOfSquares + "%";
    div.style.height = 100 / numOfSquares + "%";
    div.dataset.darkness = 0;

    div.addEventListener("mouseenter", () => {
        let darkness = Number(div.dataset.darkness);

        if (!div.style.backgroundColor) {
            div.style.backgroundColor = randomColour();
        }

        if (darkness < 10) {
            darkness++;
            div.dataset.darkness = darkness;
            div.style.opacity = darkness / 10;
        }
        });

    container.appendChild(div)
}
};

createGrid(16);

button.addEventListener("click", () => {
    let numOfSquares = prompt("How many squares per side?");
    numOfSquares = Number(numOfSquares);

    if (Number.isInteger(numOfSquares) &&
        numOfSquares > 0 &&
        numOfSquares <= 100) {
       createGrid(numOfSquares);
    }
    else {
        alert("Please enter a number greater than 0 and less than 100!");
    }
});