import styled from "styled-components/macro"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import WineAnimation from "./wine_animation.json";

function Homepage(){
   return(
      <Wrapper>
         <Heading>Let's find <Emphasis>your</Emphasis> perfect Wine</Heading>
         <AnimationWrapper>
         <Player
            autoplay
            loop
            src={WineAnimation}
            style={{ height: '200px', width: '300px' }}
         >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
         </Player>
            <ButtonWrapper>
               <StartButton>Start</StartButton>
            </ButtonWrapper>
         </AnimationWrapper>
      </Wrapper>
   )
}export default Homepage

const Wrapper=styled.div`
`
const Heading=styled.h1`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
`

const Emphasis=styled.em`
text-decoration: underline;
`
const AnimationWrapper=styled.div`
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  background-color: #9D9B96;
`

const ButtonWrapper=styled.div`
  display: flex;
  justify-content: center;
`
const StartButton=styled.button`
   margin-bottom: 40px;
  margin-top: 10px;
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: #E6E1D6;
    border-radius: 6px;
    border: 0px solid #0D1B2A;
    display: inline-block;
    cursor: pointer;
    color: #0D1B2A;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
  
  
`
