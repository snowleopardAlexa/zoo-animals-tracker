import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './components/TransactionList';

const App = () => {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </div>
  );
};

export default App;

