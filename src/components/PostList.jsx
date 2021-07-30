import React, { useEffect } from "react";
import Card from "./Card";

const PostList = (props) => {
  // const { posts,loading } = useSelector((state) => state.postsList);
  const posts = JSON.parse(localStorage.getItem("posts"));

  const id = Number(props.match.params.id);

  const getPosts = (userId) => {
    let arr = [];
    arr = [...posts.filter((post) => post.userId == userId)];

    return arr;
  };
  const post = getPosts(id);

  useEffect(() => {}, [id, posts]);

  return (
    <>
      <div>
        <Card size="small" content={`User ${post[0].userId} posts`} />
        {post.map((post) => (
          <Card
            key={post.id}
            setRedux={true}
            id={post.id}
            size="medium"
            content={post.title}
            history={props.history}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
