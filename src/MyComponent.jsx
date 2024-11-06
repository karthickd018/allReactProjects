import React,{useState} from 'react';
function MyComponent(){
  const [name,setName]=useState("Guest");
  const [age,setAge]=useState(0);
  const [isEmployed,setIsEmployed]=useState(false);
  const clickButton = () => {
  
    setName("Karthick");
    
  }
  const incrementAge=()=>{
    setAge(age+1);

  }
  const clickIsEmployed=()=>{
    setIsEmployed(!isEmployed);
  }
  return (
    <div>
      <p>Name: {name}
        <br/>
        Age:{age}
        <br />
        IsEmployed:{isEmployed ? "Yes":"No"}

      </p>
      <button onClick={clickButton}>
        setName
      </button>
      <br />
      <br />
      <button onClick={incrementAge}>
        setaAge
      </button>
      <br /><br />
      <button onClick={clickIsEmployed}>employmentStatus</button>

    </div>
  );
}
export default MyComponent