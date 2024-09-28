
import React from 'react';

const MessageParser = ({ children, actions }) => {
 

  const parse = (message) => { 
    
    if (message.includes('no')) { 
      console.log(actions.handleHello)
      actions.handleHello();
    }
  };




  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
           parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;