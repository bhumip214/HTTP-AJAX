import React from "react";
import { Link } from "react-router-dom";

const FriendCard = props => {
  const { name, age, email, id } = props.friend;
  return (
    <div className="friend-card">
      <h3>
        <Link to={`/friend/${id}`}>Name: {name}</Link>
      </h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default FriendCard;
