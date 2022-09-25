const playWindow = document.querySelector('.play-window');
const button = document.querySelector('button');

button.addEventListener('click', createSquares);

function buttonNumber() {
    number = prompt('Enter a number!');
    return number;
}

//code to create squares for drawing 
function createSquares() {
    
    buttonNumber();
    
    //Removes the squares while there are any squares in the play window. 
    while(playWindow.firstChild){
        playWindow.removeChild(playWindow.firstChild);
    }
    
    for (let x = 0; x < number * number; x++) {
        const squares = document.createElement('div');
        playWindow.appendChild(squares);
        squares.style.cssText = `width:${800 / number}px; height: ${800 / number}px`;
        squares.classList.add('squares');
    };
    
    //Add mouseover even listener to all div's in playWindow
    const color = document.querySelectorAll('.squares');
    color.forEach((colors) => {
        colors.addEventListener('mouseover', (e) => {
            e.target.style.background = 'gray';
        });
    }); 
}



