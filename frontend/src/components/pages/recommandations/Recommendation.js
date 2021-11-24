import styled from "styled-components/macro"
import { BsInfoCircle,BsXLg,BsCheckLg } from "react-icons/bs"
import { useState } from "react"
import { useHistory } from "react-router-dom"

function Recommendation({
    wineconfiguration,
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
         <HeaderWrapper>
            <Name>{name}</Name>
            <PointsWrapper>
               <Points>
              {Math.round((match / 3) * 100)}%
               </Points>
            </PointsWrapper>
         </HeaderWrapper>
         <hr/>

         <ul>
            <ListItem>
               {occasion}
               <BsCheckLg/>
            </ListItem>
            <ListItem>
               {taste }
               {taste===wineconfiguration.taste?<BsCheckLg/>:<BsXLg/>}
            </ListItem>
            <ListItem>
               {region }
               {region===wineconfiguration.region?<BsCheckLg/>:<BsXLg/>}
            </ListItem>
            <ListItem>
               {wineStyle }
               <BsCheckLg/>
            </ListItem>
            <ListItem>
               {alcohol }
               {alcohol===wineconfiguration.alcohol?<BsCheckLg/>:<BsXLg/>}
            </ListItem>
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

const HeaderWrapper=styled.div`
   display: grid;
   grid-template-columns: 3fr 1fr;
   grid-template-rows: 1fr;
`

const PointsWrapper=styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   width: 50px;
   text-align: center;
   vertical-align: middle;
   border-radius: 50%;
   background: #5B7553;
   box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const Points=styled.p`
margin: 3px;
   color: white;
`

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
   display: flex;
   list-style: none;
   padding: 3px;
   gap: 10px;
`

