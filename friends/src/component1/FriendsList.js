import React, { Component } from "react";
import axios from "axios";

class FriendsList extends Component {
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
      <div className="friends-list">
        {this.state.friends.map(friend => {
          return (
            <div className="friend-card" key={friend.id}>
              <h3>Name: {friend.name}</h3>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
