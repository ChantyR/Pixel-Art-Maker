// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const gridColor = document.querySelector('#colorPicker'); //Don't forget to use gridColor.value to access the hex color code
const sizePicker = document.querySelector('#sizePicker');
const mySubmit = document.querySelector("#sizePicker input[type='button']")
const pixelTable = document.querySelector('#pixelCanvas');

mySubmit.addEventListener('click', makeGrid);

function respondToPixelArt() {
    if(event.target.nodeName === 'TD') {
        event.target.setAttribute('style', 'background-color:' + gridColor.value); //Changes the background color of targeted cell within pixelTable
    }
}

function makeGrid () {
    while (pixelTable.firstChild) { //Checks if pixelTable has any children (grid cells) inside it. If it does, it removes it and then runs this code again.
        pixelTable.removeChild(pixelTable.firstChild);
    }

    const gridHeight = document.querySelector('#inputHeight');
    const gridWidth = document.querySelector('#inputWidth');
    if (gridHeight.value > 100 || gridWidth.value > 100) {
        gridHeight.value = 1
        gridWidth.value= 1
    }
    for (let height = 1; height <= gridHeight.value; height ++) { //Sets a loop to begin creating the grid cells. This loop corresponds to the the height of the user-inputted grid.
        const newRow = document.createElement('tr'); //Create an entire row of cells
        for (let width = 1; width <= gridWidth.value; width ++) { //Sets an inner loop to create cells equal to the width of the user-inputted grid.
            const newColumn = document.createElement('td'); //Create individual cells within the above row
            newRow.appendChild(newColumn);
        }
        pixelTable.appendChild(newRow);
    }
    pixelTable.addEventListener('click', respondToPixelArt); //Adds a listener to the pixelTable id. 
    

    
}
