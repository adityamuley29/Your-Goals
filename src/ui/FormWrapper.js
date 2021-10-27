import React from "react";
import AddGoal from "../components/AddGoal";
import "./FormWrapper.css";

function Wrapper(props) {
  const fetchedData = (FormData) => {
    props.onRespondData(FormData);
  };

  return (
    <div className={props.mode === "light" ? "light-wrapper" : "dark-wrapper"}>
      <AddGoal formData={fetchedData} mode={props.mode} />
    </div>
  );
}

export default Wrapper;
