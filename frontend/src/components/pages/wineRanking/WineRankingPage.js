import WineCard from "./WineCard";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {getWineBottles} from "../../../utils/apiService/WineAPIService";
import styled from "styled-components/macro";

function WineRankingPage(props){

    const [wineConfiguration,setWineConfiguration]=useState({})

    const location=useLocation()

    const filterQuery={
        variety:wineConfiguration.name,
        region:wineConfiguration.region
    }

    useEffect(() => {
        setWineConfiguration(location.state.wineData)

    }, [])

    useEffect(()=>{
        getWineBottles(filterQuery).then(result =>{
            setRankedWines(result)
        })
        // eslint-disable-next-line
    },[wineConfiguration])

    const [rankedWines,setRankedWines]=useState([])

    return(
        <WineContainer>
            {rankedWines.map(wine=>(
            <WineCard wineData={wine}/>
        ))}
        </WineContainer>
    )
}export default WineRankingPage

const WineContainer=styled.div`
display: flex;
  justify-content: center;
`

