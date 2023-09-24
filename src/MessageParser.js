class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        console.log("mesg", message);
        const lowercase = message.toLowerCase()

        if (lowercase.includes("hello")) {
            this.actionProvider.greet();
        } else if (lowercase.includes("hi")) {
            this.actionProvider.greet();
        }

        if (lowercase.includes("javascript") || lowercase.includes("js")) {
            this.actionProvider.handleJavascriptQuiz();
        }

    }
}

export default MessageParser;