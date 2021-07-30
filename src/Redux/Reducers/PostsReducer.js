export const PostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "POSTS_LIST_REQUEST":
      return { loading: true };

    case "GET_POSTS":
      return { loading: false, posts: action.payload };
    case "UPDATE_POSTS":
      return { ...state, ...action.payload };

    case "POSTS_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PostDetailReducer = (
  state = { post: {}, loading: false },
  action
) => {
  switch (action.type) {
    case "POST_DETAIL_REQUEST":
      return { loading: true };
    case "GET_POST":
      return { loading: false, post: action.payload };
    case "POST_DETAIL_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const UserPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_POSTS_REQUEST":
      return { loading: true };

    case "GET_USER_POSTS":
      return { loading: false, userPosts: action.payload };
    case "UPDATE_POSTS":
      return { userPosts: action.payload };

    default:
      return state;
  }
};
