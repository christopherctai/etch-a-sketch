let numberOfSquares = 30;
const grid = document.querySelector('.grid-container'); 


function squareNumber (number) {
    return number *= number;
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

