import React,{useState,useContext, createContext} from "react";
import MyComponentB from "./MyComponentB.jsx";
 export const userContext=createContext() 
function MyComponentA(){
  
  const [user,setUser]=useState("jackie")


  return (
    <div className="box">
    <h1>component A</h1>
    <p>{`hellooo ${user}`}</p>
    <userContext.Provider value={user}>
    <MyComponentB />

    </userContext.Provider>
   
    </div>
  );

}
export default MyComponentA