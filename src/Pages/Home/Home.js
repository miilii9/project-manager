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
        <span className='dashboard-filter-all'>all</span>
        <span className='dashboard-filter-mine'>mine</span>
        <span className='dashboard-filter-development'>development</span>
        <span className='dashboard-filter-design'>design</span>
        <span className='dashboard-filter-marketing'>marketing</span>
        <span className='dashboard-filter-sales'>sales</span>
      </div>
      <div className='home-project-section'>
        <Projects docs={documents} className='projects-div' />
      </div>
    </div>
  );
}
