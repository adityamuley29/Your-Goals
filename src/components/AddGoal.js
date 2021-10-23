import React ,{ useState } from "react";

import "./AddGoal.css";

function AddGoal(props) {
  
  const [enteredGoal , setEnteredGoal] = useState('')

  const goalChangeHandeler = (event)=>{
    setEnteredGoal(event.target.value)
  }

  const GoalData = {
    id:Math.random().toString(),
    goal:enteredGoal

  }

  const onSubmitHandeler = (event)=>{
    event.preventDefault();
    props.formData(GoalData);
    setEnteredGoal("");

  }

  return (
    <div className="AddGoal-Form">
      <form onSubmit={onSubmitHandeler} >
        <h2 className="form-heading">What to do Today?</h2>
        <input value={enteredGoal} required onChange={goalChangeHandeler} placeholder="Add your Goal here..." className="form-input" />
        <button type="submit" className="form-btn">Add Goal</button>
      </form>
    </div>
  );
}

export default AddGoal;
