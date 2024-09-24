import { createChatBotMessage } from 'react-chatbot-kit';
import Cust from './custommess.jsx';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`),createChatBotMessage(<Cust />)],

  widgets: [
    {
      widgetName: 'customMessage',
      widgetFunc: (props) => <Cust {...props} />,
      mapStateToProps: ["parse"],  // Ensuring that the parse function is available
    },
  ]
 
}

export default config;