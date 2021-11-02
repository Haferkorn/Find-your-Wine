import {useEffect, useState} from "react";
import styled from "styled-components/macro";

function Step({toAskData,handleDataInput,nextStep}){
    const parameter=toAskData.key
    const [nextIndex,setNextIndex]=useState(0)
    const [context, setContext] = useState({
        parameter : "",
    })

    const handleChoice = (event) => {
        setContext({ [event.target.name]: event.target.value })
        setNextIndex(event.target.id)
    }

    useEffect(() => {
        handleDataInput(parameter, context[parameter])
        // eslint-disable-next-line
    }, [context])


    return(
        <form>
            <h2>{toAskData.title}</h2>
            {toAskData.answers.map(answer=>(
                <div>
                    <input
                        type="radio"
                        id={answer.nextIndex}
                        name={toAskData.key}
                        value={answer.value}
                        onChange={handleChoice}
                    />
                    <label htmlFor={answer.nextIndex}>{answer.text}</label>
                </div>
            ))}
            <NextButton type={"button"} onClick={() => nextStep(nextIndex)}>
                next
            </NextButton>


        </form>
    )
}export default Step

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