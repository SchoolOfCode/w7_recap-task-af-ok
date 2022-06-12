function Comment({ author, content, id }) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <article key={id}>
      <h3>{initials}</h3>
      <h4>{author}</h4>
      <p>{content}</p>
    </article>
  );
}

export default Comment;
