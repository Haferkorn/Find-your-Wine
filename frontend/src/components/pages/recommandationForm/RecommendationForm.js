import styled from "styled-components/macro"

import { useState } from "react"
import Summary from "./stepcomponents/Summary"
import WineImage from "./wine_background.png"

import Step from "./stepcomponents/Step"
import QuestionData from "./QuestionData.json"

function RecommendationForm({
   handleSubmit,
   handleDataInput,
   wineConfiguration,
}) {
   const [step, setStep] = useState(0)

   const nextStep = (value) => {
      setStep(parseInt(value))
   }

   return (
      <ComponentWrapper>
         <FormContainer>
            <FormWrapper>
               <MainHeading>Let's find your wine</MainHeading>
               <StepWrapper>
                  {step !== 7 ? (
                     <Step
                        question={QuestionData[step]}
                        handleDataInput={handleDataInput}
                        nextStep={nextStep}
                     />
                  ) : (
                     <Summary
                        wineConfiguration={wineConfiguration}
                        handleSubmit={handleSubmit}
                     />
                  )}
               </StepWrapper>
            </FormWrapper>
         </FormContainer>
      </ComponentWrapper>
   )
}
export default RecommendationForm

const ComponentWrapper=styled.section`
   display:flex;
   justify-content: center;
   align-items: center;
   background: url(${WineImage}) no-repeat center center fixed;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
   height: 100%;
   width: 100%;
   padding-top: 0;
`

const FormContainer = styled.div`
   border-radius: 20px;
   margin: -200px 20px 20px 20px;
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
   opacity: 90%;
`
const MainHeading = styled.h2`
   font-size: 15px;
   margin: 10px;
`
const StepWrapper = styled.section`
   margin: 10px;
   min-width: 300px;
   
   
`
