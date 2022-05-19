const moves = ['rock','paper','scissors'];
let playerMove = 0;
let playerScore = 0;
let computerScore = 0;
let gameState = '';


function computerPlay(){
    let moveNum = Math.floor(Math.random() * 3);
    return moveNum;
}


function playRound(playerSelection,computerSelection){
    for (let move in moves){
        if (playerSelection.toLowerCase() == moves[move]){
            playerMove = move;
        };
    };

    if (playerMove == computerSelection){
        return "It's a tie!";
    }

    let move_diff = playerMove - computerSelection;

    if (move_diff**2 == 1){
        if (move_diff < 0){
            computerScore += 1;
            return `You lost, ${moves[computerSelection]} beats ${playerSelection.toLowerCase()}`;
        }else{
            playerScore += 1;
            return `You won, ${playerSelection.toLowerCase()} beats ${moves[computerSelection]}`;
        }
    }else if (move_diff**2 == 4){
        if (move_diff < 0){
            playerScore += 1;
            return `You won, ${playerSelection.toLowerCase()} beats ${moves[computerSelection]}`;
        }else{
            computerScore += 1;
            return `You lost, ${moves[computerSelection]} beats ${playerSelection.toLowerCase()}`;
        }
    }
}


const winText = document.querySelector('#winText');
const winnerText = document.querySelector('#winnerText');
const movesButton = document.querySelector('.moves-container');

function toggleHide(){
    if (movesButton.style.display == 'block'){
        movesButton.style.display = 'none';
    }else{
        playerScore = 0;
        computerScore = 0;
        playerScoreText.innerHTML = `Player: ${playerScore}`;
        computerScoreText.innerHTML = `Computer: ${computerScore}`;
        movesButton.style.display = 'block';
    };

    if (winText.style.display == 'block'){
        winText.style.display = 'none';
    }else{
        winText.style.display = 'block';
    };
}


function win(winner){
    console.log('toggle')
    winnerText.innerHTML = `${winner} Won!`;
    toggleHide();
    if (movesButton.style.display == 'block'){
        
    };
}


const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const roundText = document.querySelector('.round-text');

function game(playerSelection,computerSelection){

    roundText.innerHTML = playRound(playerSelection,computerSelection);

    if (playerScore >= 5){
        win('Player');

    }else if (computerScore >= 5){
        win('Computer');
    };

    playerScoreText.innerHTML = `Player: ${playerScore}`;
    computerScoreText.innerHTML = `Computer: ${computerScore}`;
}







