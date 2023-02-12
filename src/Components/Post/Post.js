import React from 'react';
import "./Post.css";

function Post(props){
  let [name, setName] = React.useState(props.name);
  let [content, setContent] = React.useState("content");
  console.log("Post Function");
  return(
    <>
      <h1 className="post_name">{name}</h1>
      <p>{content}</p>
      <button onClick={() => {
        setName("Hawary");
      }}>Change Name</button>
    </>
  );
}

export default Post;