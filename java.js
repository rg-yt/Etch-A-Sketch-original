const playWindow = document.querySelector('.play-window');
const button = document.querySelector('button');

button.addEventListener('click', createSquares);

function buttonNumber() {
    number = prompt("Enter a number less than or equal to 100!");
    while (number > 100) {
        number = prompt("Enter a number less than or equal to 100!");
    }
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
        if(x == 0){
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px ; border-radius: 10px 0 0 0`;
        }else if(x == number-1){
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px ; border-radius: 0 10px 0 0`;
        }else if(x== number*number-1){
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px; border-radius: 0 0px 10px 0`;
        }else if(x == number * number - number) {
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px; border-radius: 0 0px 0 10px`;
        }else{
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px;`
        }
        
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



