import React from "react";
import { useParams } from "react-router-dom";
import { useProject } from "../../Hooks/useProject";
import Comments from "./Comments";
import NewComment from "./NewComment";
import "./Project.css";

export default function Project() {
  const { id } = useParams();
  const { doc, err } = useProject("projects", id);

  return (
    <div>
      <div className='proj-div'>
        <h1 className='proj-header'>{doc.projectName}</h1>
        <p className='proj-date'>Due Date by {doc.projectDate}</p>
        <div className='proj-detail'>{doc.projectDetail}</div>
      </div>
      <div className='comments'>
        <Comments />
        <NewComment />
      </div>
    </div>
  );
}
