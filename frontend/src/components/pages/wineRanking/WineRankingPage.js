import WineCard from "./WineCard"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { getWineBottles } from "../../../utils/apiService/WineAPIService"
import styled from "styled-components/macro"
import NoMatch from "../../../utils/NoMatch"
import WineBackground from "./WineBackground.png"
import Loading from "../../../utils/Loading";

function WineRankingPage() {
   const [wineConfiguration, setWineConfiguration] = useState({})
   const [rankedWines, setRankedWines] = useState("inital")
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
          {console.log(rankedWines)}
          {console.log(requestStatus)}
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
             <Loading />
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
