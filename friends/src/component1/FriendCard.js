import React from "react";

const FriendCard = props => {
  const { name, age, email, id } = props.friend;
  const showDetail = props.showDetail;
  return (
    <div className="friend-card">
      <div className="friend-card-header">
        <h3>{name}</h3>

        <div className="friend-card-icons">
          <img
            onClick={e => props.populateForm(e, id)}
            className="edit-icon"
            src="https://img.icons8.com/office/16/000000/edit.png"
            alt="edit-icon"
          />
        </div>
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
