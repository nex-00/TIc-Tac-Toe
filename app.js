let input = document.querySelector("#name-input");
const board = document.querySelector("#board");
const playAgain = document.querySelector("#playAgainButton");
const winner = document.querySelector("#winner");
const playerInput = document.querySelector("#player-input");
const player1Name = document.querySelector("#player1name");
const player2Name = document.querySelector("#player2name");
const nameReset = document.querySelector(".namereset");

let gameState = {
    players: ["X", "O"],
    board: [
           [null, null, null],
           [null, null, null],
           [null, null, null]
    ],
    currentPlayer: "X",
    player1: null,
    player2: null,
    gameState: "playing"
};



input.addEventListener("submit", function (e) {
  e.preventDefault();
  gameState.player1 = e.target[0].value;
  gameState.player2 = e.target[1].value;
  e.target[0].value = "";
  e.target[1].value = "";
  renderNames()
})

nameReset.addEventListener("click", function (e){
  gameState.player1 = null;
  gameState.player2 = null;
  renderNames()
})

function renderNames(){
  player1Name.innerText = gameState.player1;
  player2Name.innerText = gameState.player2;
}

playAgain.addEventListener("click", function (e) {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
    winner.innerText = "";
    renderBoard();
});
  
function switchPlayers() {
  if (gameState.currentPlayer === "X") {
   gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}
  
function renderBoard() {
   for (let i = 0; i < gameState.board.length; i++) {
    for (let j = 0; j < gameState.board[i].length; j++) {
      const currentCell = document.getElementById(`${i}${j}`)
      currentCell.innerText = gameState.board[i][j]
    }
  }
}

board.addEventListener("click", function (e) {
  const rowIdx = e.target.id[0];
  const colIdx = e.target.id[1];
  if (gameState.board[rowIdx][colIdx] === null) {
    gameState.board[rowIdx][colIdx] = gameState.currentPlayer;
     if (checkDraw() !== true && checkWinX() !== true) {
       switchPlayers();
    }
  }

  renderBoard();

  if (checkWinO() === true) {
    winner.innerText = "O wins!";
  } else if (checkWinX() === true) {
    winner.innerText = "X wins!";
  } else if (checkDraw() === true) {
    winner.innerText = "Draw";
  }
});
  
function checkDraw(){
  for(let i of gameState.board){
    if(i.includes(null)){
      return false;
    }
  }
  return true;
}

function storeRow0() {
  let arr = gameState.board[0];
  return arr
}

function storeRow1() {
  let arr = gameState.board[1];
  return arr
}

function storeRow2() {
  let arr = gameState.board[2];
  return arr
}

function storeColumn0() {
  let arr = [];
  for(let i=0; i < gameState.board.length; i++){
    let num = gameState.board[i][0];
    arr.push(num);
  }
  return arr
}

function storeColumn1() {
  let arr = [];
  for(let i=0; i < gameState.board.length; i++){
    let num = gameState.board[i][1];
    arr.push(num);
  }
  return arr
}

function storeColumn2() {
  let arr = [];
  for(let i=0; i < gameState.board.length; i++){
    let num = gameState.board[i][2];
    arr.push(num);
  }
  return arr
}

function storeDiagDown() {
  let arr = [];
  for(let i=0; i < gameState.board.length; i++){
    let num = gameState.board[i][i];
    arr.push(num)
  }
  return arr
}

function storeDiagUp() {
  let arr = [];
  for(let i=gameState.board.length-1; i >= 0; i--){
    let num = gameState.board[i][gameState.board.length-1-i];
    arr.push(num)
  }
  return arr
}

function validateO(arr) {
  let win = ["O", "O", "O"]
  for(let i=0; i < arr.length; i++){
    if(arr[i] !== win[i]){
      return false
    }
  }
  return true
}

function validateX(arr) {
  let win = ["X", "X", "X"]
  for(let i=0; i < arr.length; i++){
    if(arr[i] !== win[i]){
      return false
    }
  }
  return true
}

function checkWinO(){
  if(validateO(storeRow0()) === true){
    return true
  }
  if(validateO(storeRow1()) === true){
    return true
  }
  if(validateO(storeRow2()) === true){
    return true
  }
  if(validateO(storeColumn0()) === true){
    return true
  }
  if(validateO(storeColumn1()) === true){
    return true
  }
  if(validateO(storeColumn2()) === true){
    return true
  }
  if(validateO(storeDiagUp()) === true){
    return true
  }
  if(validateO(storeDiagDown()) === true){
    return true
  }
}

function checkWinX(){
  if(validateX(storeRow0()) === true){
    return true
  }
  if(validateX(storeRow1()) === true){
    return true
  }
  if(validateX(storeRow2()) === true){
    return true
  }
  if(validateX(storeColumn0()) === true){
    return true
  }
  if(validateX(storeColumn1()) === true){
    return true
  }
  if(validateX(storeColumn2()) === true){
    return true
  }
  if(validateX(storeDiagUp()) === true){
    return true
  }
  if(validateX(storeDiagDown()) === true){
    return true
  }
}