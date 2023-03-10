import React from 'react'
import Square from './Square'

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '400px',
    height: '400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

function Board({ squares, onClick }) {
    return(
        <div style={style}>
          {squares.map((square, i) => {
            return <Square key={i} value={square} onClick={() => onClick(i)} />
          })}
        </div>
    ) 
}

export default Board