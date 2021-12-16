import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transfer } from './Transfer';

function AnimalTransferList() {

    const { animalTransfers } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {animalTransfers.map(animalTransfer => (
                    <Transfer key={animalTransfer.id} animalTransfer={animalTransfer} />
                ))}
            </ul>
        </div>
    )
}

export default AnimalTransferList;
