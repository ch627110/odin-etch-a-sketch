// script.js

const container = document.querySelector('#container')

// create a grid of 16x16 square divs using flexbox
for(let row = 0; row < 16; row++) { 
    // create a horizontal flex box
    const rowBox = document.createElement('div')
    rowBox.classList.add('row')
    container.appendChild(rowBox)
    for(let col = 0; col < 16; col++) {
        // insert 16 squares
        const square = document.createElement('div')
        square.classList.add('square')
        rowBox.appendChild(square)
    }
}

// or create a flexbox with the correct row and cols then insert row x col squares

// set up a 'hover' effect so that the grid divs change colors
// when your mouse passes over them
    // hovering is what happens when your mouse enters a div and ends
    // when your mouse leaves it, you can set event listeners for either of
    // those event as a starting point
        // add a new class to the div or change the div's background color
        // using javascript

// add a button on the top of the screen that will send the user a popup
// asking for the number of squares per side for the new grid. once entered,
// the existing grid should be removed, and a new grid should be generated in
// the same total space as before
    // set the limit for the user input to 100
    // research button tags in HTML and how you can make a javascript run
    // check out prompt()
    // you should be able to enter 64 and have a brand new 64x64 grid pop up
    // without changing the total amount of pixels used

// push the project to github