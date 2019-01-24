import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FriendsList from "./component1/FriendsList";
import FriendsForm from "./component1/FriendsForm";
import Friend from "./component1/Friend";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

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
              to="/new"
              activeClassName="active-link"
              className="link-friendForm"
            >
              Form
            </NavLink>
          </div>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route path="/new" component={FriendsForm} />
        <Route
          path="/friend/:id"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
