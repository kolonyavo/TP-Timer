import React, { Component } from 'react';
import "./Clock.css";

class Test extends Component {
  constructor(props){
    super(props);
    this.state={hours: 0, minutes: 2, seconds: 5};
}
onStart=()=>{
   this.setState({seconds:this.state.seconds-1});

}
timer=()=>{
  this.f=setInterval(this.onStart,1000);
  document.getElementById('btn').disabled=true;
}
onPause=()=>{
    clearInterval(this.f);
}
onReset=()=>{
    clearInterval(this.f);
    document.getElementById('btn').disabled=false;
    this.setState({seconds:0})
}
render(){
    
    return(
        <>
            <h1>{this.state.seconds}</h1>
            <div className='clock'>
                <button id='btn' onClick={this.timer}>Start</button>
                <button className='btn1' onClick={this.onPause}>Stop</button>
                <button className='btn2' onClick={this.onReset}>Reset</button>
            </div>
        </>
    )
}
}

export default Test;