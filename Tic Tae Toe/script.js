let cells = document.querySelectorAll(".cell");
let player = document.querySelector(".player");
let restartBtn = document.querySelector(".restart-game");
let playerTurn = "X";
let gameOver = false;
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
      gameOver = true;
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
  cell.addEventListener("click", async () => {
    if (cell.innerHTML !== "") return;

    cell.innerHTML = playerTurn;
    count++;

    checkForWin();

    playerTurn = playerTurn == "X" ? "O" : "X";
    player.innerHTML = `${playerTurn}'s turn`;
    if (!gameOver && count == 9) {
      alert("Draw!");
      inactiveCells();
    }
  });
});

restartBtn.addEventListener("click", () => {
  location.reload();
});
