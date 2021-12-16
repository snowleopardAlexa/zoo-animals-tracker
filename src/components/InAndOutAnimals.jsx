import React from 'react'

function InAndOutAnimals() {
    return (
    <div>
     <h3>Add new animal</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Animal <br />
            (negative - out, positive - in)</label
          >
          <input type="number" id="animal" placeholder="Type animal..." />
        </div>
        <button class="btn">Add Animal</button>
      </form>
        </div>
    )
}

export default InAndOutAnimals;
