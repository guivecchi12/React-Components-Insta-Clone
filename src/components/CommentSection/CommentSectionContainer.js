// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  let [data] = useState(props.comments);
  console.log(data);
  
 
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        data.map((element)=>{
          return (<Comment comment={element}/>);
        })
      }
      <CommentInput />
      
    </div>
  );
};


export default CommentSection;
