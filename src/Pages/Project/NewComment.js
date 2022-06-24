import React from "react";
import { useState } from "react";
import { useDocs } from "../../Hooks/useDocs";
import { useComment } from "../../Hooks/useComment";
import { useAuth } from "../../Hooks/useAuth";

export default function NewComment() {
  const [newComment, setNewComment] = useState("");
  const { addComment, error, isPending } = useComment();
  const { user } = useAuth();

  const formHandler = (e) => {
    e.preventDefault();
    const commentTime = new Date();
    addComment({ userName: user.dispName, commentTime, newComment });
    setNewComment("");
  };
  return (
    <div>
      <h2>Add new Comment</h2>
      <form>
        <textarea
          className='comment-textarea'
          onChange={(e) => setNewComment(e.target.value)}></textarea>
        {!isPending && !error && (
          <button className='comment-btn'>Add comment</button>
        )}
        {isPending && !error && (
          <button className='comment-btn' disabled={true}>
            Adding comment
          </button>
        )}
        {!isPending && error && (
          <button className='comment-btn' disabled={true}>
            {error}
          </button>
        )}
      </form>
    </div>
  );
}
