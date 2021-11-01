import {useEffect, useState} from "react";
import {NextButton} from "./Step1";

function Step2({nextStep,handleDataInput}){

    const[context,setContext]=useState({
        wineStyle:[]
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
            <h2>Second Step: What will be your meal</h2>
            <div>
                <input
                    type="radio"
                    id="redMeat"
                    name="wineStyle"
                    value="red"
                    onChange={handleChoice}
                />
                <label htmlFor="redMeat">Red Meat</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="lightMeat"
                    name="wineStyle"
                    value="red,white"
                    onChange={handleChoice}
                />
                <label htmlFor="lightMeat">Light meat(Pig, Chicken)</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="veggy"
                    name="wineStyle"
                    value="red,white,rose"
                    onChange={handleChoice}
                />
                <label htmlFor="afterDinner">Veggy</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="fish"
                    name="wineStyle"
                    value="white,rose"
                    onChange={handleChoice}
                />
                <label htmlFor="fish">Fish</label>
            </div>
            <NextButton type={"button"} onClick={()=>nextStep(stepNumber)}>next</NextButton>
        </form>
    )
}export default Step2

