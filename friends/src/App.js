import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FriendsList from "./component1/FriendsList";
import FriendForm from "./component1/FriendForm";
import Friend from "./component1/Friend";

const baseUrl = "http://localhost:5000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  componentDidMount() {
    axios
      .get(`${baseUrl}/friends`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addFriend = () => {
    axios
      .post(`${baseUrl}/friends`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/shop");
      })
      .catch(err => console.log(err));
  };

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
              to="/add-new-friend"
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
        <Route
          path="/add-new-friend"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              handleChanges={this.handleChanges}
              friend={this.state.friend}
            />
          )}
        />
        <Route
          path="/friend/:id"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
