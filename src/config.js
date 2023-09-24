import { createChatBotMessage } from 'react-chatbot-kit';

//COMPONENTS
import BotAvatar from './components/BotAvatar';
// import Todos from './components/Todos';
import Options from './components/Options/Options';
import Quiz from './components/Quiz/Quiz';

const config = {
    initialMessages: [createChatBotMessage(`Hello I am TibouBot`, {
        widget: 'todos'
    })],
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
    },
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: "javascriptQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                        question: "What perfume is best in the summer?",
                        answer:
                            "si fiori",
                        id: 1,
                    },
                    {
                        question: "Explain prototypal inheritance",
                        answer:
                            "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
                        id: 2,
                    },
                ],
            },
        },
    ],
};

export default config;