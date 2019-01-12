import React from "react";
import "./style.css";

function NavBar(props) {
    return(
        <nav className="navbar navbar-dark fixed-top">
        <ul className="col-12">
            <li className="clicky"><a href="/">Clicky Game</a></li>
            <li className="click">Click an image to begin!</li>
            <li className="score">Score: {props.score}  |  Top Score: {props.topScore}</li>
        </ul>
        </nav>
    );
}

export default NavBar;
