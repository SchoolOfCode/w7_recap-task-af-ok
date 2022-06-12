import React from "react";
import { useState } from "react";
import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

// import useState from "react";

const blogObject = {
  ...blog,
};

function App() {
  const [comment, setComment] = useState([
    {
      author: "Afam Okoh",
      content: "does this work",
      id: "kskBC5HZ8qgNQUiW6If6q",
    },
  ]);

  // handles comment submits from users
  function onSubmit(author, content) {
    //generates a random alphanumeric string of given length
    const generateRandomString = (length) => {
      let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };

    setComment([
      ...comment,
      {
        id: generateRandomString(21),
        author: author,
        content: content,
      },
    ]);
    console.log(comment);
  }

  return (
    <>
      <BlogPost
        title={blogObject.title}
        author={blogObject.author}
        datePosted={blogObject.datePosted}
        content={blogObject.content}
        imageSrc={blogObject.imageSrc}
        imageAlt={blogObject.imageAlt}></BlogPost>
      <CommentList comment={comment}></CommentList>
      <CommentForm onSubmit={onSubmit}></CommentForm>
    </>
  );
}

export default App;

/* 
    if (!comment) {
      setComment([
        {
          id: generateRandomString(21),
          author: author,
          content: content,
        },
      ]); 
    } */
