import "../styles/nav.css";
import React from "react";
function Navigation({ projectmousein, teammousein, workmousein }) {
  return (
    <>
      <ul className="option-wrapper main">
        <li className="options project" onMouseEnter={projectmousein}>
          Project
        </li>
        <li className="options work" onMouseEnter={workmousein}>
          Work
        </li>
        <li className="options home">Home</li>
        <li className="options team" onMouseEnter={teammousein}>
          Team
        </li>
        <li className="options contact">Contact</li>
      </ul>
    </>
  );
}

export default Navigation;
