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
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.props.deadline),1)
    }
    leading0(num){
        return num <10 ?'0'.repeat(1)+num:num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time',time);
        const seconds= Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({days:days,hours:hours,seconds:seconds,minutes,minutes});
    }
    render() {
        this.getTimeUntil(this.props.deadline);
        return (
            <div>

                <div className="CountDays">{this.leading0(this.state.days)}: </div>
                <div className="CountHours">{this.leading0(this.state.hours)}: </div>
                <div className="CountMinutes">{this.leading0(this.state.minutes)}: </div>
                <div className="CountSeconds"> {this.leading0(this.state.seconds)}</div>

            </div>
        );
    }

}
export default Clock;