import React, {  } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const LeftSection = () => {
  const postsList = useSelector((state) => state.postsList.posts);
  let arr = [];
  postsList.map((user) => arr.push(user.userId));
  arr = arr.filter((a, b) => arr.indexOf(a) == b);

  return (
    <div className="left-section">
      {arr.map((user) => (
        
        <Link to={`/user${user}`}>
        <UserCard key={user} userId={user} content={`User${user}`} />
        </Link>
        
      ))}
    </div>
  );
};

export default LeftSection;
