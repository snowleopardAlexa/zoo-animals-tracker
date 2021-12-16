import React from 'react'

function Transfer({ animalTransfer }) {

    const sign = animalTransfer.animal < 0 ? '-' : '+';

    return (
        <li className={animalTransfer.animal < 0 ? 'minus' : 'plus'}>
            {animalTransfer.text} <span>{sign}{animalTransfer.animal}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transfer;
