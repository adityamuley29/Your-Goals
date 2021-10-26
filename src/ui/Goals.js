import React from "react";
import "./Goals.css";
import Goal from "../components/Goal";
import done from "./allDone.gif";


function Goals(props) {
  const goalsDeleteIndex = (i) => {
    props.deleteHandeler(i);
  };

  return (
    <>
      {undefined !== props.goalItem && props.goalItem.length === 0 ? (
       <img className="done-logo" src={done} alt="logo here"/>
      ) : (
        <div className="Goals-Wrapper">
          {props.goalItem.map((data, index) => {
            return (
              <Goal
                key={index}
                index={index}
                data={data}
                deleteGoal={goalsDeleteIndex}
                mode={props.mode}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Goals;
