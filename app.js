const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = cell.getAttribute('data-cell-index');

  if (gameActive && !cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      gameActive = false;
      alert(`${currentPlayer} wins!`);
    } else if (isBoardFull()) {
      gameActive = false;
      alert('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winConditions.some((condition) => {
    const [a, b, c] = condition;
    return cells[a].textContent &&
           cells[a].textContent === cells[b].textContent &&
           cells[a].textContent === cells[c].textContent;
  });
}

function isBoardFull() {
  return [...cells].every(cell => cell.textContent);
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));