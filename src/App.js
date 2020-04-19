import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { firstName: 'Alok', secondName: 'Harshita' },
      { firstName: 'Harshita', secondName: 'Alok' },
      { firstName: 'A', secondName: 'B' }
    ],
    otherState: 'Some other values',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { firstName: 'Alok Raj', secondName: 'Harshita Kumari' },
        { firstName: 'Harshita Kumari', secondName: 'Alok Raj' },
        { firstName: newName, secondName: 'BB' }
      ]
    }) //This won't affect otherState defined inside state.
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { firstName: 'Alok Raj', secondName: 'Harshita Kumari' },
        { firstName: 'Harshita Kumari', secondName: 'Alok Raj' },
        { firstName: event.target.value, secondName: 'BB' }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hello, There !!!</h1>
        <button style={style}
          onClick={this.togglePersonHandler}>
          Toggle Names</button>
        {
          this.state.showPersons ?
            <div>
              <Person
                firstName={this.state.persons[0].firstName}
                secondName={this.state.persons[0].secondName} />
              <Person
                firstName={this.state.persons[1].firstName}
                secondName={this.state.persons[1].secondName} />
              <Person
                firstName={this.state.persons[2].firstName}
                secondName={this.state.persons[2].secondName}
                click={this.switchNameHandler.bind(this, 'AA!')}
                changedEvent={this.nameChangedHandler}
              >This is a child prop.</Person>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
