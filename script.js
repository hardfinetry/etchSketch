const container = document.querySelector("#container");

function createGrid(numOfSquares) {
    container.innerHTML = "";
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    const div = document.createElement("div");
    div.style.width = 100 / numOfSquares + "%";
    div.style.height = 100 / numOfSquares + "%";
    container.appendChild(div)
}
};

createGrid(16);

const button = document.querySelector("#button");

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