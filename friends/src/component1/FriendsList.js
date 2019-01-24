import React, { Component } from "react";
import FriendCard from "./FriendCard";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        return (
          <div className="friend-list">
            <Link to={`/friend/${friend.id}`} className="friend-name">
              <h3>{friend.name}</h3>
            </Link>
            <div className="delete-icon">
              <img src="https://img.icons8.com/office/16/000000/cancel.png" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
