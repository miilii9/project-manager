import React from "react";
import { useState } from "react";
import { useComment } from "../../Hooks/useComment";
import { useAuth } from "../../Hooks/useAuth";
import "./NewComment.css";

export default function NewComment({ id }) {
  const [newComment, setNewComment] = useState("");
  const { addComment, error, isPending } = useComment("comments");
  const { user } = useAuth();

  const formHandler = (e) => {
    e.preventDefault();
    const date = new Date();
    const commentTime = date.toDateString();
    addComment({
      userName: user.displayName,
      commentTime,
      newComment,
      pageId: id,
    });
    setNewComment("");
  };
  return (
    <div className='newcomment'>
      <h2>Add new Comment</h2>
      <form className='comment-form' onSubmit={formHandler}>
        <textarea
          className='comment-textarea'
          onChange={(e) => setNewComment(e.target.value)}
          rows='5'></textarea>

        <button className='comment-btn'>Add comment</button>

        {!isPending && error && (
          <button className='comment-btn' disabled={true}>
            {error}
          </button>
        )}
      </form>
    </div>
  );
}
