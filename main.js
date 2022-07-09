
//DOM IMPORTS
const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const modes = document.querySelectorAll(".button");
const shapeModes = document.querySelectorAll(".shape-bttn");
const colorPick = document.getElementById("cPick");
const labelPick = document.getElementById("color-picker");
const gridSizeText = document.getElementById("gridSize");
const gridSizeSlider = document.getElementById("gridSizeSlider");
const clearBttn = document.querySelector(".cButton");
//DEFAULT VALUES
const width = grid.offsetWidth;
const height = grid.offsetHeight;
let penColor = "black"
let mode = 1;
let shape = 1;
let gridSize = 16;
let mouseDown = false;

//Functions

document.body.onmousedown = () => { mouseDown = true };
document.body.onmouseup = () => { mouseDown = false };

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.addEventListener('mouseover', changeColor)
            cell.classList.add("cell");
            cell.style.width = `${width / gridSize}px`;
            cell.style.height = `${height / gridSize}px`;
            cell.style.borderRadius = addShape(shape);
            grid.appendChild(cell);
        }
    }
}

function setMode(e) {
    mode = parseInt(e.target.value);
}

function setShapeMode(e) {
    shape = parseInt(e.target.value);
}

function setColor(e) {
    penColor = e.target.value;
    labelPick.style.backgroundColor = penColor;
}

function setGridSize(e) {
    gridSize = parseInt(e.target.value);
}

function addShape(shape) {
    if (shape == 1) {
        return "0px"
    } else if (shape == 2) {
        return "50px"
    }
}

function randomIntFromInterval(max) { // min and max included 
    return Math.floor(Math.random() * (max + 1))
}

function getRandomColor() {
    let R = randomIntFromInterval(256);
    let G = randomIntFromInterval(256);
    let B = randomIntFromInterval(256);
    return `rgb(${R}, ${G}, ${B})`
}

function changeColor(e) {
    if (mouseDown == false) {
        return;
    }
    else {
        if (mode == 1) {
            e.target.style.backgroundColor = penColor;
        }
        else if (mode == 2) {

            e.target.style.backgroundColor = getRandomColor();
        }
        else if (mode == 3) {
            e.target.style.backgroundColor = "white";
        }
    }
}

function clearGrid() {
    grid.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    createGrid(gridSize);
}

colorPick.addEventListener("input", setColor)

gridSizeSlider.onmousemove = (e) => {
    setGridSize(e)
    gridSizeText.textContent = `${gridSize} x ${gridSize}`;
}

gridSizeSlider.onchange = () => {
    reloadGrid(gridSize)
}

modes.forEach((m) => {
    m.addEventListener("click", setMode)
})

shapeModes.forEach((s) => {
    s.addEventListener("click", (e) => {
        setShapeMode(e);
        reloadGrid();
    })
})

clearBttn.onclick = () => { reloadGrid() }

window.onload = () => {
    createGrid(gridSize)
}