import { combineReducers } from "redux";
import { PostDetailReducer, PostsReducer, UserPostsReducer } from './PostsReducer';

export const reducers = combineReducers({
  postsList: PostsReducer,
  userInfo: UserPostsReducer,
  postDetail:PostDetailReducer
 
});