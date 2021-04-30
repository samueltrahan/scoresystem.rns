import React from "react";
import {Link} from 'react-router-dom'

import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? 
    <>
      <nav className="nav-bar">
          <a className="nav-logo" href="/">
            <img className="logo" src="/images/golf-ball-logo.png" alt="golf ball logo" />
          </a>
        <div className="nav-wrap">
              <Link className="nav-links" id="user" to={`/user/${user.id}`}>Welcome, {user.name}</Link>
              <Link className="nav-links" id="logout" to=" " onClick={handleLogout}>Log Out</Link>
        </div>
      </nav>
    </>
    :
    <>
      <nav className="nav-bar">
        <a className="nav-logo" href="/">
          <img className="logo" src="/images/golf-ball-logo.png" alt="golf ball logo" />
        </a>
        <div className="nav-wrap">
              <Link className="nav-links" id="login" to="/login">Log In</Link>
              <Link className="nav-links" id="signup" to="/signup">Sign Up</Link>
        </div>
      </nav>
    </>

  return (
    nav
  );
};

export default NavBar;