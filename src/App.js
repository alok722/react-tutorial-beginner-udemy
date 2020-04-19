import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {firstName : 'Alok', secondName : 'Harshita'},
      {firstName : 'Harshita', secondName : 'Alok'},
      {firstName : 'A', secondName : 'B'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, There !!!</h1>
        <button>Switch Name</button>
        <Person firstName = {this.state.persons[0].firstName} secondName = {this.state.persons[0].secondName}/>
        <Person firstName = {this.state.persons[1].firstName} secondName = {this.state.persons[1].secondName}/>
        <Person firstName = {this.state.persons[2].firstName} secondName = {this.state.persons[2].secondName}>This is a child prop.</Person>
      </div>
    );
  }
}

export default App;
