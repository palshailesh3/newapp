import { createChatBotMessage } from 'react-chatbot-kit';
import Realchat from './realchat';


const config = {
  initialMessages: [createChatBotMessage(`Hello world`),createChatBotMessage(`tell me about yourself.`,{widget:"Realchat"})],
  widgets:[
    {
      widgetName:"Realchat",
      widgetFunc:(props)=><Realchat {...props} />
    }
  ]
}

export default config;