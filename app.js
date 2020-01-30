const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFULT_USER_CHOICE} for you`);
    return DEFULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice = DEFULT_USER_CHOICE) => {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
  const computerSelection = getComputerChoice();

  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }

  winner = getWinner(computerSelection, playerSelection);
  console.log(winner);

  let message = `You picked ${
    playerSelection ? playerSelection : DEFULT_USER_CHOICE
  }, computer picked ${computerSelection}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') sum += validateNumber(num);
    else sum -= validateNumber(num);
  }
  return resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  'fda',
  -3,
  6,
  10
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);
