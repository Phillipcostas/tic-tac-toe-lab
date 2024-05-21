/*-------------------------------- Constants --------------------------------*/
const players = ['x', 'o']
const winningCombos= [
    [0 ,1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
let board = ['' , '' , '' , '' , '' , '' , '' , '' , ''];
let turn = 'x'
let winner = false;
let tie = false;
let currentBoard = ['' , '' , '' , '' , '' , '' , '' , '' , ''];


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");




/*-------------------------------- Functions --------------------------------*/

const init = () => {
    document.querySelector('').addEventListener('click', play);
    render()
};

const squares = document.querySelectorAll('.sqr')


const placePiece = (e) => {
    
    board[e.target.id] = turn
    
    currentBoard[e.target.id] = e.target.id
    for ( let i = 0; i < squares.length; i++) {
     
        squares[i].innerText = board[i]
    } 
    if (turn === 'x') {
        turn = 'o'
    } else {
        turn = 'x'
    }
    checkForWinner(e)
    updateMessage()


}
squares.forEach(function (button) {
    button.addEventListener('click', placePiece);
 
  })

const updateBoard = () => {
    board.forEach((square, index) => {
        squareEls[index].textContent = square
       
    })
}

let message = ''

const updateMessage = () => {
    if (winner === false && tie === false) {
        message = `It is ${turn}'s turn`
    } else if (winner === false && tie === true) {
        message = 'The result is a tie!'
    } else { message = "Congradulations you won!!!"} 
messageEl.innerText = message

}

const render = () => {
    updateBoard()
    updateMessage()
}

const handleClick = (e) => {
    e.target.indexOf[e]
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    
}

 const checkForWinner = (e) => { 
   
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const one = combo[0]
            const two = combo[1]
            const three = combo[2]
        if (board[one] !== '' &&  board[one] === board[two] && board[one] === board[three])  {
            winner = true
         console.log("winner")
          }
        }   
    }
 
    const checkForTie = (e) => {
        if (winner = true) 
            return 'winner';
      else {
    for(let i = 0; i < board.length; i++) {
        if (board.length === '')
            tie = false
        console.log("tie")
        } 
    
    for (let i = 0; i === board.length; i++) 
        if (board.length === 'x' || board.length === 'o')
            tie = true  
        console.log("tie")
            return 'tie'
        }
    }
    
     const resetBtnEl = () => document.querySelector('').addEventListener('click' , init(reset))

render(board)


 


/*----------------------------- Event Listeners -----------------------------*/




