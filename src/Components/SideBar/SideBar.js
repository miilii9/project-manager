import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";
import { projectFirestore } from "../../Config/Config";
import { useAuth } from "../../Hooks/useAuth";
// icons
import add from "../../assests/add.svg";
import dashboard from "../../assests/dashboard.svg";

export default function SideBar() {
  const { user } = useAuth();
  // const { profPath, displayName } = projectFirestore
  //   .collection("users")
  //   .doc(user.uid)
  //   .get();
  return (
    <div className='sidebar'>
      <h2 className='sidebar-header'>hey {user.displayName}</h2>
      <div>
        <ul className='sidebar-list'>
          <li>
            <NavLink exact={`${true}`} to='/'>
              <img src={dashboard} alt='dashboard' className='sidebar-icons' />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink exact={`${true}`} to='create'>
              <img src={add} alt='add' className='sidebar-icons' />
              New Project
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
