import Recommendation from "./Recommendation";
import styled from "styled-components/macro";


function Recommendations({recommendations}){
    return(
        <div>
            <Heading>Your Recommendations:</Heading>
            <RecommendationContainer>
                {recommendations===undefined?
                <Heading>No Matching wines</Heading>
                    :<div>
                {recommendations.map(wine=>(
                <div key={wine.name}>
                    <Recommendation
                        name={wine.name}
                        occasion={wine.occasion}
                        wineStyle={wine.wineStyle}
                        region={wine.region}
                        alcohol={wine.alcohol}
                        taste={wine.taste}
                        match={wine.matchingPoints}
                        description={wine.description}
                    />
                </div>)
                    )}</div>}
            </RecommendationContainer>
        </div>
    )
}
export default Recommendations

const RecommendationContainer=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
`

const Heading=styled.h2`
font-family: "Montserrat",sans-serif;
  text-align: center;
`
