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
       <section>
       <FormContainer>
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
       </FormContainer>
       </section>
   )
}
export default RecommendationForm

const FormContainer=styled.div`
  background: rgb(139,38,53);
  background: linear-gradient(90deg, rgba(139,38,53,1) 25%, rgba(243,252,240,1) 35%, rgba(254,95,85,1) 100%);
  border-radius: 20px;
  margin: 50px 20px 20px 20px;
  padding: 7px;
  max-width: 600px;
  box-shadow: 5px 5px 15px 5px #0d1b2a;
`

const FormWrapper = styled.div`
   border: 4px solid #f3fcf0;
   border-radius: 20px;
   max-width: 600px;
   font-family: "Montserrat", sans-serif;
   font-size: 15px;
   background-color: #fffcf2;
  
`
const MainHeading = styled.h2`
   font-size: 15px;
   margin: 10px;
`
const StepWrapper = styled.section`
   margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
