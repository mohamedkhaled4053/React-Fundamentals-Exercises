import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  let [mirror, setMirror] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={mirror}
          onChange={(e) => setMirror(e.target.value)}
        />
        <p className="echo">Echo:</p>
        <p style={{whiteSpace:'pre'}}>{mirror}</p>
      </div>
    </div>
  );
};

export default App;
