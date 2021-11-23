import Recommendation from "./Recommendation"
import styled from "styled-components/macro"
import NoMatch from "./NoMatch"
import WineBackground from "./recommendations.png"

function Recommendations({ recommendations }) {
   return (
      <BackgroundWrapper>

         <RecommendationContainer>
            {recommendations.length === 0 ? (
               <NoMatch />
            ) : (
               <CardContainer>
                  {recommendations.map((wine) => (
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
                     </div>
                  ))}
               </CardContainer>
            )}
         </RecommendationContainer>
      </BackgroundWrapper>
   )
}
export default Recommendations

const BackgroundWrapper=styled.div`
  background: url(${WineBackground}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const RecommendationContainer = styled.div`


`
const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

export const Heading = styled.h2`
   font-family: "Montserrat", sans-serif;
   text-align: center;
  margin: 0;
  padding: 20px;
  font-weight: bold;
  color: white;
`
