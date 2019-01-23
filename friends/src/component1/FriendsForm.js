import React from "react";

const FriendsForm = () => {
  return (
    <div className="friends-form">
      <h3>Add New Friends</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FriendsForm;
