import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import YourAnimals from './components/YourAnimals';
import AnimalTransferList from './components/AnimalTransferList';
import AddAnimal from './components/AddAnimal';
import InAndOutAnimals from './components/InAndOutAnimals';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
    <Header />
    <div>
      <YourAnimals />
      <InAndOutAnimals />
      <AnimalTransferList />
      <AddAnimal />
    </div>
    </GlobalProvider>
  );
};

export default App;

