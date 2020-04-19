import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { firstName: 'Alok', secondName: 'Harshita' },
      { firstName: 'Harshita', secondName: 'Alok' },
      { firstName: 'A', secondName: 'B' }
    ],
  });
  const [otherState, setOtherState] = useState({
    otherState: 'Some other values'
  });

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log('Clicked !!!')
    // Don't do this: personState.persons[0].firstName = 'Alok Raj';
    setPersonState({
      persons: [
        { firstName: 'Alok Raj', secondName: 'Harshita Kumari' },
        { firstName: 'Harshita Kumari', secondName: 'Alok Raj' },
        { firstName: 'AA', secondName: 'BB' }
      ],
    }) // We can use useState as many as time, so we can define multiple state so it wont affect other state
  }

  return (
    <div className="App">
      <h1>Hello, There !!!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person firstName={personState.persons[0].firstName} secondName={personState.persons[0].secondName} />
      <Person firstName={personState.persons[1].firstName} secondName={personState.persons[1].secondName} />
      <Person firstName={personState.persons[2].firstName} secondName={personState.persons[2].secondName}>This is a child prop.</Person>
    </div>
  );
}

export default app;

