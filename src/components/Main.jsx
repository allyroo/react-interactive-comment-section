import React from "react";
import data from "../data.json";
import "./styles/Main.css";

const Comment = ({ comment }) => {
  return (
    <div className="commentBox" key={comment.id}>
      <div className="commentContent">
        <div className="comment">{comment.content}</div>

      </div>
      {comment.replies.map((reply) => (
          <div key={reply.id}>{reply.content}</div>
        ))}
    </div>
  )
}

const Main = () => {
  console.log(data);
  // let commentOne = data.comments[0].content;

  return (
    <div className="wrapper">
      {data.comments.map((comment) => <Comment comment={comment} />)}
    </div>
  );
};

export default Main;
