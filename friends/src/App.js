import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./component1/FriendsList";
import FriendsForm from "./component1/FriendsForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="app-header">
          <h1>Friends List</h1>
        </nav>
        <FriendsForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
