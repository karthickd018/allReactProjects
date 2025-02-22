import React,{useEffect,useState,useRef} from "react";
function StopWatch(){
  const [isRunning , setIsRunning]=useState(false);
  const [elapsedTime,setElapsedTime]=useState(0)
  const intervalIdRef=useRef(null)
  const startTimeRef=useRef(0)
  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current= setInterval(()=>{setElapsedTime(Date.now()-startTimeRef.current)

      }

      ,10);
    }
    return  ()=>{
      clearInterval(intervalIdRef.current);
    }
  },[isRunning]);
  function start(){
    setIsRunning(true)
    startTimeRef.current=Date.now()-elapsedTime
    

  }
  function stop(){
    setIsRunning(false)


  }
  function reset(){
    
    setElapsedTime(0);
    setIsRunning(false)

  }

  function formatTime(){
    let hours=Math.floor(elapsedTime/(1000*60*60))
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let seconds=Math.floor(elapsedTime/(1000)%60)
    let milliSeconds=Math.floor((elapsedTime % 1000)/10 )
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliSeconds)}`;
  }
  function pad(integer){
    return integer<10 ?  "0"+integer:integer
  }
  return (
    <div className="stopwatch">
      <div className="display">
        {formatTime()}
      </div>
      <div className="controls">
        <button onClick={start}className="start-button">start</button>
        <button onClick={stop}className="stop-button">stop</button>
        <button onClick={reset}className="reset-button">reset</button>
 
      </div>
    </div>
    
  );
}
export default StopWatch