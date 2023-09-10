import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';

const config = {
    initialMessages: [createChatBotMessage(`Hello`)],
    botName: "TibouBot",
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: "#A69D88"
        },
        chatButton: {
            backgroundColor: "#A69D88"
        }
    }

};

export default config;