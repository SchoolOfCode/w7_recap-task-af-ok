import React from "react";

function BlogPost({ title, author, datePosted, content, imageSrc, imageAlt }) {
  return (
    <main className="blogpost">
      <h1>{title}</h1>
      <h2>
        <em>by {author}</em>
      </h2>
      <h4>{datePosted}</h4>
      <figure>
        <img src={imageSrc} alt={imageAlt}></img>
        <figcaption>
          <em>{imageAlt}</em>{" "}
        </figcaption>
      </figure>
      <article>{content}</article>
    </main>
  );
}

export default BlogPost;
