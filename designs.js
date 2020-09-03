// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const gridColor = document.querySelector('#colorPicker'); //Don't forget to use gridColor.value to access the hex color code
const sizePicker = document.querySelector('#sizePicker');
const mySubmit = document.querySelector("#sizePicker input[type='button']")
const pixelTable = document.querySelector('#pixelCanvas');

mySubmit.addEventListener('click', makeGrid);

function respondToPixelArt() {
    event.target.setAttribute('style', 'background-color:' + gridColor.value);
    //place code to change background color here
}

function makeGrid () {
    while (pixelTable.firstChild) { //clears the grid from any previous input
        pixelTable.removeChild(pixelTable.firstChild);
    }

    const gridHeight = document.querySelector('#inputHeight');
    const gridWidth = document.querySelector('#inputWidth');
    for (let height = 1; height <= gridHeight.value; height ++) {
        const newRow = document.createElement('tr'); //Create an entire row
        for (let width = 1; width <= gridWidth.value; width ++) {
            const newColumn = document.createElement('td'); //Create individual cells within above row
            newRow.appendChild(newColumn);
        }
        pixelTable.appendChild(newRow);
    }
    pixelTable.addEventListener('click', respondToPixelArt);

    
}
