import Loader from "react-loader-spinner";
import styled from "styled-components/macro";

function Loading(){
    return(
        <Wrapper>
            <Loader type="ThreeDots" color="#8b2635" height={80} width={80} />
        </Wrapper>
    )
}export default Loading

const Wrapper=styled.div`
  height: 100vh;
  justify-content: center;

`