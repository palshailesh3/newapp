

import { useState } from "react";
import { mycontext } from "./context";
  
export default function Fetchdata(){
    
    const [user,setuser] = useState("");



      async function handlefetch(username){
         //let username=event.target.value;
             const user = await fetch(`https://api.github.com/users/${username}`);
             const userdtl = await user.json();
            console.log(userdtl);
      }
        handlefetch(user);
    return(
        <div className="userdetail">
              <input type="text" name="username" onInput={(e)=>{setuser(e.target.value)}} /> 
        </div>
    )
}