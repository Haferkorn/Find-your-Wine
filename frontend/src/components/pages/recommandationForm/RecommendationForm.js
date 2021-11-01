import styled from "styled-components/macro"
import {useState} from "react";
import Step1 from "./stepcomponents/Step1";
import Step2 from "./stepcomponents/Step2";


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
         {formStep===1?<Step1 nextStep={nextStep} handleDataInput={handleDataInput}/>:<Step2 nextStep={nextStep} handleDataInput={handleDataInput}/>}
      </Form>
   </FormWrapper>
   )
}
export default RecommendationForm

const FormWrapper=styled.div`
`
const Form=styled.section``