import styled from "styled-components/macro";

function Recommendation({name,occasion,wineStyle,region,alcohol,taste,match,description}){

    return(
        <RecommendationCard>
            <Name>{name}</Name>
            <p>Matches with <b>{match}/3</b> of your critiera</p>
            <p>{description}</p>
            <p>{occasion}</p>
            <p>{taste}</p>
            <p>{region}</p>
            <p>{wineStyle}</p>
            <p>{alcohol}</p>
        </RecommendationCard>
    )
}export default Recommendation

const RecommendationCard=styled.div`
  padding: 20px;
border: 1px solid black;
  width: 200px;
  font-family: "Montserrat", sans-serif;
`
const Name=styled.h2`
font-family: "Montserrat",sans-serif;
`