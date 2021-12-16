import React, { useState } from 'react'

function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input value={text} onChange= {() => setText()} type="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input value={amount} onChange= {() => setAmount()} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
    )
}

export default AddTransaction;
