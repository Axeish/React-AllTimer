import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline: 'December 25,2017',
        newDeadline: '',
        texting:20

    }
  }

  changeDeadLine(){
    let timestamp = Date.parse(this.state.newDeadline)

      if (isNaN(timestamp)===false)
      {
          this.setState({deadline:new Date(this.state.newDeadline).toDateString()});

      }
      else{
          let substrings = ['sec','min','hour'],
              length = substrings.length;
          var currentDate = new Date();
          let numeral = parseInt(this.state.newDeadline.match(/\d+/),10);
          while(length--) {
              if (this.state.newDeadline.indexOf(substrings[length])!==-1) {
                   let newdead = new Date(currentDate.getTime() + (numeral * 1000 * (Math.pow(60,length))));
                   this.setState({deadline: newdead.toString()});
              }
          }
       //   alert("Can you make sure that data is not any crap!");
      }



  }
  render() {
    return (
      <div className="App">
        <div className="App-title">COUNTDOWN CHAMP </div>
          {this.state.deadline}<br/>
        <Clock deadline={this.state.deadline} texting={this.state.texting}/>
        <br/>
        <input type="text" onChange={event => this.setState({newDeadline:event.target.value})}/>
        <button onClick={() => this.changeDeadLine()}>Submit</button>
      </div>
    );
  }
}

export default App;
