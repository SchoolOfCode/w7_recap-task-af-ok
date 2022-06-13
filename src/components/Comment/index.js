function Comment({ author, content, id }) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <article className="comment" key={id}>
      <h3>
        {initials} {author}
      </h3>
      <p>{content}</p>
    </article>
  );
}

export default Comment;
