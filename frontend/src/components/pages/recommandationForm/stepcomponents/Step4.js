import { useEffect, useState } from "react"
import { NextButton } from "./Step1"

function Step4({ nextStep, handleDataInput }) {
   const [context, setContext] = useState({
      alcohol: "",
   })

   const handleChoice = (event) => {
      setContext({ [event.target.name]: event.target.value })
   }

   useEffect(() => {
      handleDataInput("alcohol", context.alcohol)
      // eslint-disable-next-line
   }, [context])

   const stepNumber = 4
   return (
      <form>
         <h2>Step Four: How strong should your wine be? </h2>
         <div>
            <input
               type="radio"
               id="strong"
               name="alcohol"
               value="strong"
               onChange={handleChoice}
            />
            <label htmlFor="strong">Strong (alcohol greater than 12%)</label>
         </div>

         <div>
            <input
               type="radio"
               id="light"
               name="alcohol"
               value="light"
               onChange={handleChoice}
            />
            <label htmlFor="light">Light (alcohol less than 12%)</label>
         </div>

         <div>
            <input
               type="radio"
               id="idK"
               name="alcohol"
               value="NaN"
               onChange={handleChoice}
            />
            <label htmlFor="idK">I don't mind</label>
         </div>
         <NextButton type={"button"} onClick={() => nextStep(stepNumber)}>
            next
         </NextButton>
      </form>
   )
}
export default Step4
