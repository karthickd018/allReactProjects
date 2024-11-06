import React,{useState} from "react";
import List from "./List";
function MyComponent2(){
  // update object in states
  // const [car,setCar]=useState({year:2024,
  //                             make:"ford" ,
  //                             model:"mustang"
  // })
  // function handleYear(event){
  //   setCar(c => ({...c,year:event.target.value}))
  // }
  // function handleMake(event){
  //   setCar(c => ({...c,make:event.target.value}))
  // }
  // function handleModel(event){
  //   setCar(c => ({...c,model:event.target.value}))
  // }
  // return (
  //   <div>
  //     <p>Your favorite car is: {car.year} {car.make} {car.model} </p>
  //     <label htmlFor="">year:&nbsp;&nbsp;&nbsp;
  //     <input type="number" value={car.year} onChange={handleYear} />
  //     </label>
  //     <br />

  //     <br />
  //     <label htmlFor="">Make:&nbsp;
  //     <input type="text"  value={car.make} onChange={handleMake}/>
  //     </label>
  //    <br />
  //     <br />
  //     <label htmlFor="">Model:&nbsp;
  //     <input type="text"  value={car.model} onChange={handleModel} />
  //     </label>
      
  //   </div>
  // );



//   update array in states
// const [fruits,setFruits]=useState(["apple","banana","orange"]);
// function addFruits(){
//   const newFruit=document.getElementById("fruitinput").value;
//   document.getElementById("fruitinput").value="";
//   setFruits([...fruits,newFruit])

// }
// function delFruits(index){
//   setFruits(fruits.filter((_,i)=>i!==index))


// }
// return(<div>
//   <h1>List of Fruits</h1>
//   <ul>
//     {fruits.map((fruits,index)=><li key={index} onClick={()=>delFruits(index)} >{fruits}</li>)}
//   </ul>
//   <input type="text" id="fruitinput" placeholder="enter fruit name" />
//   <button onClick={addFruits}>add fruit</button>


// </div>);

const [car,setCar]=useState([]);
const [carYear,setYear]=useState(new Date().getFullYear);
const [carMake,setMake]=useState("");
const [carModel,setModel]=useState("");
function addCar(){
  const newCar={year:carYear,
    make:carMake,
    model:carModel,

  }
  setCar(c=>[...c,newCar]);

}
function delCar(index){
  setCar(car.filter((_,i) => i!==index))

}
function getYear(event){
  setYear(event.target.value)

}
function getMake(event){
  setMake(event.target.value)
}
function getModel(event){
  setModel(event.target.value)
}
return(
<div>
  <h1>List of Cars</h1>
  <ul>
    {car.map((car,index)=><li key={index} onClick={()=>delCar(index)}>
      {car.year} {car.make} {car.model}
    </li>)}

  </ul>
  <input type="number" value={car.year} onChange={getYear} />
  <input type="text"  value={car.make} placeholder="enter a make" onChange={getMake} />
  <input type="text"value={car.model} placeholder="enter a model" onChange={getModel} />
  <button onClick={addCar}>add car</button>
</div>
);

}
export default MyComponent2