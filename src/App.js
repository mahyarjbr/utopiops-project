import React from "react";
import { useEffect } from "react";
import GlobalState from "./components/GlobalState";
import { postsAction } from "./Redux/Actions/PostsAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsAction());
  }, [dispatch]);
  return (
    <>
      <GlobalState />
    </>
  );
};

export default App;
