import React, { Component } from "react";
import axios from "axios";
import FriendCard from "./FriendCard";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.friend) {
      return <div>Loading Friend information...</div>;
    }
    return (
      <div className="save-wrapper">
        <FriendCard friend={this.state.friend} />;
      </div>
    );
  }
}

export default Friend;
