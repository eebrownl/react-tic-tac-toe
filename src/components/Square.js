
import React from 'react'

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '2rem',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
}

function Square({ value, onClick }) {
    return(
        <button onClick={onClick} style={style}>
            {value}
        </button>
    ) 
}

export default Square