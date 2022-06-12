import React from "react";
import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import CommentList from "../CommentList";
// import useState from "react";

const blogObject = {
  ...blog,
};

function App() {
  /*  const [comment, setComment] = useState();
  const generateRandomString = (length) => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  const handleSubmit = (author, content) => {
    if (!comment) {
      setComment([
        {
          id: generateRandomString(21),
          author: author,
          content: content,
        },
      ]);
    }
    setComment([...comment, {
      id: generateRandomString(21),
      author: author,
      content: content,
    }]);
  }; */

  return (
    <>
      <BlogPost
        title={blogObject.title}
        author={blogObject.author}
        datePosted={blogObject.datePosted}
        content={blogObject.content}
        imageSrc={blogObject.imageSrc}
        imageAlt={blogObject.imageAlt}></BlogPost>
      <CommentList></CommentList>
    </>
  );
}

export default App;
