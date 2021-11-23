import styled from "styled-components/macro"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import WineAnimation from "./wine_animation.json"
import { useHistory } from "react-router"
import HomeWineImage from "./home_wine.png"

function Homepage() {
   const history = useHistory()
   function handleClick() {
      history.push("/wineConfiguration")
   }

   return (
      <Wrapper>
          <Card>
         <Heading>
            Let's find <Emphasis>your</Emphasis> perfect Wine
         </Heading>
         <AnimationWrapper>
            <Player
               autoplay
               loop
               src={WineAnimation}
               style={{ height: "200px", width: "300px" ,padding:"0px 50px 0px 50px"}}>
               <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
               />
            </Player>
            <ButtonWrapper>
               <StartButton onClick={handleClick}>Start</StartButton>
            </ButtonWrapper>
         </AnimationWrapper>
          </Card>
      </Wrapper>
   )
}
export default Homepage

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: url(${HomeWineImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
`

const Card=styled.div`
  margin-top: 30px;
  border: 1px solid #3A3A3A;
  border-radius: 10px;
  width: 300px;
  height: fit-content;
  background-color: #D1D1D1;
  opacity: 90%;
    
`
const Heading = styled.h1`
   text-align: center;
   font-family: "Montserrat", sans-serif;
   font-size: 20px;
  margin: 0;
  padding-top: 30px;
`


const Emphasis = styled.em`
   text-decoration: underline;
`
export const AnimationWrapper = styled.div`
`

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top:30px;
`
const StartButton = styled.button`
   transition: all 0.2s ease-in-out;
   margin-bottom: 40px;
   margin-top: 10px;
   background: #8b2635;
   border-radius: 6px;
   border: 0 solid #0d1b2a;
   display: inline-block;
   cursor: pointer;
   color: #ffff;
   font-family: "Montserrat", sans-serif;
   font-size: 15px;
   font-weight: bold;
   padding: 6px 24px;
   text-decoration: none;
   &:hover {
      background-color: #607466;
      color: #e6e1d6;
      transform: scale(1.1);
   }
`
