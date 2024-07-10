

import { useEffect, useState } from "react";
import { mycontext } from "./context";
import Checkcontext from "./checkcontext";
import Check2 from "./check2";
import Passdata from "./Passdata";
import Rerend from "./Rerend";


  
export default function Fetchdata(){
    
    const [user,setuser] = useState("");
    const [userdata,setuserdata] = useState("")

    useEffect(()=>{
               async function getdata(){
                try{
                    const usern = await fetch(`https://api.github.com/users/${user}`);
                      if(usern.ok){
                        console.log("response is ok");
                        const userdtl = await usern.json();
                        setuserdata(userdtl);
                        console.log("data fetched")    
                      }
                   
                 }
                 catch(error){
                      console.log(error);
                 }
               }
         getdata();

        },[user])
            

    //   async function handlefetch(username){
    //    // let username=event.target.value;
    //         const user = await fetch(`https://api.github.com/users/${username}`);
    //         const userdtl = await user.json();
    //         // console.log(userdtl)
    //        return(userdtl)
    //  }

    //  async function fun(){
    //     const userdata = await handlefetch(user);
    //     //setuserdata(userdata);

    //     //console.log(userdata);

    //  }
    // fun();
     let a=0;
  const data=[1,2,3,4,5,6,7];
  
    return(
          
        <div className="userdetail">
              <input type="text" name="username" onInput={e=>setuser(e.target.value)} /> 
              <mycontext.Provider value={userdata} >
                {user?<Checkcontext />:<p>please write user name</p>} 
              </mycontext.Provider>
              <mycontext.Provider value={"myself lll"}>
              <Check2 />
              </mycontext.Provider>
            
              <p>{ 
                 data.reduce((sum,elm)=>sum+=elm,0)           
                }
                {a>999?88:22}
                {
                  (function S(){
                    return(333333333333333);
                  })()
                  // function fun(){
                  //   console.log(999999999999999)
                  // }()                  
                }
                </p>
                <Passdata  data={user}/>
                <Rerend />
        </div>

    )
}