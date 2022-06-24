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
              let year = doc.commentTime.getFullYear();
              let dispYear = year > Date.now().getFullYear ? year : null;
              const now = new Date();
              return (
                <div key={doc.id} className='comment-div'>
                  <h4 className='comment-name'>{doc.userName}</h4>
                  <p>
                    {dispYear && (
                      <span className='comment-year'>{dispYear}</span>
                    )}
                    {
                      <span className='comment-day'>
                        {(now - doc.commentTime).getDay()} ago
                      </span>
                    }
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
