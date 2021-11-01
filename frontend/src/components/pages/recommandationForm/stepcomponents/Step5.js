import {useEffect, useState} from "react";
import {NextButton} from "./Step1";

function Step5({nextStep,handleDataInput}){

    const[context,setContext]=useState({
        taste:""
    })

    const handleChoice=(event)=>{
        setContext({[event.target.name]:event.target.value})
    }


    useEffect(() => {
        handleDataInput("taste",context.taste)
    },[context]);


    const stepNumber=5;
    return(
        <form>
            <h2>Step Five: Which flavor characteristic do you like the most? </h2>
            <div>
                <input
                    type="radio"
                    id="sweet"
                    name="taste"
                    value="sweet"
                    onChange={handleChoice}
                />
                <label htmlFor="sweet">Sweet</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="brut"
                    name="taste"
                    value="brut"
                    onChange={handleChoice}
                />
                <label htmlFor="brut">Brut (sour)</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="idK"
                    name="alcohol"
                    value="NaN"
                    onChange={handleChoice}
                />
                <label htmlFor="idK">I don't mind</label>
            </div>
            <NextButton type={"button"} onClick={()=>nextStep(stepNumber)}>next</NextButton>
        </form>
    )
}export default Step5