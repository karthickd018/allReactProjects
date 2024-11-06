import React,{useState} from "react";
function ColorPicker(){
  const [color,setColor]=useState("#FFFFFF");
  const handleColor=(event)=>{
    setColor(event.target.value);

  }
  return(
    <div className="color-picker-container">
    <h1 >ColorPicker</h1>
    <div className="color-display" style={{backgroundColor:color}}>
     <p>Selected color: {color}</p>
    </div>
    <br />
    <label htmlFor="">select a color:</label>
    <input type="color" value={color} onChange={handleColor} />
    </div>
  );
}
export default ColorPicker