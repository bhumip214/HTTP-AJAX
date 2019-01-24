import React from "react";

const FriendCard = props => {
  const { name, age, email } = props.friend;
  const showDetail = props.showDetail;
  return (
    <div className="friend-card">
      <div className="friend-card-header">
        <h3>{name}</h3>

        {/* <div className="edit-icons">
          <img src="https://img.icons8.com/office/16/000000/edit.png" />
        </div> */}
      </div>
      {showDetail && (
        <div className="friend-card-detail">
          <p>Age: {age}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default FriendCard;
