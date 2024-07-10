import { useEffect, useState } from "react";
import { TiTrash } from "react-icons/ti";



const Wishlist = ({wish})=>{
  
   const [data,setdata] = useState([]);

   useEffect(()=>{
     setdata([...data,wish]);
   },[wish]);
    
   function deltewish(id){ 
        //    let a=event.target.parentElement.id;
           
    //    console.log(a)

             setdata( data.filter((elm)=>elm.id!==id
                //     {
                //     if(elm.id==id){
                //         return false;
                //     }
                //     return true;
                // }
            )
            )
   }
//let a=[1,2,3,4,5];
   console.log(data);
    return(
        <div>
          <ul>
          { data.map((elm,index)=>
              <li style={{color:"red"}} id={elm.id} >{elm.wish} is ready for {elm.date}   
              <button onClick={()=>{deltewish(elm.id)}}>delete</button>
              <TiTrash />
              </li>
          )}
          </ul>
        </div>
    )
}

export default Wishlist;