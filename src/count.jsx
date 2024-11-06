import React ,{useState} from "react";
function Count(){
  
  const [count,setCount] = useState(0);
  const incrementbtn=()=>{
    
    setCount(count+1);
  }
  const decrementbtn=()=>{
    
    setCount(count-1);
  }
  return (<div className="counter">
    <p class="count">{count}</p>
    <button class="counter-button" onClick={decrementbtn}>
      Decrement
    </button>
    <button class="counter-button" onClick={incrementbtn}>
      Increment
    </button>

  </div>

  ) ;
}
export default Count