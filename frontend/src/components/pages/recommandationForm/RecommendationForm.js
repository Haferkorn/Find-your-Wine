import styled from "styled-components/macro"
import Step1 from "./stepcomponents/Step1";
import Step2 from "./stepcomponents/Step2";
import Step2_B from "./stepcomponents/Step2_B";
import Step3 from "./stepcomponents/Step3";
import Step3_B from "./stepcomponents/Step3_B";
import Step4 from "./stepcomponents/Step4";
import Step5 from "./stepcomponents/Step5";
import {useState} from "react";

@
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
      console.log(name,value)
      setWineConfiguration({...wineConfiguration, [name]: value})
   }

   return(
   <FormWrapper>
      <h2>Let's find your wine</h2>
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
             <p>Something went wrong</p>}

      </Form>
   </FormWrapper>
   )
}
export default RecommendationForm

const FormWrapper=styled.div`
`
const Form=styled.section``