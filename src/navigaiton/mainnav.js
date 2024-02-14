import { useEffect, useState } from "react";
import "../styles/nav.css";
import { ProjectNav, TeamNav, WorkNav } from "./SubNavigation";
import Navigation from "./Navigation";

// function project(){

// }
function Mainnav() {
  const [isproject, setisproject] = useState(false);
  const [ismain, setismain] = useState(true);
  const [isteam, setisteam] = useState(false);
  const [iswork, setiswork] = useState(false);
  

  return (
    <>
    {ismain && (
        <Navigation
          projectmousein={() => {
            setismain(false);
            setisproject(true);
          }}
          teammousein={() => {
            setismain(false);
            setisteam(true);
          }}
          workmousein={() => {
            setismain(false);
            setiswork(true);
          }}
          hoveraway={() => {
            setismain(true);
            setisproject(false);
            setisteam(false);
            setiswork(false);
          }}
        />
      )}
      {isproject && <ProjectNav />}
      {isteam && <TeamNav />}
      {iswork && <WorkNav />}
      
    </>
  );
}

export default Mainnav;
