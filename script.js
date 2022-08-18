function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      //cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);
  
  var colors = ['red', 'black', 'green', 'black', 'black', 'black', 'black', 'black', 'black', 'black','black', 'black', 'black', 'black','black', 'black'];
  var boxes = document.querySelectorAll(".grid-item");
  var button = document.querySelector("button");
  
  button.addEventListener("click", function () {
    for (i = 0; i < boxes.length; i++) {
      // Pick a random color from the array 'colors'.
      boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
  });
  
  button.style.cursor = "pointer";