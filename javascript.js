const container = document.querySelector('.container');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let response = prompt('How much squares per side (max 100)?');

    responseNumber = parseInt(response);

    if (responseNumber > 100) {
        responseNumber = 100;
    };

    const square = document.querySelectorAll('.square');

    square.forEach(square => {
        square.remove();
    });

    createGrid(responseNumber*responseNumber);

    newSquareWidth = 960/responseNumber;

    const newSquare = document.querySelectorAll('.square');

    newSquare.forEach(newSquare => {
        newSquare.style.width = newSquareWidth+'px';
        newSquare.style.height = newSquareWidth+'px';
    });

});


function createGrid(numberOfSquares) {
    for (let index = 0; index < numberOfSquares; index++) {
        let square = document.createElement('div');
    
        square.className = 'square';
        container.appendChild(square);
     
    }
};

createGrid(256);

