import styled from "styled-components/macro"

import { useState } from "react"
import Summary from "./stepcomponents/Summary"
import {useHistory} from "react-router";
import Step from "./stepcomponents/Step";
import QuestionData from "./QuestionData.json"

function RecommendationForm() {
   const [step,setStep]=useState(0)
   const [wineConfiguration, setWineConfiguration] = useState({
      occasion: "",
      wineStyle: "",
      region: "",
      alcohol: "",
      taste: "",
   })

   const history=useHistory();

   const nextStep = (value) => {
      setStep(parseInt(value))
   }
   const handleDataInput = (name, value) => {
      setWineConfiguration({ ...wineConfiguration, [name]: value })
   }

   const handleSubmit = () => {
      //future PostMapping
      console.log("Data send")
      history.push("/recommendations")
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
