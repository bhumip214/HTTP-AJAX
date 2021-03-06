import React from "react";

const FriendForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    if (props.isUpdating) {
      props.updateFriend();
    } else {
      props.addFriend();
    }
  };

  return (
    <div className="friends-form">
      <h2>{props.isUpdating ? "Update Friend" : "Add New Friend"}</h2>

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
          onChange={props.handleChanges}
        />

        <input
          type="text"
          name="birthdate"
          value={props.friend.birthdate}
          placeholder="Birthdate"
          onChange={props.handleChanges}
        />

        <input
          type="text"
          name="hobbies"
          value={props.friend.hobbies}
          placeholder="Hobbies"
          onChange={props.handleChanges}
        />
        <button type="submit">
          {props.isUpdating ? "Update Friend" : "Add Friend"}
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
