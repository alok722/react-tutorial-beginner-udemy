import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, There !!!</h1>
        <Person firstName = 'Alok' secondName = 'Harshita'/>
        <Person firstName = 'Harshita' secondName = 'Alok'/>
      </div>
    );
  }
}

export default App;
