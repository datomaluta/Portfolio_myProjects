import React from "react";
import "./style.css";

const Projects = () => {
  return (
    <div className="mainText">
      <h1>This My Projects</h1>
      <div className="infoTextDiv">
        <ol className="ol-class">
          <li>
            <a
              target="__blank"
              href="https://github.com/datomaluta/CarService---only-html-and-css.git"
            >
              Car Service - only html & css
            </a>
          </li>

          <li>
            <a
              target="__blank"
              href="https://github.com/datomaluta/onlineMagazine---html-css.git"
            >
              online Magazine - only html & css
            </a>
          </li>
          <li>
            <a
              href="https://github.com/datomaluta/davalebaPopUp.git"
              target="__blank"
            >
              PopUp Project
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://github.com/datomaluta/davalebaTodo.git"
              target="__blank"
            >
              Todo List Project
            </a>
          </li>
          <li>
            <a
              href="https://github.com/datomaluta/davalebaContextMenu.git"
              target="__blank"
            >
              Context Menu Project
            </a>
          </li>

          <li>
            <a
              href="https://github.com/datomaluta/Guess-My-Number.git"
              target="__blank"
            >
              Game based on JS: Guess My number - git
            </a>
          </li>
          <li>
            <a
              href="https://jovial-blackwell-c58744.netlify.app"
              target="__blank"
            >
              click to see "Guess my number" game - netlify
            </a>
          </li>
          <li>
            <a
              href="https://github.com/datomaluta/Roll-The-Dice.git"
              target="__blank"
            >
              Game: Roll The dice - git
            </a>
          </li>

          <li>
            <a
              href="https://trusting-blackwell-6a9dd7.netlify.app"
              target="__blank"
            >
              click to see "Roll The Dice" game - netlify
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Projects;
