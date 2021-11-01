import {useEffect, useState} from "react";
import {NextButton} from "./Step1";

function Step3({nextStep,handleDataInput}){

    const[context,setContext]=useState({
        region:""
    })

    const handleChoice=(event)=>{
        setContext({[event.target.name]:event.target.value})
    }


    useEffect(() => {
        handleDataInput("region",context.region)
    },[context]);


    const stepNumber=3;
    return(
        <form>
            <h2>Step Three: if you had to associate your food with a region, which one would it be? </h2>
            <div>
                <input
                    type="radio"
                    id="north_central_europe"
                    name="region"
                    value="north_central_europe"
                    onChange={handleChoice}
                />
                <label htmlFor="north_central_europe">North-Central Europe</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="south_europe"
                    name="region"
                    value="south_europe"
                    onChange={handleChoice}
                />
                <label htmlFor="south_europe">South Europe</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="asia"
                    name="region"
                    value="asia"
                    onChange={handleChoice}
                />
                <label htmlFor="asia">Asia</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="north_amercia"
                    name="region"
                    value="north_america"
                    onChange={handleChoice}
                />
                <label htmlFor="north_amercia">North America</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="south_amercia"
                    name="region"
                    value="south_america"
                    onChange={handleChoice}
                />
                <label htmlFor="south_amercia">South America</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="africa"
                    name="region"
                    value="africa"
                    onChange={handleChoice}
                />
                <label htmlFor="africa">Africa</label>
            </div>
            <NextButton type={"button"} onClick={()=>nextStep(stepNumber)}>next</NextButton>
        </form>
    )
}export default Step3