import React from "react";
import { useState } from "react";
import "./Home.css";
import Projects from "./Projects";
import { useDocs } from "../../Hooks/useDocs";
export default function Home() {
  const [filter, setFilter] = useState("all");
  const { documents, error } = useDocs("projects");

  return (
    <div className='dashboard'>
      <h1 className='dashboard-header'>Dashboard</h1>
      <div className='dashboard-filter'>
        <span>filter by :</span>
        <span
          className='dashboard-filter-all filter'
          onClick={() => setFilter("all")}>
          all
        </span>
        <span
          className='dashboard-filter-mine filter'
          onClick={() => setFilter("mine")}>
          mine
        </span>
        <span
          className='dashboard-filter-development filter'
          onClick={() => setFilter("development")}>
          development
        </span>
        <span
          className='dashboard-filter-design filter'
          onClick={() => setFilter("design")}>
          design
        </span>
        <span
          className='dashboard-filter-marketing filter'
          onClick={() => setFilter("marketing")}>
          marketing
        </span>
        <span
          className='dashboard-filter-sales filter'
          onClick={() => setFilter("sales")}>
          sales
        </span>
      </div>
      <div className='home-project-section '>
        <Projects docs={documents} className='projects-div' filter={filter} />
      </div>
    </div>
  );
}
