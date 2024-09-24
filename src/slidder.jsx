import { useEffect, useState } from "react";
import Modald from "./modalde";

   const fakedata=[{name:"pppppppp",sal:2222222,id:"a1"},{name:"tttttt",sal:23333,id:"a2"},{name:"ddddd",sal:1111,id:"a3"}];

  const Slider = ()=>{
    const [res,setres]=useState(false);
    const [fdata,setfdata]=useState([]);
    const [sure,setsure] = useState(false);
    const [index,setindex]=useState();

    useEffect(()=>{setfdata(fakedata)},[])
 
     function deletion(index){ 
      console.log("conditional rendering",index);
      let newdata=fdata.filter((elm,ind)=>elm.id!=index);
      setfdata(newdata);
     }
     if(sure){deletion(index);
      setsure(false);
     }
   console.log(fdata);
    return(
      <div>
         {/* {res&&fun()} */}
           {res&&<Modald setsure={setsure} setres={setres}/>}
           {
             fdata.map(({name,sal,id},index)=>
             <div style={{width:"350px",height:"40px",marginTop:"10px",backgroundColor:"red",display:"flex",
                  alignItems:"center",justifyContent:"center"}} key={id}>
               <p style={{color:"white"}}>{name}</p>
               <p style={{color:"white"}}>{sal}</p>
               <button onClick={()=>{setres(true);setindex(id)}}>delete</button>
             </div>
                  )
           }
          
      
         
      </div>
       
    )
  }

  export default Slider;