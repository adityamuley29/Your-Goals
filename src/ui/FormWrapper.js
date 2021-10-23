import React from 'react'
import AddGoal from '../components/AddGoal'
import "./FormWrapper.css"

function Wrapper(props) {
    const fetchedData = (FormData)=>{
        props.onRespondData(FormData);

    }


    return (
        <div className="wrapper">
            <AddGoal formData={fetchedData}/>
        </div>
    )
}

export default Wrapper
