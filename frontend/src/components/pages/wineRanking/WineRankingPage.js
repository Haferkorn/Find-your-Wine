import WineCard from "./WineCard"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { getWineBottles } from "../../../utils/apiService/WineAPIService"
import styled from "styled-components/macro"
import NoMatch from "../recommandations/NoMatch"
import WineBackground from "./WineBackground.png"
import Loader from "react-loader-spinner";

function WineRankingPage() {
   const [wineConfiguration, setWineConfiguration] = useState({})
   const [rankedWines, setRankedWines] = useState(undefined)
   const[requestStatus, setRequestStatus]=useState("initial")

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
           setRequestStatus("done")
      })
      // eslint-disable-next-line
   }, [wineConfiguration])

   return (
      <WineContainer>
         {requestStatus==="done" ? <div>
         {rankedWines.length===0 ?
            <NoMatch />
          :
            <div>
               {rankedWines.map((wine) =>
                  <div key={wine.id}>
                     <WineCard wineData={wine} />
                  </div>
               )}
            </div>
         }</div>:
             <Loader type="ThreeDots" color="#8b2635" height={80} width={80} />
             }
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
