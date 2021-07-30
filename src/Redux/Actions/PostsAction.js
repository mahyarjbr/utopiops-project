export const postsAction = () => async (dispatch) => {
  dispatch({ type: "POSTS_LIST_REQUEST" });
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_POSTS", payload: json });
      });
  } catch (err) {
    dispatch({ type: "POSTS_LIST_FAIL", payload: err.message });
  }
};

export const postAction = (postId) => async (dispatch) => {
  dispatch({ type: "POST_DETAIL_REQUEST" });
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_POST", payload: json });
      });
  } catch (err) {
    dispatch({ type: "POST_DETAIL_FAIL", payload: err.message });
  }
};

export const getUserPosts = (userId) => async (dispatch, getState) => {
  dispatch({ type: "USER_POSTS_REQUEST" });
  const { posts } = getState().postsList;

  let arr = [];
  arr = [...posts.filter((post) => post.userId == userId)];
  dispatch({ type: "GET_USER_POSTS", payload: arr });
  localStorage.setItem("userPosts",JSON.stringify(arr))
};

export const editPostAction = (post) => async (dispatch, getState) => {
  dispatch({ type: "POST_EDIT_REQUEST" });

  const allPosts = [...getState().userInfo.userPosts];
  const postIndex = allPosts.findIndex((p) => p.id == post.id);

  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: post.id,
        title: post.title,
        body: post.body,
        userId: post.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        allPosts[postIndex] = json;

        dispatch({ type: "UPDATE_POSTS", payload: allPosts });
        localStorage.setItem("userPosts",JSON.stringify(allPosts))
      });
  } catch (err) {
    dispatch({ type: "POST_DETAIL_FAIL", payload: err.message });
  }
};
