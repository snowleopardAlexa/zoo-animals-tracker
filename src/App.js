import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './components/AnimalTransferList';
import AddTransaction from './components/AddAnimal';

const App = () => {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default App;

