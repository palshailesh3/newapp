import { useState } from "react"

  

  const Default = ()=>{
   const [state,setstate] = useState(0)

   const increase =()=>{
    setstate(state+1);
    setstate(state+1);
    setstate(state+1);
   }
 console.log(state);
    return(
        <>
         <p>{state}</p>
          <button onClick={increase}>increase </button>  
        </>
    )
  }
  export default Default;