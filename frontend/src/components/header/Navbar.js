import { NavLink } from "react-router-dom"
import styled from "styled-components/macro"

function Navbar() {
   return (
      <NavBarContainer>
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
   background-color: #996670;
`
const NavItem = styled(NavLink)`
   color: #fffcf2;
   text-decoration: none;
   font-family: "Montserrat", sans-serif;
   margin: 30px;
`
