 

  const Cust = ({parse})=>{
 
     function handleclick(){
        console.log("kkkkkkkkkkkkkkkkkkkkk")
        parse("no");
     }

    return(
        <div style={{display:"flex",flexDirection:"column",rowGap:"15px" ,alignItems:"flex-start"}}>
           <div>are you ready?</div>
           <div><input type="radio" name="opt" id="opt1" style={{marginRight:"15px"}} onClick={()=>handleclick()}/>
           <label htmlFor="opt1">No</label>
           </div>
           <div>
           <input type="radio" name="opt" id="opt2" style={{marginRight:"15px"}}/>
           <label htmlFor="opt2">Yes</label>
           </div>
        </div>
    )
  }

  export default Cust;