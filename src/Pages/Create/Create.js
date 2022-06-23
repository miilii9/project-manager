import React from "react";
import { useState } from "react";
import "./Create.css";
import { useProjects } from "../../Hooks/useProjects";

export default function Create() {
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const { addProject } = useProjects("projects");
  const formHandler = (e) => {
    e.preventDefault();
    addProject({ projectDate, projectDetail, projectName });
  };
  return (
    <div className='create'>
      <h2 className='create-header'>Create a New Project</h2>
      <form onSubmit={formHandler} className='create-form'>
        <label className='create-projectNameLabel'>
          <span>Project Name:</span>
          <input
            type='text'
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
        </label>
        <label className='create-projectDetailLabel'>
          <span>Project Detail:</span>
          <textarea
            rows={6}
            value={projectDetail}
            onChange={(e) => setProjectDetail(e.target.value)}></textarea>
        </label>
        <label className='create-projectTimeLabel'>
          <span>Set Due Date:</span>
          <input
            type='date'
            onChange={(e) => setProjectDate(e.target.value)}
            value={projectDate}
          />
        </label>
        <label className='create-projectNameLabel'>
          <span>Project Catagory:</span>
        </label>
        <button className='create-submit-btn'>Add Project</button>
      </form>
    </div>
  );
}
