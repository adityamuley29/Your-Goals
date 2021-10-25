import React, { useState, useEffect } from "react";
import "./App.css";
import FormWrapper from "./ui/FormWrapper";
import Goals from "./ui/Goals";

const Initial_Goal = [];


function App() {
  const [finalGoal, setFinalGoal] = useState(Initial_Goal);

  //create goal handeler
  const recievedData = (RecievedData) => {
    setFinalGoal((getLocalItem) => {
      return setFinalGoal([RecievedData, ...getLocalItem]);
    });
  };

  //add goals to local storage
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(finalGoal));
  }, [finalGoal]);

  // delete goal handeler
  const onDeleteHandeler = (deleteIndex) => {
    finalGoal.splice(deleteIndex, 1);
    // console.log(updatedGoal);
    setFinalGoal((prevUpdatedGoal) => {
      return setFinalGoal([...prevUpdatedGoal]);
    });
  };
  return (
    <div className="main">
      <FormWrapper onRespondData={recievedData} />
      <Goals goalItem={finalGoal} deleteHandeler={onDeleteHandeler} />
    </div>
  );
}

export default App;
