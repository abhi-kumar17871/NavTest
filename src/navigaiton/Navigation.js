import "../styles/nav.css";

function ProjectNav() {}

function Navigation({ projectmousein, teammousein, workmousein, hoveraway }) {
  return (
    <>
      {/* main menu */}
      <ul className="option-wrapper main">
        <li
          className="options project"
          onMouseEnter={projectmousein}
          onMouseLeave={hoveraway}
        >
          Project
        </li>
        <li
          className="options work"
          onMouseEnter={workmousein}
          onMouseLeave={hoveraway}
        >
          Work
        </li>
        <li className="options home">Home</li>
        <li
          className="options team"
          onMouseEnter={teammousein}
          onMouseLeave={hoveraway}
        >
          Team
        </li>
        <li className="options contact">Contact</li>
      </ul>
    </>
  );
}

export default Navigation;
