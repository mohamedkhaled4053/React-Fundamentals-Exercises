import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

function MessagesList({ messages, userName }) {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === userName
              ? "message sender"
              : "message recipient"
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
}

function AddMessage({addMessage, userName}) {
  let [newMessage, setNewMessage] = useState(
    {
      username: userName,
       text: ""
    }
  )
  console.log(newMessage);

  function updateNewMessage(e){
    setNewMessage({...newMessage, text: e.target.value})
  }

  const isDisabled = () => {
    return newMessage.text === ''
  };

  function handleSubmit(e) {
    e.preventDefault()
    addMessage(newMessage)
    setNewMessage({...newMessage, text : ''})
  }

  return (
    <div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={newMessage.text}
          onChange = {updateNewMessage}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled ={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

function ChatWindow({ userName, messages, updateMessages }) {

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{userName}</div>

      <MessagesList messages={messages} userName={userName} />

      <AddMessage addMessage ={updateMessages} userName = {userName}/>
    </div>
  );
}

const App = () => {
  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ]);

  function updateMessages(newMessage) {
    setMessages([...messages, newMessage]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            userName={user.username}
            messages={messages}
            updateMessages={updateMessages}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
