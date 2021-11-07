import styled from "styled-components/macro";

function Recommendation({name,occasion,wineStyle,region,alcohol,taste,match,description}){

    return(
        <div>
            <h2>{name}</h2>
            <p>{match}</p>
            <p>{description}</p>
            <p>{occasion}</p>
            <p>{taste}</p>
            <p>{region}</p>
            <p>{wineStyle}</p>
            <p>{alcohol}</p>
        </div>
    )
}export default Recommendation

const RecommendationCard=styled.div`
border: 1px solid black;
  width: 200px;
`