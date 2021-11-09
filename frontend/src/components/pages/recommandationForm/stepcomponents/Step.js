import {useEffect, useState} from "react";
import styled from "styled-components/macro";

function Step({question,handleDataInput,nextStep}){
    const [nextIndex,setNextIndex]=useState(0)
    const [context, setContext] = useState("")

    const handleChoice = (event) => {
        setContext( event.target.value)
        setNextIndex(event.target.id)
    }

    useEffect(() => {
        handleDataInput(question.key, context)
        // eslint-disable-next-line
    }, [context])

    return(
        <form>
            <h2>{question.question}</h2>
            <InputWrapper>
            {question.answers.map(answer=>(
                <AnswerOption key={answer.value}>
                    <input
                        type="radio"
                        id={answer.nextIndex}
                        name={question.key}
                        value={answer.value}
                        onChange={handleChoice}
                        checked={answer.value === context}
                    />
                    <label htmlFor={answer.nextIndex}>{answer.text}</label>
                </AnswerOption>
            ))}
            </InputWrapper>
            <ButtonWrapper>
            <NextButton type={"button"} onClick={() => nextStep(nextIndex)}>
                next
            </NextButton>
            </ButtonWrapper>
        </form>
    )
}export default Step

const InputWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 21px;
  grid-row-gap: 21px;
`

const AnswerOption=styled.div`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #a38b7a;
`
const ButtonWrapper=styled.div`
  display: flex;
  justify-content: flex-end;
`
export const NextButton = styled.button`
   margin-bottom: 40px;
   margin-top: 30px;
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