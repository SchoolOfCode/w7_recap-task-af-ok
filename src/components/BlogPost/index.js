import React from "react";

function BlogPost({ title, author, datePosted, content, imageSrc, imageAlt }) {
  return (
    <main className="blogpost">
      <h1>{title}</h1>
      <h2>by {author}</h2>
      <h4>{datePosted}</h4>
      <img src={imageSrc} alt={imageAlt}></img>
      <article>{content}</article>
    </main>
  );
}

export default BlogPost;
