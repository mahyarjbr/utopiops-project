import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editPostAction } from "../Redux/Actions/PostsAction";
import LoadingBox from "./LoadingBox";

const Post = (props) => {
  const { post, loading } = useSelector((state) => state.postDetail);
  const [postData, setPostData] = useState({});

  const dispatch = useDispatch();

  const handleEditPost = (e) => {
    e.preventDefault();
    dispatch(editPostAction(postData));
    props.history.push(`/user${postData.userId}`);
  };
  useEffect(() => {
    setPostData(post);
  }, [post]);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <div className="post">
          <form onSubmit={(e) => handleEditPost(e)}>
            <label htmlFor="title">title</label>
            <input
              id="title-input"
              name="title"
              type="text"
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              value={postData ? postData.title : ""}
            />
            <label htmlFor="body">body</label>
            <textarea
              name="body"
              id="body-input"
              type="text"
              onChange={(e) =>
                setPostData({ ...postData, body: e.target.value })
              }
              value={postData ? postData.body : ""}
            />
            <div className="post__buttons">
              <button type="submit">sava</button>
              <Link to="/">
                <button>cancel</button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Post;
