import React, { useState } from 'react';
import './App.css';
import Note from './Note';


const App = () => {
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
      {notes.map(({ title, description, done }) => {
        return <Note title={title} description={description} done={done} />;
      })}
    </div>
  );
};

export default App;

