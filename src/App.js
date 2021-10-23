import React, { useState } from "react";
import "./App.css";
import FormWrapper from "./ui/FormWrapper";
import Goals from "./ui/Goals";

const Initial_Goal = [];

function App() {
  const [finalGoal, setFinalGoal] = useState(Initial_Goal);

  const recievedData = (RecievedData) => {
    // console.log(RecievedData);
    setFinalGoal((prevFinalGoal) => {
      return setFinalGoal([RecievedData, ...prevFinalGoal]);
    });
  };

  return (
    <div className="main">
      <FormWrapper onRespondData={recievedData} />
      <Goals goalItem={finalGoal} />
    </div>
  );
}

export default App;
