import React, { useState } from 'react'
import Board from './Board'
import {calculateWinner} from '../helpers'

const styles = {
    width: '300px',
    margin: '20px auto'
}




function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)

    const winner = calculateWinner(board)


    const currentPlayer = xIsNext ? 'X' : 'O'


    const handleClick = (i) => {
       const boardCopy = [...board]
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);  
        setXisNext(!xIsNext)
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start New Game
        </button>
    }

    return(
        <>
          <Board squares={board} onClick={handleClick} />
          <div style={styles}>
            <p>{winner ? `Winner is ${winner}` : `Next player: ${currentPlayer}`}</p>
            {renderMoves()}
          </div>
        </>
        

    ) 
}

export default Game