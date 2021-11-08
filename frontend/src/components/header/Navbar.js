import { NavLink } from "react-router-dom"
import styled from "styled-components/macro"
import logo from "./logo.png";

function Navbar() {
   return (
      <NavBarContainer>
          <LogoContainer src={logo} alt="Logo" />
         <NavItem to="/" exact>
            Home
         </NavItem>
         <NavItem to="/login">Login</NavItem>
      </NavBarContainer>
   )
}
export default Navbar

const NavBarContainer = styled.section`
   display: flex;
   justify-content: center;
   gap: 40px;
   background-color: #8B2635;
  height: 100px
  
`
const NavItem = styled(NavLink)`
   color: #ffff;
   text-decoration: none;
   font-family: "Montserrat", sans-serif;
   margin: 30px;
  
`
const LogoContainer = styled.img`
   height: 70%;
  width: auto;
  
`
