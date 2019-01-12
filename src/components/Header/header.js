import React from "react";
import "./style.css";

function Header(props) {
return (
  <header className="header">
  <h1 className="title">Clicky Game!</h1>
  <h2 className="subTitle">Click on an image to earn points, but don't click on anyone more than once!</h2>
  </header>
);

}

export default Header;
