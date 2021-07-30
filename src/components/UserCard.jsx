import React from "react";

const UserCard = (props) => {
  const { content } = props;

  return (
    <div id="pinkcard" className="card small" style={{ margin: "10px" }}>
      <div className ="card-body">
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default UserCard;
