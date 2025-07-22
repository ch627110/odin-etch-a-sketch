// script.js
const title = document.querySelector('#title')
const container = document.querySelector('#container')

createGrid(16);

function createGrid(val) {
    const grid = document.createElement('div')
    grid.classList.add('grid');
    container.appendChild(grid)
    for(let row = 0; row < val; row++) { 
        // create a horizontal flex box
        const rowBox = document.createElement('div')
        rowBox.classList.add('row')
        grid.appendChild(rowBox)
        for(let col = 0; col < val; col++) {
            // insert squares
            const square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseover', (event => {
                square.setAttribute('style', 'background-color:black')
            }))
            rowBox.appendChild(square)
        }
    }
}