import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {firstName : 'Alok', secondName : 'Harshita'},
      {firstName : 'Harshita', secondName : 'Alok'},
      {firstName : 'A', secondName : 'B'}
    ],
    otherState: 'Some other values'
  }

  switchNameHandler = (newName) => {
    this.setState({persons : [
      {firstName : 'Alok Raj', secondName : 'Harshita Kumari'},
      {firstName : 'Harshita Kumari', secondName : 'Alok Raj'},
      {firstName : newName, secondName : 'BB'}
    ]}) //This won't affect otherState defined inside state.
  }

  nameChangedHandler = (event) => {
    this.setState({persons : [
      {firstName : 'Alok Raj', secondName : 'Harshita Kumari'},
      {firstName : 'Harshita Kumari', secondName : 'Alok Raj'},
      {firstName : event.target.value, secondName : 'BB'}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, There !!!</h1>
        <button onClick = {() => this.switchNameHandler('AA')}>Switch Name</button>
        <Person 
          firstName = {this.state.persons[0].firstName} 
          secondName = {this.state.persons[0].secondName}/>
        <Person 
          firstName = {this.state.persons[1].firstName} 
          secondName = {this.state.persons[1].secondName}/>
        <Person 
          firstName = {this.state.persons[2].firstName} 
          secondName = {this.state.persons[2].secondName}
          click = {this.switchNameHandler.bind(this, 'AA!')}
          changedEvent = {this.nameChangedHandler}
          >This is a child prop.</Person>
      </div>
    );
  }
}

export default App;
