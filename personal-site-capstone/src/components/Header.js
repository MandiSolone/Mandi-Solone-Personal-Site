import React from 'react';
import headshot from '../images/Headshot.png'; 

const Header = () => (
  <div className="first-container">
    <img src={headshot} alt="headshot of mandi" height="200px" />
    <h1>I'm
      <span className="name"> Mandi Solone,</span>
      <br />
      a full stack web developer.
    </h1>
  </div>
);

export default Header;
