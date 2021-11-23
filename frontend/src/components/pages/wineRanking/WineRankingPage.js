import WineCard from "./WineCard"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { getWineBottles } from "../../../utils/apiService/WineAPIService"
import styled from "styled-components/macro"
import NoMatch from "../recommandations/NoMatch"
import WineBackground from "./WineBackground.png"

function WineRankingPage() {
   const [wineConfiguration, setWineConfiguration] = useState({})

   const location = useLocation()

   const filterQuery = {
      variety: wineConfiguration.name,
      region: wineConfiguration.region,
   }

   useEffect(() => {
      setWineConfiguration(location.state.wineData)
      // eslint-disable-next-line
   }, [])

   useEffect(() => {
     getWineBottles(filterQuery).then((result) => {
         setRankedWines(result)
      })
      // eslint-disable-next-line
   }, [wineConfiguration])

   const [rankedWines, setRankedWines] = useState([])

   return (
      <WineContainer>
         {rankedWines && rankedWines.length === 0 ? (
            <NoMatch />
         ) : (
            <div>
               {rankedWines.map((wine) => (
                  <div key={wine.id}>
                     <WineCard wineData={wine} />
                  </div>
               ))}
            </div>
         )}
      </WineContainer>
   )
}
export default WineRankingPage

const WineContainer = styled.div`
   background: url(${WineBackground}) no-repeat center center fixed;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`
