

 const Increase = ({main,setmain})=>{
 
    return(
        <>
         <button onClick={()=>setmain(prev=>prev+2)}>Increase</button>
         <h1>{main}</h1>
        </>
    )
}

export default Increase;