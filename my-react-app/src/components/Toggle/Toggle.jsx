import React from "react";


function Toggle({handleChange,isDark}) {
  
  return (
    <div className="toggle-container">
      <button id="check" onClick={handleChange} >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Toggle;
