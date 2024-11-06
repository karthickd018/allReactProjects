import React,{useContext} from "react";
import { userContext } from "./MyComponentA.jsx";
function MyComponentD(){
  const user=useContext(userContext)
  return (
    <div className="box">
    <h1>component D</h1>
    <p>{`byee!! ${user}`}</p>
    
    </div>
  );

}
export default MyComponentD