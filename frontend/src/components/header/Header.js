
import styled from 'styled-components/macro'
import Navbar from "./Navbar"
import logo from "./logo.png"

function Header(){
   return(
      <div>
         <LogoContainer src={logo} alt="Logo"/>
         <Navbar/>
      </div>

   )
}
export default Header

const LogoContainer=styled.img`
width: 100%
`