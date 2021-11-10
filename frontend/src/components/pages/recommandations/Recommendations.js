import Recommendation from "./Recommendation";
import styled from "styled-components/macro";
import NoMatch from "./NoMatch";


function Recommendations({recommendations}){
    return(
        <div>
            <Heading>Your Recommendations:</Heading>
            <RecommendationContainer>
                {recommendations===undefined?
                <NoMatch/>
                    :<CardContainer>
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
                    )}</CardContainer>}
            </RecommendationContainer>
        </div>
    )
}
export default Recommendations

const RecommendationContainer=styled.div`
  
`
const CardContainer=styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Heading=styled.h2`
font-family: "Montserrat",sans-serif;
  text-align: center;
`
