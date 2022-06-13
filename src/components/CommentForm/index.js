import React from "react";
import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon-Author");
  const [content, setContent] = useState();

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(author, content);
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <label>
        <p>Author:</p>
        <input type="text" value={author} onChange={handleAuthorChange} />
      </label>
      <label>
        <p>Comment:</p>
        <textarea
          rows="3"
          cols="16"
          value={content}
          onChange={handleContentChange}
        />
      </label>
      <input className="submit" type="submit" />
    </form>
  );
}

export default CommentForm;
