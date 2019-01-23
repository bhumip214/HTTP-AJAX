import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import FriendsList from "./component1/FriendsList";
import FriendsForm from "./component1/FriendsForm";
import Friend from "./component1/Friend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="app-header">
          <h1>Friends List</h1>
          <div className="nav-links">
            <NavLink
              exact
              to="/"
              activeClassName="active-link"
              className="link-home"
            >
              Home
            </NavLink>
            <NavLink
              to="/newFriendForm"
              activeClassName="active-link"
              className="link-friendForm"
            >
              Form
            </NavLink>
          </div>
        </nav>

        <Route exact path="/" component={FriendsList} />
        <Route path="/friend/:id" component={Friend} />
        <Route path="/newFriendForm" component={FriendsForm} />
      </div>
    );
  }
}

export default App;
