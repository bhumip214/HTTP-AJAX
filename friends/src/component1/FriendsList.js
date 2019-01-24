import React from "react";
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
            <div className="friend-list-icon">
              <img
                onClick={e => props.deleteFriend(e, friend.id)}
                className="delete-icon"
                src="https://img.icons8.com/office/16/000000/cancel.png"
                alt="delete-icon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
