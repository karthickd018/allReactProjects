function C(){
  const count=1
  const incrementbtn=()=>{
   count=count+1
  }
  
  return (<div>
    <p >{count}</p>
  
    <button class="counter-button" onClick={incrementbtn}>
      Increment
    </button>

  </div>
  ) ;
}
export default C