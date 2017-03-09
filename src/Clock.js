/**
 * Created by ashishkumar on 3/9/17.
 */
import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            days: 0,
            hours: 0,
            minutes:0,
            seconds:0

        }
    }
    render() {
        return (
            <div>

                <div className="CountDays">{this.state.days} </div>
                <div className="CountHours">{this.state.hours}</div>
                <div className="CountMinutes">{this.state.minutes} </div>
                <div className="CountSeconds"> {this.state.seconds}</div>

            </div>
        );
    }

}
export default Clock;