import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatboat/config.jsx';
import MessageParser from './chatboat/MessageParser.jsx';
import ActionProvider from './chatboat/ActionProvider.jsx';


const Chatboat = () => {
  return (
    <div style={{position:"fixed",bottom:"0px",right:"0px"}}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default Chatboat;