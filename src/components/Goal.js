import React from "react";
import "./Goal.css";

function Goal(props) {

  return (
    <div className="goal-wrapper" key={props.id}>
      <p className="goal-heading">{props.title}</p>
    </div>
  );
}

export default Goal;
