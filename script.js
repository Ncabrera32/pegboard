let color = "black";
let click = true;
let colors = ['red', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 
'black', 'black', 'black', 'black', 'black', 'black', 'green'];

function populateBoard(size){
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach(div => div.remove());
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
let amount = size * size
for(let i = 0; i < amount; i++) {
let square = document.createElement("div");
square.addEventListener("click", colorSquare);
    square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    board.insertAdjacentElement("beforeend", square);
    board.appendChild(square).className = "target";
}
}

populateBoard(16);

function changeSize(input) {
    if (input >= 6 && input <= 23) {
      document.querySelector(".error").style.display = "none";
      populateBoard(input);
    } else {
      document.querySelector(".error").style.display = "flex";
    }
  }

function colorSquare(){
if (click) {
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(div => div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]);
}