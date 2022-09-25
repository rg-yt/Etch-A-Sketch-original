const playWindow = document.querySelector('.play-window');
const squares = document.createElement('div');

    
//code to create squares for drawing 
for(let x = 0; x < 256; x++){
    const squares = document.createElement('div');  
    playWindow.appendChild(squares);
    squares.classList.add('squares');
}

//code to recolor squares 
const color = document.querySelectorAll('.squares');

color.forEach((colors) => {
    colors.addEventListener('mouseover' , (e) => {
        e.target.style.background = 'gray';
    });
    
  });
