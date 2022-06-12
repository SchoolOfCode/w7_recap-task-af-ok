import React from "react";
import Comment from "../Comment";

function CommentList({ comment }) {
  return comment.map((commentObject) => (
    <Comment
      author={commentObject.author}
      content={commentObject.content}
      id={commentObject.id}
      key={commentObject.id}></Comment>
  ));
}

export default CommentList;
