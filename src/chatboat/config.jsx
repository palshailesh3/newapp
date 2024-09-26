import { createChatBotMessage } from 'react-chatbot-kit';
import Realchat from './reaclchat';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`),createChatBotMessage(<Realchat />)],

  // widgets: [
  //   {
  //     widgetName: 'customMessage',
  //     widgetFunc: (props) => <Cust {...props} />,
  //     mapStateToProps: ["parse"],  // Ensuring that the parse function is available
  //   },
  // ]
 
}

export default config;