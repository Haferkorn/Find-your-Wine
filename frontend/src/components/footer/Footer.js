import styled from "styled-components/macro"
import { NavLink } from "react-router-dom"

function Footer(){
   return(
      <FooterWrapper>
         <Legals to="#">Imprint</Legals>
         <Legals to="#">Privacy</Legals>
      </FooterWrapper>
   )
}export default Footer

const FooterWrapper=styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100px;
  background-color: #6D7072;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Legals=styled(NavLink)`
  color: #FFFCF2;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  &:active{
    color: #FFFCF2;
  }
  &:hover{
    color: #FFFCF2;
  }
  &:visited{
    color: #FFFCF2;
  }
`
