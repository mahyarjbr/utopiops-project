import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";
import PostList from "./PostList";

const Posts = () => {
  const {userPosts} =useSelector(state => state.userInfo)
  const [posts, setPosts] = useState(userPosts);
  useEffect(() => {
     setPosts(userPosts)
  }, [userPosts]);

  return (
    <div className="posts">
      <Switch>
        <Route path={`/post/:id`} component={Post} />
       

        {posts.map((user,index ) => <Route
          path={`/user${index+1}`}
          render={(props) => PostList({...props,posts})}
        />)}
      </Switch>
    </div>
  );
};

export default Posts;
