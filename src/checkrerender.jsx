import { useState } from "react";

let a=99;
 function findsum(dig){
    dig+=99;
    return(dig);
 }
 
   const Rerendercheck = ()=>{
  
   const [data,setdata] = useState(55);

    const handle = ()=>{
       
       setdata(prev=>prev+55);
     const num=  findsum(data);
        console.log(num);

    }

    return(
        <div>
            <h1>rerender check</h1>
           <button onClick={handle}>checkrerender1</button>
           <button onClick={handle}>referencechange2</button>
        </div>
    )
   }
   export default Rerendercheck;