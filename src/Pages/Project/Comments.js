import React from "react";
import NewComment from "./NewComment";
import { useDocs } from "../../Hooks/useDocs";
import "./Comments.css";
export default function Comments(id) {
  const { documents, error } = useDocs("comments", id);
  return (
    <div className='comments-div'>
      <div className='comments'>
        {documents && (
          <div>
            {documents.map((doc) => {
              return (
                <div key={doc.id} className='comment-div'>
                  <h4 className='comment-name'>{doc.userName}</h4>
                  <p>
                    {<span className='comment-day'>at {doc.commentTime}</span>}
                  </p>
                  <p className='comment-text'>{doc.newComment}</p>
                </div>
              );
            })}
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
      <NewComment id={id} className='newcomment-section' />
    </div>
  );
}
