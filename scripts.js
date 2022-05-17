const moves = ['rock','paper','scissors'];
let playerMove = 0

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
            return `You lost, ${moves[computerSelection]} beats ${playerSelection.toLowerCase()}`;
        }else{
            return `You won, ${playerSelection.toLowerCase()} beats ${moves[computerSelection]}`;
        }
    }else if (move_diff**2 == 4){
        if (move_diff < 0){
            return `You won, ${playerSelection.toLowerCase()} beats ${moves[computerSelection]}`;
        }else{
            return `You lost, ${moves[computerSelection]} beats ${playerSelection.toLowerCase()}`;
        }
    }
}