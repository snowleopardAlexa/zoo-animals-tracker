import React, { useState } from 'react'

function AddTransaction() {

    const [text, setText] = useState('');
    const [animal, setAnimal] = useState(0);

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
            >Animal <br />
            (negative - out, positive - in)</label
          >
          <input value={animal} onChange= {() => setAnimal()} type="number" id="animal" placeholder="Enter animal..." />
        </div>
        <button class="btn">Add Animal</button>
      </form>
    </div>
    )
}

export default AddTransaction;
