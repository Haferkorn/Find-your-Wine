import styled from "styled-components/macro"
import Navbar from "./Navbar"
import logo from "./logo.png"


function Header() {
   return (
      <HeaderContainer>
         <LogoContainer src={logo} alt="Logo" />
         <Navbar />
      </HeaderContainer>
   )
}
export default Header

const HeaderContainer = styled.div`
   background-color: #A54136;
`

const LogoContainer = styled.img`
   width: 100%;
`
