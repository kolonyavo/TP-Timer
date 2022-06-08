import React, { Component } from "react";
import { render } from "react-dom";
import { Clock } from "./Clock";
import Timer from "./Countdown";
import "./Clock.css";
  
class Hide extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      timer: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "timer":
        this.setState({ timer: !this.state.timer });
        this.setState({ clock: this.state.timer });
        break;
      default: return;
    }
  }
  
  render() {
    const { clock, timer} = this.state;
    return (
      <div>
        {clock && <Timer />}
        {timer && <Clock />}
        <div>
          <button onClick={() => this.hideComponent("timer")}>
            Horloge / Timer
          </button>
        </div>
      </div>
    );
  }
}
  
export default Hide;
