import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {                          // State can only be accessed in class-based components!
    persons: [                       // The current list of names/ages
      { name: 'Max', age: 28 },
      { name: 'Alex', age: 30 }
    ]
  }

  switchNameHandler = (newName) => {           // Method can be triggered onClick to change the names 
    this.setState({
      persons: [                        // New list of names/ages to overwrite the old one
        { name: newName, age: 38 },
        { name: 'Sara', age: 40 }
      ]
    })
  }

  nameChangedHandler = (x) => {  // New Method :O
    this.setState({
      persons: [                        
        { name: 'Max', age: 11 },
        { name: x.target.value , age: 22 } // x.target.value listens to our input
      ]
    })
  }
  render() {
    const mystyle={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 'px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <button style={mystyle} // Inline Styles
        onClick={this.switchNameHandler.bind(this,'abo 3bdo')} > Switch Name </button> 
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />      {/* Accessing the props from the state */}
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'abo 7lb')}
        changed={this.nameChangedHandler} >My hobbies: Racing </Person>    
      </div>
    );
  }
}
export default App;


