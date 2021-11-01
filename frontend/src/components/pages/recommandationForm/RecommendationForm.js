import styled from "styled-components/macro"
import Step1 from "./stepcomponents/Step1";
import Step2 from "./stepcomponents/Step2";
import Step2_B from "./stepcomponents/Step2_B";
import Step3 from "./stepcomponents/Step3";
import Step3_B from "./stepcomponents/Step3_B";
import Step4 from "./stepcomponents/Step4";
import Step5 from "./stepcomponents/Step5";
import {useState} from "react";
import Summary from "./stepcomponents/Summary";


function RecommendationForm() {
   let [formStep, setFormStep]=useState(1);
   const[wineConfiguration,setWineConfiguration]=useState({
      occasion:"",
      wineStyle:"",
      region:"",
      alcohol:"",
      taste:""
   })

   const nextStep=(value)=>{
      setFormStep(value+1);
   }

   const handleDataInput=(name,value)=>{
      setWineConfiguration({...wineConfiguration, [name]: value})
   }

   const handleSubmit=()=>{
      //future PostMapping
      console.log("Data send")
   }

   return(
   <FormWrapper>
      <MainHeading>Let's find your wine</MainHeading>
      <Form>
         {formStep===1?
             <Step1 nextStep={nextStep} handleDataInput={handleDataInput}/>:
         formStep===2 && wineConfiguration.occasion==="dinner"?
             <Step2 nextStep={nextStep} handleDataInput={handleDataInput}/>:
             formStep===2 && wineConfiguration.occasion==="apero"?
                 <Step2_B nextStep={nextStep} handleDataInput={handleDataInput}/>:
                 formStep===2 && wineConfiguration.occasion==="afterDinner"?
                     <Step2_B nextStep={nextStep} handleDataInput={handleDataInput}/>:
                     formStep===3 && wineConfiguration.occasion!=="dinner"?
                         <Step3_B nextStep={nextStep} handleDataInput={handleDataInput}/>:
                     formStep===3 && wineConfiguration.occasion==="dinner"?
                         <Step3 nextStep={nextStep} handleDataInput={handleDataInput}/>:
                         formStep===4 ?
                             <Step4 nextStep={nextStep} handleDataInput={handleDataInput}/>:
                             formStep===5 ?
                                 <Step5 nextStep={nextStep} handleDataInput={handleDataInput}/>:
             <Summary wineConfiguration={wineConfiguration} handleSubmit={handleSubmit}/>}

      </Form>
   </FormWrapper>
   )
}
export default RecommendationForm

const FormWrapper=styled.div`
   border: 1px solid #CCC5B9;
   border-radius: 20px;
   margin: 20px;
   font-family: "Montserrat",sans-serif;
   font-size: 15px;
   background-color: #E6E1D6;
`
const MainHeading=styled.h2`
   font-size: 15px;
   margin: 10px;
`
const Form=styled.section`
margin: 10px;
`