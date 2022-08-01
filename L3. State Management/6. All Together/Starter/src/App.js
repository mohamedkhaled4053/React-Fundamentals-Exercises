import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { object } from "prop-types";

const App = () => {
  let [users, setUsers] = useState([]);

  function updateUsers(newUser) {
    newUser.games = 0;
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <NewUser users={users} addUser={updateUsers} />
      <Users users={users} />
    </div>
  );
};

function NewUser({ users, addUser }) {
  let [newUser, setNewuser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  let [uniqueUserName, setuniqueUserName] = useState(true);

  function isuniqueUserName(newUser) {
    return users.every((user) => user.userName !== newUser.userName);
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setNewuser({ ...newUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isuniqueUserName(newUser)) {
      addUser(newUser);
    }
    setuniqueUserName(isuniqueUserName(newUser));
  }

  function allInputsReady() {
    return Object.keys(newUser).every((key) => {
      return newUser[key] !== "";
    });
  }

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="Enter first name"
          value={newUser.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Enter last name"
          value={newUser.lastName}
          onChange={handleChange}
        />
        <input
          name="userName"
          type="text"
          placeholder="Enter user name"
          value={newUser.userName}
          onChange={handleChange}
        />

        <button disabled={!allInputsReady()}>add</button>
      </form>

      {!uniqueUserName && <h2>You cannot add a user that already exists.</h2>}
    </div>
  );
}

function Users({ users }) {
  let [show, setShow] = useState(true);

  return (
    <ol>
      <h1>Users</h1>
      {users.length !== 0 && (
        <button onClick={() => setShow(!show)}>
          {show ? "hide" : "show"} the number of games played
        </button>
      )}
      {users.map((user) => (
        <User show={show} key={user.userName} user={user} />
      ))}
    </ol>
  );
}

function User({ user, show }) {
  return (
    <li>
      <p>Username: {user.userName}</p>
      <p>Number of Games Played: {show ? user.games : "*"}</p>
    </li>
  );
}

export default App;
