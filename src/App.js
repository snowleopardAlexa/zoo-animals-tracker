import React, { useState } from 'react';
import './App.css';

function App() {

  const [notes] = useState([
    {
      title: "First note",
      description: "This is my first note",
      done: false
    }
  ]);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => {
        return (
          <div>
            <h1>{note.title}</h1>
            <h3>{note.description}</h3>
            <p>{note.done ? "done!" : "not done!"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
