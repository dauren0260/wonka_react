import React, { Component } from 'react'

import seasonsFactory from '../../assets/seasonsFactory.jpg';

export default class main_factory extends Component {

    state = {
        month : "",
        day: "",
        hour: "",
        min: "",
        sec: "",
    }
    
    componentDidMount(){
        let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var time;

        this.timer = setInterval(()=>{
            time = new Date();
            this.setState({
                month :　monthArr[time.getMonth()],
                day : time.getDate(),
                hour: time.getHours(),
                min : time.getMinutes(),
                sec : time.getSeconds()
            })
        },1000)

    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        const {month,day,hour,min,sec} = this.state
        return (
            <div className="factory-container" style={{backgroundImage:`url(${seasonsFactory})`}}>
                <div className="factory-detail">
                    <div className="month">
                        <span>{month}</span>
                        <span>{day}</span>
                    </div>
                    <div className="time">
                        <span>{hour}</span>：
                        <span>{min}</span>：
                        <span>{sec}</span>
                    </div>

                    <div className="status" id="status">
                        We are { (hour > 18 || hour < 9 ) ? "closed." : "open !"}
                    </div>
                </div>
            </div>
        )
    }
}
