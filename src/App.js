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

  switchNameHandler = () => {
    // console.log('Clicked !!!')
    // Don't do this: this.state.persons[0].firstName = 'Alok Raj';
    this.setState({persons : [
      {firstName : 'Alok Raj', secondName : 'Harshita Kumari'},
      {firstName : 'Harshita Kumari', secondName : 'Alok Raj'},
      {firstName : 'AA', secondName : 'BB'}
    ]}) //This won't affect otherState defined inside state.
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, There !!!</h1>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person 
          firstName = {this.state.persons[0].firstName} 
          secondName = {this.state.persons[0].secondName}/>
        <Person 
          firstName = {this.state.persons[1].firstName} 
          secondName = {this.state.persons[1].secondName}/>
        <Person 
          firstName = {this.state.persons[2].firstName} 
          secondName = {this.state.persons[2].secondName}
          click = {this.switchNameHandler}
          >This is a child prop.</Person>
      </div>
    );
  }
}

export default App;
