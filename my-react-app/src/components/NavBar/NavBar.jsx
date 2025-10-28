import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Toggle from "../Toggle/Toggle"
function NavBar({isDark, setDark}) {
  return (
    <div className="navbar">

      <div className="nav-brand">
        <Link to="/">Movie Log</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>

        <Toggle
          handleChange={() => {
            setDark(!isDark)
          }}
          isDark={isDark}
          setDark={setDark} 
        >
        </Toggle>
        
      </div>
    </div>
  );
}

export default NavBar;
