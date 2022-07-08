var container = document.querySelector(".container");
var grid = document.querySelector(".grid");

var size = container.offsetWidth;
var gridSize = 8;
var penColor = "red";


grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = penColor;
        })
        cell.classList.add("cell");
        cell.style.width = `${size / gridSize}px`;
        cell.style.height = `${size / gridSize}px`;
        grid.appendChild(cell);
    }
}
