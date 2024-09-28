import React from 'react';
// import { createChatBotMessage,setState } from 'react-chatbot-kit';


const ActionProvider = ({ children ,createChatBotMessage,setState}) => { 
  

    const handleHello = () => {
      const botMessage = createChatBotMessage('Why....what happened?');
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    


  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello,},
        });
      })}
    </div>
  );
};

export default ActionProvider;