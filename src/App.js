import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';

const App = () => {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
    </div>
  );
};

export default App;

