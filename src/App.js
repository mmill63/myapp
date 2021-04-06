import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state ={
    ninjas : [
      {name : 'Micheal', age: 31, id: 1},
      {name : 'Moshe', age: 23, id: 2},
      {name : 'Dor', age: 76, id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React APP</h1>
        <p>Hallo</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
