import React, {  } from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className={props.mode === 'light'?"lightNavBar":"darkNavBar"}>
      <div className={props.mode === 'light' ?"light-navbar-left":"dark-navbar-left"}>
        <p>Your Goals</p>
      </div>
      <div className="navbar-right">
        <div className="darkModeContainer">
          <button onClick={props.toggleMode} className={props.mode === 'light' ? "light-Mode-btn":"dark-Mode-btn"} >
            {props.mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode" }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
