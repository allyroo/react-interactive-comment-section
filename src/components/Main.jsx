import React from "react";
import data from "../data.json";
import "./styles/Main.css";

const Comment = ({ comment }) => {
  return (
    <div className="commentBox" key={comment.id}>
      <div className="commentContent">
        <h3>{comment.user.username}</h3>
        <h4>{comment.createdAt}</h4>
        <img src={comment.user.image.png} alt="" />
        <div className="comment">{comment.content}</div>
      </div>

      {comment.replies.map((reply) => (
        <div key={reply.id}>
          <h3>{reply.user.username}</h3>
          <h4>{reply.createdAt}</h4>
          <img src={reply.user.image.webp} alt="" />
          <p>{reply.content}</p>
        </div>
      ))}
    </div>
  );
};

const Main = () => {
  return (
    <div className="wrapper">
      {data.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Main;
