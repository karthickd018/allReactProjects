// useEffect syntax is useEffect(() => {})
import React ,{useState,useEffect} from 'react'
function UseEffect(){


  // count increment and decrement
//   const [count,setCount]=useState(0);
//   const [color,setColor]=useState("green")
//   useEffect(()=>{document.title=`count: ${count} ${color}`},[count,color])
//   function addCount(){
//     setCount(c=>c+1)
//   }
//   function subCount(){
//     setCount(c=>c-1)
//   }
//   function changeColor(){
//     setColor(c=>c==="green"?"red":"green")
//   }
  
//   return (<>
//   <p style={{color:color}}>count: {count}</p>
//   <button onClick={addCount}>add count</button>
//   <button onClick={subCount}>subtract count</button>
//   <br /><br />
//   <button onClick={changeColor}>change color</button>
//   </>);


const [width,setWidth]=useState(window.innerWidth)
const [height,setHeight]=useState(window.innerHeight)
useEffect(()=>{
  window.addEventListener("resize",handleSize)
  console.log("Event Listener Added")
  document.title=`width x height =${width}x${height}`
  return ()=>{
    console.log("Event Listener Removed")
  }

},[width,height])
function handleSize(){
  setWidth(window.innerWidth)
  setHeight(window.innerHeight)
}

return(
  <div>
  <p>Window Width : {width} px</p>
  <p>Window Height : {height} px</p>
  </div>
  

);

}
export default UseEffect