import React from "react";
import "./Goals.css";
import Goal from "../components/Goal";

const getLocalItem = () => {
  let list = localStorage.getItem("goals");
  if (list) {
    return JSON.parse(localStorage.getItem("goals"));
  }
};
function Goals(props) {
  const goalsDeleteIndex = (i) => {
    props.deleteHandeler(i);
  };

  return (
    <>
      {props.goalItem.length === 0 ? (
        <h1>yoo...You are set to Rock!</h1>
      ) : (
        <div className="Goals-Wrapper">
          {props.goalItem.map((data, index) => {
            return (
              <Goal
                key={index}
                index={index}
                data={data}
                deleteGoal={goalsDeleteIndex}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Goals;
