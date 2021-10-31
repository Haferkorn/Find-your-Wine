import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

function Navbar(){
   return(
      <Wrapper>
         <NavLinkStyled to="/" exact>
            Home
         </NavLinkStyled>
         <NavLinkStyled to="/login">Login</NavLinkStyled>
      </Wrapper>
   )
}export default Navbar

const Wrapper = styled.div``

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`