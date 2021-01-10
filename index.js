// const X_CLASS = 'x'
// const CIRCLE_CLASS = 'circle'
// const WINNING_COMBINATIONS = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]


// function clearAllCells() {
//     const cells = document.getElementsByClassName("cell");
//     for (let x = 0; x < cells.length; x++) {
//         cells.item(x).classList.remove('x', 'circle');
//     }

// }

// document.getElementById('restartButton').addEventListener("click", clearAllCells);

// // Need to be able to handle a player "click" 
// // when somebody clicks in a cell, it should place the x or O for that turn (as well as hover)
// // 1) When a player clicks on cell, should place x or o
// // 2) When a player clicks on a cell, SHOULD change player turn
// // 3) Check for winner - 
// // 4) Check for draw - 

// function handlePlayerClick(event) {
//     if (whosTurn == 'x') {
//         event.target.classList.add('x');
//     } 
//     else {
//         event.target.classList.add('circle');
//     }
//     if (whosTurn == 'x') {
//         whosTurn = 'circle';
//     }
//     else {
//         whosTurn = 'x';
//     }
// }
//  const cells = document.getElementsByClassName("cell"); 
//      for (let cell = 0; cell < cells.length; cell++) {
//          cells.item(cell).addEventListener('click', handlePlayerClick)
//      }
 
//        // If cell, 0,1,2 all have the same symbol, then = win
// WINNING_COMBINATIONS.forEach(WINNING_COMBINATION => {
//     const cells = document.getElementsByClassName("cell");
//     const cells2Check = [];
//     WINNING_COMBINATION.forEach(currentValue, index => {
//         cells2Check.push(cells[currentValue])
//     }); 
//     if (cells2Check.every(cell => cell.className.contains('x'))) {
//         winner = 'x';
//     }
//     if (cells2Check.every(cell => cell.className.contains('circle'))) {
//         winner = 'circle';
//     }

// }) 

// var winner = null;
// var whosTurn = 'x';


