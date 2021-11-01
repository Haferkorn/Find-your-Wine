import { useEffect, useState } from "react"
import styled from "styled-components/macro"

function Step1({ nextStep, handleDataInput }) {
   const [context, setContext] = useState({
      occasion: "",
   })

   const handleChoice = (event) => {
      setContext({ [event.target.name]: event.target.value })
   }

   useEffect(() => {
      handleDataInput("occasion", context.occasion)
      // eslint-disable-next-line
   }, [context])

   const stepNumber = 1
   return (
      <form>
         <h2>First Step: For which Occasion are you looking for a wine?</h2>
         <div>
            <input
               type="radio"
               id="apero"
               name="occasion"
               value="apero"
               onChange={handleChoice}
            />
            <label htmlFor="apero">Apéro</label>
         </div>

         <div>
            <input
               type="radio"
               id="dinner"
               name="occasion"
               value="dinner"
               onChange={handleChoice}
            />
            <label htmlFor="dinner">Dinner</label>
         </div>
         <div>
            <input
               type="radio"
               id="afterDinner"
               name="occasion"
               value="afterDinner"
               onChange={handleChoice}
            />
            <label htmlFor="afterDinner">After Dinner</label>
         </div>
         <NextButton type={"button"} onClick={() => nextStep(stepNumber)}>
            next
         </NextButton>
      </form>
   )
}
export default Step1

export const NextButton = styled.button`
   margin-bottom: 40px;
   margin-top: 10px;
   background: #e6e1d6;
   border-radius: 6px;
   border: 1px solid #0d1b2a;
   display: inline-block;
   cursor: pointer;
   color: #0d1b2a;
   font-family: "Montserrat", sans-serif;
   font-size: 12px;
   font-weight: bold;
   padding: 6px 24px;
   text-decoration: none;
   &:hover {
      background-color: #607466;
      color: #e6e1d6;
   }
`
