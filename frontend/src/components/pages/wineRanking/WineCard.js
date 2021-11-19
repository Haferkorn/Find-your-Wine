import styled from "styled-components/macro";

function WineCard({wineData}){
    return(
        <WineCardContainer>
            <h2>{wineData.title}</h2>

        </WineCardContainer>
    )
}export default WineCard

const WineCardContainer=styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid #a38b7a;
  border-radius: 10px;
  max-width: 300px;
  font-family: "Montserrat", sans-serif;
  box-shadow: 5px 5px 10px 1px #8b2635;
`

const ListItem=styled.li`
  list-style: circle outside;
`