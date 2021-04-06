import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja.js';

class App extends Component {
  state ={
    ninjas : [
      {name : 'Micheal', age: 31, id: 1},
      {name : 'Moshe', age: 23, id: 2},
      {name : 'Dor', age: 76, id: 3}
    ]
  }
  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id  
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React APP</h1>
        <p>Hallo</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
