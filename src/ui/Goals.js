import React from "react";
import "./Goals.css";
import Goal from "../components/Goal";

function Goals(props) {
  return (
    <div className="Goals-Wrapper">
      {props.goalItem.map((data,index)=>{
          return (
            <Goal key={index} id={data.id} title={data.goal} />
          );
      })}
      
    </div>
  );
}

export default Goals;
