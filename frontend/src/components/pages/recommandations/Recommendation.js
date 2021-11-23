import styled from "styled-components/macro"
import { BsInfoCircle } from "react-icons/bs"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi";

function Recommendation({
   name,
   occasion,
   wineStyle,
   region,
   alcohol,
   taste,
   match,
   description,
}) {
   const [wineData] = useState({
      name: name,
      occasion: occasion,
      wineStyle: wineStyle,
      region: region,
      alcohol: alcohol,
      taste: taste,
      match: match,
      description: description,
   })

   const [displayButtons, setDisplayButtons] = useState(false)
   const history = useHistory()

   const handleStatus = () => {
      setDisplayButtons(!displayButtons)
   }

   const redirect = () => {
      history.push("/wineRanking", { wineData: wineData })
   }

   return (
      <RecommendationCard>
         <Name>{name}</Name>
         <hr/>
         <p>
            Matches with <b>{Math.round((match / 3) * 100)}%</b> of your
            criteria
         </p>
         <ul>
            <ListItem>{occasion}</ListItem>
            <ListItem>{taste}</ListItem>
            <ListItem>{region}</ListItem>
            <ListItem>{wineStyle}</ListItem>
            <ListItem>{alcohol}</ListItem>
         </ul>
         {displayButtons ? (
            <p>{description}</p>
         ) : (
            <Button onClick={handleStatus}>
               <BsInfoCircle /> More
            </Button>
         )}
         <Button onClick={() => redirect()}> Find matching wine</Button>
      </RecommendationCard>
   )
}
export default Recommendation

const RecommendationCard = styled.div`
   background-color: #BBAFA3;
   opacity: 90%;
   padding: 20px;
   margin: 20px;
   border: 1px solid #a38b7a;
   border-radius: 10px;
   max-width: 300px;
   font-family: "Montserrat", sans-serif;
   box-shadow: 5px 5px 10px 1px #737070;
   font-weight: bold;
`
const Name = styled.h2`
   font-family: "Tangerine", cursive;
   font-size: 40px;
`

export const Button = styled.button`
   transition: all 0.2s ease-in-out;
   margin-top: 10px;
   margin-bottom: 10px;
   background: #e6e1d6;
   border-radius: 6px;
   border: 1px solid #0d1b2a;
   display: inline-block;
   cursor: pointer;
   color: #0d1b2a;
   font-family: "Montserrat", sans-serif;
   font-size: 15px;
   font-weight: bold;
   padding: 6px 24px;
   text-decoration: none;
   &:hover {
      background-color: #8b2635;
      color: #e6e1d6;
      transform: scale(1.1);
   }
`

const ListItem = styled.li`
   list-style: none;
`
