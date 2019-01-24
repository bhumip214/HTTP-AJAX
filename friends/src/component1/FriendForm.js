import React from "react";

const FriendForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend();
  };

  return (
    <div className="friends-form">
      <h2>Add New Friends</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={props.friend.name}
          placeholder="Name"
          onChange={props.handleChanges}
        />
        <input
          type="number"
          name="age"
          value={props.friend.age}
          placeholder="Age"
          onChange={props.handleChanges}
        />
        <input
          type="text"
          name="email"
          value={props.friend.email}
          placeholder="Email"
          placeholder="Name"
          onChange={props.handleChanges}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
