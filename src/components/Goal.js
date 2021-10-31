import React from "react";
import "./Goal.css";
import checkmark from "./checkmark.png"

function Goal(props) {
  const onDeleteHandler = () => {
    const Index = props.index;
    props.deleteGoal(Index);
  };

  const isChecked = ()=>{
    props.completedItem(props.data)
  }



  return (
    <div className={props.mode === "light" ? "light-goal-wrapper" : "dark-goal-wrapper"} key={props.data.id}>
      <p className={props.data.complete === false ? "goal-heading":"completed-goal-heading"}>{props.data.goal}</p>
      <div className="Action-buttons">
        <button className={props.mode === "light" ? "light-Complete-btn" : "dark-Complete-btn"} onClick={isChecked}><img src={checkmark} id="doneLogo" alt="Done Logo Here" /></button>
        <button className={props.mode === "light" ? "light-goal-delete" : "dark-goal-delete"} onClick={onDeleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Goal;
