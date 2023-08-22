const Player = (name,symbol)=>{
    this.name = name;
    this.symbol = symbol;
    return {name,symbol}
}

let player1 = Player('Player1','X');
let player2 = Player('Player2','O');

const gameBoard = ()=>{
    let gameArray = [null,null,null,null,null,null,null,null,null];

    const winCheck = (symbol,position)=>{
        updateBoard(symbol,position);
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6]  // Diagonal from top-right to bottom-left
        ];
        
        for (const combination of winningCombinations) {
            if(gameArray[combination[0]] === symbol && gameArray[combination[1]] === symbol && gameArray[combination[2]] === symbol){
                return true;
            }
        }
        return false; 
    }

    const updateBoard = (symbol,position)=>{
        gameArray[position] = symbol; 
    };

    return { winCheck, gameArray };
}

const gameFlow = (()=>{
    const winnerEle = document.querySelector('.winner');
    const cells = document.querySelectorAll(".grid-item");
    const reset = document.getElementById('reset');
    let board = gameBoard();
    let turn = player1;
    let symbol = turn.symbol;
    let position;
    let gameOver = false;
    
    let gameState = ()=>{
        if(turn == player1){
            turn = player2;
            symbol = turn.symbol;
        }
        else if(turn == player2){
            turn = player1;
            symbol = turn.symbol;
        }
    }

    cells.forEach((cell)=>{
        cell.addEventListener('click',()=>{
            if(cell.innerHTML == '' && !gameOver){
                cell.innerHTML = symbol;
                position = cell.id;
                if(turn == player1){
                    cell.setAttribute('style', 'background-color:red; border: 4px solid white');
                }
                else if(turn == player2){
                    cell.setAttribute('style', 'background-color:green; border: 4px solid white');
                }

                if(board.winCheck(symbol,position)==true){
                    gameOver = true;
                    winner = turn.name;
                    winnerEle.setAttribute('style', 'visibility: visible');
                    winnerEle.innerHTML = `${winner} Wins`;
                }
                else{
                    gameState();    
                }
            }
        })
    })

    reset.addEventListener('click',()=>{
        gameOver = false;
        board = gameBoard();
        turn = player1;
        symbol = turn.symbol;
        position = null;
        winnerEle.setAttribute('style', 'visibility: hidden');
        cells.forEach((cell)=>{
            cell.innerHTML = '';
            cell.style = '';
        })
    })

})();