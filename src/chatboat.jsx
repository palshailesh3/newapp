import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatboat/config.jsx';
import MessageParser from './chatboat/MessageParser.jsx';
import ActionProvider from './chatboat/ActionProvider.jsx';
import { useState } from 'react';


const Chatboat = () => {
const [chatboat,setchatboat] = useState(false);

  return (
    <div style={{position:"fixed",bottom:"0px",right:"0px"}}>
      {!chatboat&&(<button onClick={()=>setchatboat(!chatboat)}>open chatboat</button>)}
      {chatboat&&<Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />}
    </div>
  );
};
export default Chatboat;