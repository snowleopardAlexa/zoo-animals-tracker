import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AnimalTransferList() {

    const { animalTransfers } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {animalTransfers.map(animalTransfer => (<li className="minus">
                    {animalTransfer.text} <span>-1</span><button className="delete-btn">x</button>
                    </li>))}
                Animal <span>Snow Leopard</span><button class="delete-btn">x</button>
            </ul>
        </div>
    )
}

export default AnimalTransferList;
