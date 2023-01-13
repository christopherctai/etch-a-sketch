let numberOfSquares = 2;
const grid = document.querySelector('.grid-container');


function squareNumber (number) {
    return number *= number;
}

grid.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;

for (let i = 1; i <= squareNumber(numberOfSquares); i++) {
    let square = document.createElement('div');
    grid.appendChild(square);
} 