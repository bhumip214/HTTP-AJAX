import React, { Component } from "react";
import axios from "axios";
import FriendCard from "./FriendCard";

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
          return <FriendCard key={friend.id} friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
