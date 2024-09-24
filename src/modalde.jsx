
const Modald = ({setsure,setres})=>{


    return(
        <div style={{width:"350px",height:"210px",backgroundColor:"grey",textAlign:"center"}}>
           <h1> hhhhhhhhhhhhhhhhhhhhhhhh</h1>
           <button onClick={()=>{setsure(true);setres(false)}}>yes</button>
           <button onClick={()=>{setsure(false);setres(false)}}>no</button>
        </div>
    )
}

export default Modald;