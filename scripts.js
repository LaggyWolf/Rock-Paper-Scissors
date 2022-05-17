const moves = ['Rock','Paper','Scissors'];

function computerPlay(){
    let moveNum = Math.floor(Math.random() * 3);
    return moves[moveNum];
}

