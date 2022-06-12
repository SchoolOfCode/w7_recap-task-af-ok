import React from "react";
import Comment from "../Comment";

function CommentList({ comment }) {
  return comment.map((commentObject) => (
    <Comment
      author={commentObject.author}
      content={commentObject.content}></Comment>
  ));
}

export default CommentList;
