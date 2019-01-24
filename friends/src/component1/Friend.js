import React, { Component } from "react";

import FriendCard from "./FriendCard";

const Friend = props => {
  const friend = props.friends.find(friend => {
    return `${friend.id}` === props.match.params.id;
  });
  if (!friend) {
    return <div>Loading Friend information...</div>;
  }
  return (
    <div className="friends-list">
      <FriendCard friend={friend} showDetail={true} />
    </div>
  );
};

export default Friend;
