import './App.css';
import { Chatbot } from 'react-chatbot-kit';

//COMPONENTS FOR THE CHATBOT
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function App() {
  return (
    <div className="App">
      <Chatbot config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider} />
    </div>
  );
}

export default App;
