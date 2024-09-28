  

   const Realchat = (props)=>{
      console.log(props);

   const handleuser = ({target:{value}})=>{
      if(value){
        props.actions.handleHello()
      }
   }


    return(
        <div>
            <input type="radio" name="opt" id="opt1" value="newuser" onChange={handleuser}/>
            <label htmlFor="opt1">are you new to here?</label><br />
            <input type="radio" name="opt" id="opt2" value="existinguser" onChange={handleuser}/>
            <label htmlFor="opt2">already having membership.</label>
        </div>
    )
   }

   export default Realchat;