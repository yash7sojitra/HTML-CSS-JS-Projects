let cells = document.querySelectorAll(".cell");
let player = document.querySelector(".player");
let restartBtn = document.querySelector(".restart-game");
let playerTurn = "X";
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;

const checkForWin = () => {
  winningPositions.forEach((positions) => {
    let check = positions.every((id) => cells[id].innerHTML == playerTurn);
    if (check) {
      highlightCells(positions);
      inactiveCells();
    }
  });
};

const highlightCells = (positions) => {
  positions.forEach((id) => {
    cells[id].classList.add("highlight");
  });
};

const inactiveCells = () => {
  cells.forEach((cell) => cell.classList.add("inactive"));
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML !== "") return;

    cell.innerHTML = playerTurn;

    checkForWin();

    console.log(count);
    //Checking the draw condition

    playerTurn = playerTurn == "X" ? "O" : "X";
    player.innerHTML = `${playerTurn}'s turn`;
    count++;
    if (count == 9) {
      alert("Draw!");
      inactiveCells();
    }
  });
});

restartBtn.addEventListener("click", () => {
  location.reload();
});
