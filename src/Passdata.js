import { useEffect, useState } from "react";
import Increase from "./Increase";


const Passdata = ({data})=>{
      const [udata ,setdata] = useState('');
      const [main ,setmain] = useState("a");
    
     // setdata(data);

      useEffect(()=>{
        setdata(data);
       // console.log("iiiiiiiiiiiiiiiiii")
      },[data]) 

      //what if we add empty dependency array how it is going to work
     //console.log(udata);
    return( 
        <div>
         <Increase main={main} setmain = {setmain} />
        <div className="chdata">
           {udata}
        </div>

        <h1>{main}</h1>
       
        </div>
    )
}

export default Passdata;