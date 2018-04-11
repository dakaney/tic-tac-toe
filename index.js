const prompt = require('prompt');

const Board = (board, currentPlayer = true) => {
  board = board || [' ',' ',' ',' ',' ',' ',' ',' ',' '];
  printBoard(board, currentPlayer);
  prompt.get(['value'], (err, result) => {
    if (err) {
      console.log(err);
    } else if (board[result.value] !== ' ' || (result.value > 9 || result.value < 0)) {
      console.log('invalid selection');
      Board(board, currentPlayer);
    } else {
      board[result.value] = currentPlayer ? 'X' : 'O';
      currentPlayer = !currentPlayer;
      if(checkWinner(board, currentPlayer ? 'O' : 'X')){
        console.log(`winner winner chicken dinner for ${currentPlayer ? 'O' : 'X'}!`)
      } else {
        Board(board, currentPlayer);
      }
    }
  })
}

const printBoard = (board, currentPlayer) => {
  console.log('');
  console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
  console.log('__________');
  console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
  console.log('__________');
  console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
  console.log(`Current Player: ${currentPlayer ? 'X': 'O'}`)
}

const checkWinner = (board, player) => {
  let result = board.map(item => {
    if (item === player) {
      return true;
    } else {
      return false;
    }
  })
  if (result[0] && result[1] && result[2]) {
    return true;
  } else if (result[3] && result[4] && result[5]) {
    return true;
  } else if (result[6] && result[7] && result[8]) {
    return true;
  } else if (result[0] && result[3] && result[6]) {
    return true;
  } else if (result[1] && result[4] && result[7]) {
    return true;
  } else if (result[2] && result[5] && result[8]) {
    return true;
  } else if (result[0] && result[4] && result[8]) {
    return true;
  } else if (result[6] && result[4] && result[2]) {
    return true;
  }
}

Board();