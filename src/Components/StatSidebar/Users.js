import React from "react";
import { useDocs } from "../../Hooks/useDocs";
import "./Users.css";
export default function Users(collection) {
  const { documents, error } = useDocs("users");

  return (
    <div className='users'>
      {documents &&
        documents.map((doc) => {
          return (
            <div className='user-div' key={doc.uid}>
              <span className='user-name'>{doc.displayName}</span>
              {doc.onlineStat && <span className='user-stat' />}
            </div>
          );
        })}
    </div>
  );
}
