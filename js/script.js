// predefined straddling checkerboards
function Checkerboard(row1, row2, row3, row4, rowId) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.rowId = rowId;
}

let checkerboard01 = new Checkerboard(
  "AT ONE SIR",
  "BCDFGHJKLM",
  "PQUVWXYZ/#",
  "",
  "26"
);
let checkerboard02 = new Checkerboard(
  "ESTONIA   ",
  "BCDFGHJKLM",
  "PQRUVWXYZ#",
  " .,'?!/+-=",
  "789"
);

// activates selected checkerBoard, using fallback if none or incorrect selected
function checkerboardSelector(myCheckerboard) {
  let fallback = checkerboard01;
  for (var i = 0; i < Checkerboard.length; i++) {
    let currentBoard = Checkerboard[i];
    if (currentBoard === myCheckerboard) {
      activeCheckerboard = currentBoard;
      break;
    }
    if (myCheckerboard !== Checkerboard[i]) {
      activeCheckerboard = fallback;
    }
  }
  return activeCheckerboard;
}

// converts each letter of string its number defined in selected checkerboard
function letterToNum(letter, activeCheckerboard) {
  let num;
  for (let i = 0; i < activeCheckerboard.row1.length; i++) {
    if (i === activeCheckerboard.row1.indexOf(letter)) {
      num = activeCheckerboard.row1.indexOf(letter);
    } else if (i === activeCheckerboard.row2.indexOf(letter)) {
      num =
        activeCheckerboard.rowId[0] +
        activeCheckerboard.row2.indexOf(letter).toFixed();
    } else if (i === activeCheckerboard.row3.indexOf(letter)) {
      num =
        activeCheckerboard.rowId[1] +
        activeCheckerboard.row3.indexOf(letter).toFixed();
    } else if (i === activeCheckerboard.row4.indexOf(letter)) {
      num =
        activeCheckerboard.rowId[2] +
        activeCheckerboard.row4.indexOf(letter).toFixed();
    }
  }
  return num;
}

// converts string of text to string of numbers using selected checkerboard
function straddlingCheckerboard(str, myCheckerboard) {
  // <- str = the text to encrypt, checkerboard = the table used
  let activeCheckerboard = myCheckerboard;
  activeCheckerboard = checkerboardSelector(myCheckerboard);
  str = str.toUpperCase();
  str = str.replace(/[^A-Z #]/g, ""); // add or exclude characters as required by checkerboard
  let numString = "";
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    current = letterToNum(current, myCheckerboard);
    numString += current;
  }
  return numString;
}

// use below for testing functionality
let encrypted = straddlingCheckerboard(
  "hello my name is lucifer i am the bringer of light",
  checkerboard02
); // <- use this line to enter text and select checkerboard
console.log(encrypted);
