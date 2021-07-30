import React from "react";
import {  Switch, Route } from "react-router-dom";
import Post from "./Post";
import PostList from "./PostList";

const Posts = () => {
  return (
    <div className="posts">
      <Switch>
        <Route path={`/post/:id`} component={Post} />

        <Route path={`/user/:id`} component={PostList} />
      </Switch>
    </div>
  );
};

export default Posts;
