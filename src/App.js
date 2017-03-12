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
              re =/(\d+\D*)/g;
          let sumall =0;
          let timearray =  this.state.newDeadline.match(re)  ;
          timearray.forEach(function(entry) {
              console.log(entry);
              length = substrings.length;

              let numeral = parseInt(entry.match(/\d+/),10);

              while(length--) {
                  if (entry.indexOf(substrings[length])!==-1) {
                       let newdead =  numeral * 1000 * (Math.pow(60,length));

                       sumall+=newdead;

                  }
              }
          });
          var currentDate = new Date();
          let sumalldate = new Date(currentDate.getTime()+sumall);
          this.setState({deadline: sumalldate.toString()});








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
