import { Heading } from "./Recommendations"
import NoMatch_Animation from "./NoMatch_Animation.json"
import { Controls, Player } from "@lottiefiles/react-lottie-player"

import { AnimationWrapper } from "../homepage/Homepage"
import styled from "styled-components/macro";

function NoMatch() {
   return (
      <Wrapper>
         <Heading>Unfortunately we could not find a matching wine </Heading>
         <AnimationWrapper>
            <Player
               autoplay
               loop
               src={NoMatch_Animation}
               style={{ height: "200px", width: "300px" }}>
               <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
               />
            </Player>
         </AnimationWrapper>
      </Wrapper>
   )
}
export default NoMatch

const Wrapper=styled.div`
height: 100vh;

`