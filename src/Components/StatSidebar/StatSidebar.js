import React from "react";
import { useState } from "react";
import Users from "./Users";
import "./StatSideBar.css";

export default function StatSidebar() {
  return (
    <div className='statsidebar'>
      <h1 className='statsidebar-header'>All Users</h1>
      <div className='statsidebar-users'>
        <Users className='usersstat-div' />
      </div>
    </div>
  );
}
