import React from "react";
import { useState } from "react";
import "./Create.css";
import { useProjects } from "../../Hooks/useProjects";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [development, setDevelopment] = useState("");
  const [sales, setSales] = useState("");
  const [design, setDesign] = useState("");
  const [marketing, setMarketing] = useState("");
  const [category, setCategory] = useState("");
  const { addProject } = useProjects("projects");
  const navigate = useNavigate();
  const { user } = useAuth();
  const formHandler = (e) => {
    e.preventDefault();
    addProject({
      projectDate,
      projectDetail,
      projectName,
      createdBy: user.displayName,
      category,
    });
    setProjectDate("");
    setProjectDetail("");
    setProjectName("");
    navigate("/");
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
        <label
          className='create-projectNameLabel custom-select custom-select'
          styles={{ width: "200px" }}>
          <span>Project Catagory:</span>
          <select
            name='category'
            id='project-select'
            onChange={(e) => setCategory(e.target.value)}
            value={category}>
            <option value=''>--Please choose an option--</option>
            <option value='development'>development</option>
            <option value='design'>design</option>
            <option value='marketing'>marketing</option>
            <option value='sales'>sales</option>
          </select>
        </label>
        <button className='create-submit-btn'>Add Project</button>
      </form>
    </div>
  );
}
