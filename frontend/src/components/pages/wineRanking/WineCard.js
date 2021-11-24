import styled from "styled-components/macro"
import { BsInfoCircle } from "react-icons/bs"
import { useState } from "react"
import { Button } from "../recommandations/Recommendation"

function WineCard({ wineData }) {
   const [displayButtons, setDisplaybuttons] = useState(false)

   const handleStatus = () => {
      setDisplaybuttons(!displayButtons)
   }

   return (
      <WineCardContainer>
         <Title>{wineData.title}</Title>
         <hr />
         <h3>Grape: {wineData.variety}</h3>
         <p>Quality: {wineData.points}/100 Points</p>
         <p>Price: {wineData.price}€</p>
         <p>
            Winery: {wineData.winery}, {wineData.country}
         </p>

         {displayButtons ? (
            <p>{wineData.description}</p>
         ) : (
            <Button onClick={handleStatus}>
               <BsInfoCircle /> More
            </Button>
         )}
      </WineCardContainer>
   )
}
export default WineCard

const WineCardContainer = styled.div`
   padding: 20px;
   margin: 20px;
   border: 1px solid #a38b7a;
   border-radius: 10px;
   max-width: 300px;
   font-family: "Montserrat", sans-serif;
   box-shadow: 5px 5px 10px 1px #737070;
   font-weight: bold;
  background-color: #BBAFA3;
  opacity: 90%;
`

const Title = styled.h2`
   font-family: "Tangerine", cursive;
   font-size: 30px;
   margin-bottom: 5px;
`
