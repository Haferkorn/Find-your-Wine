
import styled from 'styled-components/macro'
import Navbar from "./Navbar"

function Header(){
   return(
      <div>
         <Logo/>
         <Navbar/>
      </div>

   )
}
export default Header

const Logo=styled.img``