import React from "react";
import "./Goal.css";

function Goal(props) {
  const onDeleteHandler = ()=>{
    const Index = props.index;
    props.deleteGoal(Index);
    
  }

  return (
    <div className={props.mode === 'light'?"light-goal-wrapper":"dark-goal-wrapper"} key={props.data.id}>
      <p className="goal-heading">{props.data.goal}</p>
      <button className={props.mode === 'light'?"light-goal-delete":"dark-goal-delete"} onClick={onDeleteHandler} >Delete</button>
    </div>
  );
}

export default Goal;
