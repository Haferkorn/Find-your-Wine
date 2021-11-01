import styled from "styled-components/macro"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import WineAnimation from "./wine_animation.json"
import { useHistory } from "react-router"

function Homepage() {
   const history = useHistory()
   function handleClick() {
      history.push("/recommendations")
   }

   return (
      <Wrapper>
         <Heading>
            Let's find <Emphasis>your</Emphasis> perfect Wine
         </Heading>
         <AnimationWrapper>
            <Player
               autoplay
               loop
               src={WineAnimation}
               style={{ height: "200px", width: "300px" }}>
               <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
               />
            </Player>
            <ButtonWrapper>
               <StartButton onClick={handleClick}>Start</StartButton>
            </ButtonWrapper>
         </AnimationWrapper>
      </Wrapper>
   )
}
export default Homepage

const Wrapper = styled.div``
const Heading = styled.h1`
   text-align: center;
   font-family: "Montserrat", sans-serif;
   font-size: 20px;
`

const Emphasis = styled.em`
   text-decoration: underline;
`
const AnimationWrapper = styled.div`
   clip-path: polygon(
      50% 0%,
      90% 20%,
      100% 60%,
      75% 100%,
      25% 100%,
      0% 60%,
      10% 20%
   );
   background-color: #9d9b96;
`

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
`
const StartButton = styled.button`
   margin-bottom: 40px;
   margin-top: 10px;
   background: #e6e1d6;
   border-radius: 6px;
   border: 0 solid #0d1b2a;
   display: inline-block;
   cursor: pointer;
   color: #0d1b2a;
   font-family: "Montserrat", sans-serif;
   font-size: 15px;
   font-weight: bold;
   padding: 6px 24px;
   text-decoration: none;
   &:hover {
      background-color: #607466;
      color: #e6e1d6;
   }
`
