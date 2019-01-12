import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card container" onClick={props.addCounter}>
      <div className="img-container container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default FriendCard;
