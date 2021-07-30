import React from "react";
import { useDispatch } from "react-redux";
import { postAction } from "../Redux/Actions/PostsAction";

const Card = (props) => {
  const { content, size, setRedux,history,id} = props;
  const dispatch = useDispatch();
  const handlePostDetail = (id) => {
    
    dispatch(postAction(id))
    history.push(`/post/${id}`);
  };

  return (
    <>
      {setRedux ? (
        <div
          onClick={() => handlePostDetail(id)}
          class={`card ${size}`}
         
        >
          <div class="card-body">
            <p class="card-text">{content}</p>
          </div>
        </div>
      ) : (
        <div
          
          class={`card ${size}`}
         
        >
          <div class="card-body">
            <p class="card-text">{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
