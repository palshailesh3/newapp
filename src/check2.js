import { useContext } from "react";
import { mycontext } from "./context";


export default function Check2(){
        const data=useContext(mycontext);


    return(
        <div>
           {data}
        </div>
    )
}