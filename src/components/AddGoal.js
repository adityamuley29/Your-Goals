import React, { useState } from "react";

import "./AddGoal.css";

function AddGoal(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalChangeHandeler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const GoalData = {
    id: Math.random(),
    goal: enteredGoal,
    complete: false,
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    props.formData(GoalData);
    setEnteredGoal("");
  };

  return (
    <div className="AddGoal-Form">
      <h2
        className={
          props.mode === "light" ? "light-form-heading" : "dark-form-heading"
        }
      >
        What's your plan for the Today?
      </h2>
      <form onSubmit={onSubmitHandeler}>
        <input
          value={enteredGoal}
          required
          onChange={goalChangeHandeler}
          placeholder="Add your Goal here..."
          className={
            props.mode === "light" ? "light-form-input" : "dark-form-input"
          }
        />

        <button
          type="submit"
          className={
            props.mode === "light" ? "light-form-btn" : "dark-form-btn"
          }
        >
          Add Goal
        </button>
      </form>
      {/* <button>Enable Dark Mode</button> */}
    </div>
  );
}

export default AddGoal;
