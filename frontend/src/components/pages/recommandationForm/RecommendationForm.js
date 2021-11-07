import styled from "styled-components/macro"

import { useState } from "react"
import Summary from "./stepcomponents/Summary"

import Step from "./stepcomponents/Step";
import QuestionData from "./QuestionData.json"


function RecommendationForm({handleSubmit,handleDataInput,wineConfiguration}) {
   const [step,setStep]=useState(0)

   const nextStep = (value) => {
      setStep(parseInt(value))
   }

   return (
      <FormWrapper>
         <MainHeading>Let's find your wine</MainHeading>
         <StepWrapper>
            {step!==7?
               <Step question={QuestionData[step]} handleDataInput={handleDataInput} nextStep={nextStep}/>:
               <Summary
               wineConfiguration={wineConfiguration}
               handleSubmit={handleSubmit}
               />
            }
         </StepWrapper>
      </FormWrapper>
   )
}
export default RecommendationForm

const FormWrapper = styled.div`
   border: 1px solid #ccc5b9;
   border-radius: 20px;
   margin: 20px;
   font-family: "Montserrat", sans-serif;
   font-size: 15px;
   background-color: #e6e1d6;
`
const MainHeading = styled.h2`
   font-size: 15px;
   margin: 10px;
`
const StepWrapper = styled.section`
   margin: 10px;
`
