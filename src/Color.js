import { useRef, useState } from "react";
import Actref from "./actref";


const Color = ()=>{
   const [color,setcolor] = useState("red");
   const cref = useRef("yellow");

   function refcng(){ console.log("ggggggggggggggggggggg")
     setTimeout(()=>{
          cref.current.classList.toggle("clmr");
     })
   }
   let a=[1,2,3,4,5];
   let b=[5,6,7,8];
   let aa=[...a,...b];
   console.log(aa);
    return (<div>
          <Actref aref={cref}/>
         <h1 style={{color:color}} ref={cref}>hey i am {color}</h1>
         <button onClick={()=>{cref.current="purple";
          console.log(cref.current)
         }}>change font color</button>
    </div>)
}

export default Color;