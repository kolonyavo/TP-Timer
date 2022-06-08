import React from 'react'
import "./Clock.css";
const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    const tick = (e) => {
        if (hrs === 0 && mins === 0 && secs === 0) 
            return null;
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        if (hrs === 0 && mins === 0 && secs === 0) 
            return alert("Temps écoulé");
        return () => clearInterval(timerId);
    });

    
    return (
        <>
        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins.toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
        <button className='btn1'>Start</button>
        <button className='btn2'  onClick={reset}>Reset</button>
        </>
    );
}

function Timer(){
    const hoursMinSecs = {hours: 0, minutes: 0, seconds: 3}
  
  return (
      <>
       <h1>Timer</h1>
    <div className='clock'>
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
    </>
  );
}

export default Timer;