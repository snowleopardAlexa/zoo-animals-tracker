import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transfer({ animalTransfer }) {

    const { deleteAnimalTransfer } = useContext(GlobalContext)

    const sign = animalTransfer.animal < 0 ? '-' : '+';

    return (
        <li className={animalTransfer.animal < 0 ? 'minus' : 'plus'}>
            {animalTransfer.text} <span>{sign}{animalTransfer.animal}</span>
            <button onClick={() => deleteAnimalTransfer} className="delete-btn">x</button>
        </li>
    )
}

export default Transfer;
