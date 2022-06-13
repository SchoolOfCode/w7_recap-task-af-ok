function Comment({ author, content, id }) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <article className="comment" key={id}>
      <h3>
        <p className="initials">{initials}</p>{" "}
        <p className="comment-author">{author}</p>
      </h3>
      <p className="comment-content">
        <em>{content}</em>
      </p>
    </article>
  );
}

export default Comment;
