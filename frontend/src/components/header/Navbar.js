import { NavLink } from "react-router-dom"
import styled from "styled-components/macro"
import logo from "./logo.png"

import { BiLogInCircle } from "react-icons/bi"

function Navbar() {
   return (
      <NavBarContainer>
         <NavItem to="/" exact>
            <LogoContainer src={logo} alt="Logo" />
         </NavItem>
         <NavItem to="/login">
            <LoginIcon size={30} color={"#fffcf2"} />
         </NavItem>
      </NavBarContainer>
   )
}
export default Navbar

const NavBarContainer = styled.section`
   display: flex;
   justify-content: center;
   background-color: #8b2635;
   width: 100%;
   height: 100px;
`
const NavItem = styled(NavLink)`
   color: #ffff;
   text-decoration: none;
   font-family: "Montserrat", sans-serif;
   margin: 30px;
`
const LogoContainer = styled.img`
   height: 200%;
   width: auto;
   position: relative;
   bottom: 20px;
`
const LoginIcon = styled(BiLogInCircle)`
   position: fixed;
   right: 35px;
`
