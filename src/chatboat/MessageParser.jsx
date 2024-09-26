// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log(actions)

  const parse = (message) => { 
    if (message.includes('no')) {
      console.log('gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
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