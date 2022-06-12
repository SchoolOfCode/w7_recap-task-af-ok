import React from "react";

function CommentForm({ handleSubmit }) {
  return (
    <form>
      <label>
        Author:
        <input type="text" />
      </label>
      <label>
        Comment:
        <input type="text" />
      </label>
      <textarea rows="10" cols="20"></textarea>
      <button onSubmit={(e) => handleSubmit()}>Submit</button>
    </form>
  );
}

export default CommentForm;
