import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline: 'December 25,2017',
        newDeadline: ''

    }
  }

  changeDeadLine(){
    this.setState({deadline: this.state.newDeadline});

  }
  render() {
    return (
      <div className="App">
        <div className="App-title">COUNTDOWN CHAMP</div>
          {this.state.deadline}<br/>
        <Clock/>
        <br/>
        <input type="text" onChange={event => this.setState({newDeadline:event.target.value})}/>
        <button onClick={() => this.changeDeadLine()}>Submit</button>
      </div>
    );
  }
}

export default App;
