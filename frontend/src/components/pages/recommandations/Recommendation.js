import styled from "styled-components/macro";
import {BsInfoCircle} from "react-icons/bs";
import {useState} from "react";

function Recommendation({name,occasion,wineStyle,region,alcohol,taste,match,description}){

    const [displayButtons, setDisplaybuttons] = useState(false);

    const handlestatus = () => {
        setDisplaybuttons(!displayButtons);
    };

    return(
        <RecommendationCard>
            <Name>{name}</Name>
            <p>Matches with <b>{match}/3</b> of your critiera</p>
            <ul>
                <ListItem>{occasion}</ListItem>
                <ListItem>{taste}</ListItem>
                <ListItem>{region}</ListItem>
                <ListItem>{wineStyle}</ListItem>
                <ListItem>{alcohol}</ListItem>
            </ul>
            {displayButtons?<p>{description}</p>:
           <Button onClick={handlestatus}><BsInfoCircle/> Read Descripton</Button>}

        </RecommendationCard>
    )
}export default Recommendation

const RecommendationCard=styled.div`
  padding: 20px;
  border: 1px solid #a38b7a;
  border-radius: 10px;
  width: 200px;
  font-family: "Montserrat", sans-serif;
  box-shadow: 5px 5px 10px 1px #8b2635;
`
const Name=styled.h2`
font-family: "Montserrat",sans-serif;
`

const Button=styled.button`
  transition: all .2s ease-in-out;
  margin-bottom: 40px;
  margin-top: 10px;
  background: #8b2635;
  border-radius: 6px;
  border: 0 solid #0d1b2a;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  &:hover {
    background-color: #607466;
    color: #e6e1d6;
    transform: scale(1.1);
  }
`

const ListItem=styled.li`
  list-style: circle outside;
`
