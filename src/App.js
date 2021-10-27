import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import FormWrapper from "./ui/FormWrapper";
import Goals from "./ui/Goals";

// const Initial_Goal = [];

//getting data from local storage
const getLocalItem = () => {
  let list = localStorage.getItem("goals");
  if (list) {
    return JSON.parse(localStorage.getItem("goals"));
  }
};

function App() {
  const [finalGoal, setFinalGoal] = useState(getLocalItem);

  const [isDarkMode, setisDarkMode] = useState('light');

  //toggleMode  Function
  const toggleMode = () => {
    if(isDarkMode === 'light')
    {
      setisDarkMode('dark')

    }
    else{
      setisDarkMode('light')
    }
  };

  //create goal handeler
  const recievedData = (RecievedData) => {
    setFinalGoal((getLocalItem) => {
      return setFinalGoal([RecievedData, ...getLocalItem]);
    });
  };

  //add goals to local storage
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(finalGoal));
  });

  // delete goal handeler
  const onDeleteHandeler = (deleteIndex) => {
    finalGoal.splice(deleteIndex, 1);
    // console.log(updatedGoal);
    setFinalGoal((prevUpdatedGoal) => {
      return setFinalGoal([...prevUpdatedGoal]);
    });
  };

  const isCompleted = (item)=>{
    setFinalGoal(
      finalGoal.map((e)=>{
        if(e.id === item.id )
        {
          return{
            ...e,
            complete : !e.complete,
          };
        }
        return e;
      })
    )
    console.log(finalGoal);
    
  }

  
  return (
    <>
      <Navbar mode={isDarkMode} toggleMode={toggleMode} />
      <div className={isDarkMode==='light'?"light-main":"dark-main"}>
        <FormWrapper onRespondData={recievedData} mode={isDarkMode} />
        <Goals goalItem={finalGoal} isCompleted={isCompleted} deleteHandeler={onDeleteHandeler} mode={isDarkMode} />
      </div>
    </>
  );
}

export default App;
