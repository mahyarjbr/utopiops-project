import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./../Reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  userInfo: {
    userPosts: localStorage.getItem("userPosts")
      ? JSON.parse(localStorage.getItem("userPosts"))
      : null,
  },
  postsList: {
    posts: localStorage.getItem("posts")
      ? JSON.parse(localStorage.getItem("posts"))
      : null,
  },
};

export const store = createStore(
  reducers,
  initialState,

  composeEnhancer(applyMiddleware(thunk))
);
