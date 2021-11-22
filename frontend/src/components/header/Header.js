import styled from "styled-components/macro"
import Navbar from "./Navbar"

function Header() {
   return (
      <HeaderContainer>
         <Navbar />
      </HeaderContainer>
   )
}
export default Header

const HeaderContainer = styled.div`
   background-color: #a54136;
   width: 100%;
`
