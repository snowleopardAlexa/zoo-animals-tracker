import React from 'react';
import Title from './Title';
import Description from './Description';
import Done from './Done';

const Note = ({ title, description, done }) => {
    return (
      <div>
        <Title title={title} />
        <Description description={description} />
        <Done done={done} />
      </div>
    );
  };

  export default Note;