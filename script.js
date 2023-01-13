
let resetButton = document.querySelector('.reset-grid');
resetButton.addEventListener('click', resetGrid);

let newButton = document.querySelector('.new-grid');
newButton.addEventListener('click', newGrid);

function newGrid() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.classList.remove('hover');  
    });
}

function resetGrid() {
    const grid = document.querySelector('.grid-container'); 
    grid.textContent = '';
    let numberOfSquares = prompt("How many squares do you want per side on the grid?");
    if (numberOfSquares > 100) {
        alert("Too many! Choose a number 100 or smaller");
        return;
    }

    grid.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;

    for (let i = 1; i <= squareNumber(numberOfSquares); i++) {
        let square = document.createElement('div');
        square.classList.add('grid-item');

        grid.appendChild(square);
    } 

    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => { 
            gridItem.classList.add('hover');  
        }); 
    });
}

function squareNumber (number) {
    return number *= number;
}