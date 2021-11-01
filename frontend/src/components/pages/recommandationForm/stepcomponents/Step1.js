import {useEffect, useState} from "react";

function Step1({nextStep,handleDataInput}){

    const[occasionalContext,setOccasionalContext]=useState({
        occasion:""
    })

    const handleChoice=(event)=>{
        setOccasionalContext({[event.target.name]:event.target.value})
    }

    useEffect(() => {
        handleDataInput("occasion",occasionalContext.occasion)
    },[occasionalContext]);


    const stepNumber=1;
    return(
        <form>
            <h2>First Step: For which Occasion are you looking for a wine?</h2>
            <div>
                <input
                    type="radio"
                    id="apero"
                    name="occasion"
                    value="apero"
                    onChange={handleChoice}
                    />
                    <label htmlFor="apero">Apéro</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="dinner"
                    name="occasion"
                    value="dinner"
                    onChange={handleChoice}
                />
                    <label htmlFor="dinner">Dinner</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="afterDinner"
                    name="occasion"
                    value="afterDinner"
                    onChange={handleChoice}
                />
                <label htmlFor="afterDinner">After Dinner</label>
            </div>
            <button onClick={()=>nextStep(stepNumber)}>next</button>
        </form>
    )
}export default Step1