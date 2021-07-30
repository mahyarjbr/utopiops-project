import React, {  } from "react";
import Card from "./Card";

const PostList = (props) => {
   const {posts}=props
  return (
    <>
      <div>
        <Card size="small" content={`User ${posts[0].userId} posts`} />
        {posts.map((post) => (
          <Card
           
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
