import React from "react";
import "./Navbar.css";
import { useAuth } from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useLogOut } from "../../Hooks/useLogOut";

// logo
import temple from "../../assests/temple.svg";

export default function Navbar() {
  const { user } = useAuth();
  const { signOut } = useLogOut();
  // console.log(user);
  return (
    <div className='navbar'>
      <div className='dojo-div'>
        <img src={temple} alt='logo' />
        <h3>The Dojo</h3>
      </div>
      <div className='link-div'>
        {!user && (
          <>
            <Link to='/login' className='login-link'>
              Login
            </Link>
            <Link to='/signin' className='signin-link'>
              Signin
            </Link>
          </>
        )}
        {user && (
          <button className='log-out-div' onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
