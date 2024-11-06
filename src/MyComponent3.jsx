import React,{useState} from "react";
function MyComponent3(){
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
export default MyComponent3