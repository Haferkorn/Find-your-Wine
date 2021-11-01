import {useEffect, useState} from "react";
import {NextButton} from "./Step1";

function Step2_B({nextStep,handleDataInput}){

    const[context,setContext]=useState({
        wineStyle:""
    })

    const handleChoice=(event)=>{
        setContext({[event.target.name]:event.target.value})
    }


    useEffect(() => {
        handleDataInput("wineStyle",context.wineStyle)
    },[context]);


    const stepNumber=2;
    return(
        <form>
            <h2>Second Step: What is your favorite wine style?</h2>
            <div>
                <input
                    type="radio"
                    id="red"
                    name="wineStyle"
                    value="red"
                    onChange={handleChoice}
                />
                <label htmlFor="red">Red</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="white"
                    name="wineStyle"
                    value="white"
                    onChange={handleChoice}
                />
                <label htmlFor="white">White</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="rose"
                    name="wineStyle"
                    value="rose"
                    onChange={handleChoice}
                />
                <label htmlFor="rose">Rosé</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="IdK"
                    name="wineStyle"
                    value="red,white,rose"
                    onChange={handleChoice}
                />
                <label htmlFor="IdK">I don't know</label>
            </div>
            <NextButton type={"button"} onClick={()=>nextStep(stepNumber)}>next</NextButton>
        </form>
    )
}export default Step2_B