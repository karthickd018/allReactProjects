import React, {useState,useEffect} from "react"
function DigitalClock(){
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=>{
      clearInterval(intervalId)
    }

  },[])
  function handleTime(){
    let hour=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    const meridiem=hour>=12?"PM":"AM"
    hour = hour %12 ||12
    return `${padZero(hour)}:${padZero(min)}:${padZero(sec)} ${padZero(meridiem)}`
  }
  function padZero(number){
    return (number<10 ? "0":"")+number
  }

  return(
<div className="clock-container">
  <div className="clock">
    <span>{handleTime()}</span>
  </div>
  
</div>
  );
}
export default DigitalClock