import React from 'react';
import { GlobalContext } from '../context/GlobalState';

function InAndOutAnimals() {

const animals = animalTransfers.map(animalTransfer => animalTransfer.animal);

const incomingAnimals = animals
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

const outcomingAnimals = (
  animals.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);        

    return (
    <div className="inc-exp-container">
     <div>
       <h4>Incoming Animals</h4>
       <p className="money plus">{incomingAnimals}</p>
     </div>
     <div>
       <h4>Outcoming</h4>
       <p className="money minus">{outcomingAnimals}</p>
     </div>
    </div>
    )
}

export default InAndOutAnimals;
