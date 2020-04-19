import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alok', age: 22 },
      { name: 'Ashish', age: 20 },
      { name: 'Ankit', age: 18 }
    ],
    otherState: 'Some other values',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Alok Raj', age: 22 },
        { name: 'Ashish Raj', age: 20 },
        { name: newName, age: 18 }
      ]
    }) //This won't affect otherState defined inside state.
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Alok Raj', age: 22 },
        { name: 'Ashish Raj', age: 20 },
        { name: event.target.value, age: 18 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name = {person.name}
              age = {person.age}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello, There !!!</h1>
        <button style={style}
          onClick={this.togglePersonHandler}>
          Toggle Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
