import React ,{useState} from "react";
function Counter(){
  
  const [count,setCount] = useState(0);
  const incrementbtn=()=>{
    
    setCount(c=>c+1);
  }
  const decrementbtn=()=>{
    
    setCount(count-1);
  }
  const resetbtn=()=>{
    
    setCount(0);
  }

// count=count + 1
// count=count + 2

  return (<div  class="counter-container">
    <p class="count-display">{count}</p>
    <button class="counter-button" onClick={decrementbtn}>
      Decrement
    </button>
    
    <button class="counter-button" onClick={resetbtn}>
      Reset
    </button>
    <button class="counter-button" onClick={incrementbtn}>
      Increment
    </button>

  </div>

  ) ;
}
export default Counter