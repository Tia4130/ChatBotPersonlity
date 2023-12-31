import { prettyDOM } from "@testing-library/react";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage("hello friend.");
        this.addMessageToState(message);
    }

    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage(
            "Fantastic. Here is your quiz. Good luck!",
            {
                widget: "javascriptQuiz",
            }
        );

        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    }
}

export default ActionProvider;