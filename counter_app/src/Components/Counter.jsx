import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  const Increment = ()=>{
    setCount(count+1)
  }

  const Decrement = ()=>{
    if(count<=0){
      alert("Counter can't be less than 0")
      setCount(0)
    }
    else{
      setCount(count-1)
    }
  }

  const Reset = ()=>{
    setCount(0)
  }

  return(
    <div style={{background:"Lightblue", height:"100vh", display:"flex", flexDirection:"column",}}>
      <h1 style={{textAlign:'center'}}>React Counter App</h1>
        <h2 style={{display:"flex",justifyContent:"center", }}>{count}</h2>
        <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <button style={{padding:'5px', backgroundColor:"skyblue", color:"white", fontSize:"15px"}} onClick={Increment}>Increment</button>
            <button style={{padding:'5px', backgroundColor:"orange", color:"white", fontSize:"15px"}} onClick={Reset}>Reset</button>
            <button style={{padding:'5px', backgroundColor:"red", color:"white", fontSize:"15px"}} onClick={Decrement}>Decrement</button>
        </div>
        
    </div>
  )

}

export default Counter;