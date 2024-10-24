import React from "react";
import website from '../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg';

const Projects = () => (
  <div className="third-container">
    <h2>My Projects</h2>
    <div className="parent-project-container">
      {/* Project 1 */}
      <div className="project-card">
        <div className="skill-image">
          <img
            src={website}
            alt="computer"
          />
        </div>
        <div className="skill-text">
          <h3>This Website</h3>
          <p>
            This project aims to create a clean, responsive website page using
            HTML and CSS. Key features include a responsive design, navigation
            menu, CSS styling, multimedia integration, and cross-browser
            compatibility.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="skill-image">
          <a href="https://mandisolone.github.io/Mondrian-Project/">
            <img
              src="/images/Screen Shot 2024-05-23 at 5.39.20 PM.png"
              alt="Website"
            />
          </a>
        </div>
        <div className="skill-text">
          <a href="https://mandisolone.github.io/Mondrian-Project/">
            <h3>Mondrian Artwork Recreation Using CSS Grid</h3>
          </a>
          <p>
            This project aimed to recreate Piet Mondrian's iconic artwork using
            CSS Grid, capturing his distinctive style of geometric shapes and
            primary colors.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <div className="skill-image">
          <a href="https://mandisolone.github.io/JavaScript_Games-/">
            <img
              src="/images/dice-game.png"
              alt="Screenshot of JavaScript Games Site"
            />
          </a>
        </div>
        <div className="skill-text">
          <a href="https://mandisolone.github.io/JavaScript_Games-/">
            <h3>JavaScript Games</h3>
          </a>
          <p>
            This project centered around developing JavaScript games, featuring
            a random dice roll game and a music game playable via clicking or
            keyboard input.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
