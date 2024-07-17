import { useRef } from "react";


const Actref= ({aref})=>{
 const nref = useRef();

    function changeref(){
        //aref.current.style.color="blue";
        aref.current.style.color="green"
    }

    return(<div>
        <h1 style={{color:aref.current}}>yyyyyyyyyyyyyyyyy</h1>
        <h1> <button onClick={changeref}> change ref</button></h1>
    </div>)
}
export default Actref;