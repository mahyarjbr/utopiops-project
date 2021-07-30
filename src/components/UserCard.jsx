import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "./../Redux/Actions/PostsAction";

const UserCard = (props) => {
  const { content, userId } = props;

  const { userPosts } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleGetPost = (userId) => {
    dispatch(getUserPosts(userId));
  };
  return (
    <div
      onClick={() => handleGetPost(userId)}
      id="pinkcard"
      className={
        userId == userPosts[0].userId ? "card small active " : "card small "
      }
      style={{ margin: "10px" }}
    >
      <div class="card-body">
        <p class="card-text">{content}</p>
      </div>
    </div>
  );
};

export default UserCard;
