import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

export default function Projects({ docs, filter }) {
  const { user } = useAuth();
  return (
    <div className='whole-proj-div'>
      {docs &&
        docs.map((doc) => {
          // for user filter

          if (filter === "mine") {
            if (user.displayName === doc.createdBy) {
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
            }
          } else {
            // for category filter
            if (filter === doc.category) {
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
            } else if (filter === "all") {
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
            }
          }
        })}
    </div>
  );
}
