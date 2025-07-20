// script.js
const container = document.querySelector('#container')

// create a grid of 16x16 square divs using flexbox
let val = 60;
for(let row = 0; row < val; row++) { 
    // create a horizontal flex box
    const rowBox = document.createElement('div')
    rowBox.classList.add('row')
    container.appendChild(rowBox)
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