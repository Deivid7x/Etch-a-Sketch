const container = document.querySelector('.container');

for (let index = 0; index < 256; index++) {
    let square = document.createElement('div');

    square.className = 'square';
    container.appendChild(square);
 
}