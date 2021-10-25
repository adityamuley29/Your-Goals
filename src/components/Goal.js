import React from "react";
import "./Goal.css";

function Goal(props) {
  const onDeleteHandler = ()=>{
    const Index = props.index;
    props.deleteGoal(Index);
    
  }

  return (
    <div className="goal-wrapper" key={props.data.id}>
      <p className="goal-heading">{props.data.goal}</p>
      <button className="goal-delete" onClick={onDeleteHandler}>Delete</button>
    </div>
  );
}

export default Goal;
