import { useContext } from "react"
import { mycontext } from "./context"


export default function Checkcontext(){ 

    // const myFunction = async () => {
    //     // run asynchronous tasks here
    // };
    
    // useEffect(() => { 
    //     myFunction();
    // }); // Note the curly braces around myFunction!
            
      const src=useContext(mycontext)
    return(
        <div>
            <img  src={src.avatar_url} alt="userPic" style={{border:"1px solid grey",borderRadius:"50%",width:"250px",height:"250px",margin:"30px"}}/>
        </div>
    )
}