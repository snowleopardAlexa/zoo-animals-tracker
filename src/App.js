import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import YourAnimals from './YourAnimals';
import AnimalTransferList from './components/AnimalTransferList';
import AddAnimal from './components/AddAnimal';
import InAndOutAnimals from './components/InAndOutAnimals';

const App = () => {
  return (
    <div>
      <Header />
      <YourAnimals />
      <InAndOutAnimals />
      <AnimalTransferList />
      <AddAnimal />
    </div>
  );
};

export default App;

