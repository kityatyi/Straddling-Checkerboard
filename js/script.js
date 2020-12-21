// predefined straddling checkerboards
const alpha = {
  row1: "AT ONE SIR",
  row1id: "0123456789",
  row2: "BCDFGHJKLM",
  row2id: "2",
  row3: "PQUVWXYZ #",
  row3id: "6",
};

const beta = {
  row1: "ESTONIA R ",
  row1id: "0123456789",
  row2: "BCDFGHJKLM",
  row2id: "7",
  row3: "PQUVWXYZ #",
  row3id: "9",
};

const gamma = {
  row1: "RAT  NOISE",
  row1id: "0123456789",
  row2: "BCDFGHJKLM",
  row2id: "3",
  row3: "PQUVWXYZ #",
  row3id: "4",
};

// activates selected checkerBoard, using fallback if none or incorrect selected
function checkerBoardSelector(checkerBoardName) {
  let availableBoards = [alpha, beta, gamma];
  let fallback = alpha;
  for (var i = 0; i < availableBoards.length; i++) {
    currentBoard = availableBoards[i];
    if (currentBoard === checkerBoardName) {
      checkerBoard = currentBoard;
      break;
    }
    if (checkerBoardName !== availableBoards[i]) {
      checkerBoard = fallback;
    }
  }
  return checkerBoard;
}

// converts each letter of string its number defined in selected checkerboard
function letterToNum(letter, checkerBoard) {
  let num;
  for (let i = 0; i < checkerBoard.row1.length; i++) {
    if (i === checkerBoard.row1.indexOf(letter)) {
      num = checkerBoard.row1id.charAt(checkerBoard.row1.indexOf(letter));
    } else if (i === checkerBoard.row2.indexOf(letter)) {
      num = checkerBoard.row2id + checkerBoard.row2.indexOf(letter).toFixed();
    } else if (i === checkerBoard.row3.indexOf(letter)) {
      num = checkerBoard.row3id + checkerBoard.row3.indexOf(letter).toFixed();
    }
  }
  return num;
}

// converts string of text to string of numbers using selected checkerboard
function toNum(str, boardInUse) {
  var boardInUse = checkerBoardSelector(boardInUse);
  str = str.toUpperCase();
  str = str.replace(/[^A-Z #]/g, ""); // add or exclude characters as required by checkerboard
  let numString = "";
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    current = letterToNum(current, boardInUse);
    numString += current;
  }
  return numString;
}

// use below for testing
let encrypted = toNum("enter text here", alpha);
console.log(encrypted);
