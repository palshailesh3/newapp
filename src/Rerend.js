import React, { useState } from 'react';
import Wishlist from './Wishlist';
import uuid from 'react-uuid';

const Rerend = ()=>{
     const [wish ,setwish] = useState({
                                           wish:"",
                                           date:"",
                                             id:""
                                         })

        function handlesubmit(event){
            event.preventDefault();
           // console.log(event.target.wish.value)

            setwish({
                wish:event.target.wish.value,
                date:event.target.date.value,
                id:uuid()
            })
        }                                 
     //console.log(wish);
    return(
        <div className='wishlist'>
              <form onSubmit={handlesubmit}> 
                <label htmlFor="wish">enter your wish:</label>
                  <input type='search' name='wish' id='wish' required/>
                  <label htmlFor="date"> date </label>
                  <input type='date' name='date' id='date' required/>
                  <input type='submit' value="make a wish" />
              </form> 
              <div></div>
              <div></div>
             {wish.wish&& <Wishlist  wish = {wish}/>}
        </div>
    )
}

export default React.memo(Rerend)