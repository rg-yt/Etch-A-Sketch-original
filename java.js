const playWindow = document.querySelector('.play-window');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');

button1.addEventListener('click', createSquares);
button2.addEventListener('click', toggleOutline);
button3.addEventListener('click', eraser);
button4.addEventListener('click', draw);

function buttonNumber() {
    number = prompt("Enter a number less than or equal to 100!");
    while (number > 100) {
        number = prompt("Enter a number less than or equal to 100!");
    }
    return number;
}
function draw() {
    const color = document.querySelectorAll('.play-window>div');
    color.forEach((colors) => {
        colors.addEventListener('mouseover', (e) => {
            e.target.style.background = 'gray';
        });
    });
}
function eraser() {
    const remove = document.querySelectorAll('.play-window>div');
    const playWindow = document.querySelector('.play-window');
    remove.forEach((removes) => {
        removes.addEventListener('mouseover', (e) => {
            e.target.style.background = playWindow.style.background;
        });
    });
}

function toggleOutline() {
    const color = document.querySelectorAll('.play-window>div');
    color.forEach((colors) => {
        colors.classList.toggle('squares');
    });

}

//code to create squares for drawing 
function createSquares() {

    buttonNumber();

    //Removes the squares while there are any squares in the play window. 
    while (playWindow.firstChild) {
        playWindow.removeChild(playWindow.firstChild);
    }

    for (let x = 0; x < number * number; x++) {
        const squares = document.createElement('div');
        playWindow.appendChild(squares);
        if (x == 0) {
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px ; border-radius: 10px 0 0 0`;
        } else if (x == number - 1) {
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px ; border-radius: 0 10px 0 0`;
        } else if (x == number * number - 1) {
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px; border-radius: 0 0px 10px 0`;
        } else if (x == number * number - number) {
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px; border-radius: 0 0px 0 10px`;
        } else {
            squares.style.cssText = `width:${600 / number}px; height: ${600 / number}px;`
        }

        squares.classList.add('squares');
    };

    //Add mouseover even listener to all div's in playWindow
    draw();
}





