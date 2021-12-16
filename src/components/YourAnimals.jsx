import React, { useContext } from 'react';
import { useContext } from 'react/cjs/react.development';
import { GlobalContext } from '../context/GlobalState';

function YourAnimals() {

    const { animalTransfers } = useContext(GlobalContext);

    const animals = animalTransfers.map(animalTransfer => animalTransfer.animal);
    const total = animals.reduce((acc, item) => (acc += item) , 0).toFixed(2);

    return (
        <div>
            <h4>Your Animals</h4>
            <h1 id="balance">{total}</h1>
        </div>
    )
}

export default YourAnimals;
