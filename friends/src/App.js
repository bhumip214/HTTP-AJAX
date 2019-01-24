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
      },
      isUpdating: false
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
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push("/friend-form");
  };

  updateFriend = () => {
    axios
      .put(`${baseUrl}/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: {
            name: "",
            age: "",
            email: ""
          }
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
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
              to="/friend-form"
              activeClassName="active-link"
              className="link-friendForm"
            >
              {this.state.isUpdating ? "Update" : "Add"} Friend
            </NavLink>
          </div>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          path="/friend/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              populateForm={this.populateForm}
            />
          )}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              handleChanges={this.handleChanges}
              isUpdating={this.state.isUpdating}
              friend={this.state.friend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
