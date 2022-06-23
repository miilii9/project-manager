import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects({ docs }) {
  return (
    <div className='whole-proj-div'>
      {docs &&
        docs.map((doc) => {
          // const detail = doc.projectDetail;
          const summ = doc.projectDetail.split("").slice(0, 25).join("");
          return (
            <Link
              className='project-div'
              key={doc.id}
              to={`projects/${doc.id}`}>
              <h3 className='project-name'>{doc.projectName}</h3>
              <p className='project-date'>Due by {doc.projectDate}</p>
              <p className='project-detail'>{summ}</p>
            </Link>
          );
        })}
    </div>
  );
}
