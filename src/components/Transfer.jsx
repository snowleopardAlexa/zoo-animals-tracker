import React from 'react'

function Transfer({ animalTransfer }) {

    const sign = animalTranser.animal < 0 ? '-' : '+';

    return (
        <li className="minus">
            {animalTransfer.text} <span>{sign}{animalTransfer.animal}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transfer;
