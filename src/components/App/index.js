import React from "react";
import BlogPost from "../BlogPost";

const examplePost = {
  title: "My First Post",
  author: "Chris Meah",
  datePosted: "20/11/2019",
  content: `
    A structure used in most apps and games.
    It's a way to keep doing the same.
    While a condition is true,
    Or for one to twenty-two.
    If endless, for errors we blame
    ..........
    Loop `,
  imageSrc:
    "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  imageAlt: "A couple of coders.",
};

function App() {
  return (
    <main>
      <BlogPost
        title={examplePost.title}
        author={examplePost.author}
        datePosted={examplePost.datePosted}
        content={examplePost.content}
        imageSrc={examplePost.imageSrc}
        imageAlt={examplePost.imageAlt}></BlogPost>
      ;
    </main>
  );
}

export default App;
