import WineCard from "./WineCard";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {getWineBottels} from "../../../utils/apiService/WineAPIService";

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
        getWineBottels(filterQuery).then(result =>{
            setRankedWines(result)
        })
        // eslint-disable-next-line
    },[wineConfiguration])

    const [rankedWines,setRankedWines]=useState([])

    return(
        <div>
            {rankedWines.map(wine=>(
            <WineCard wineData={wine}/>
        ))}
        </div>
    )
}export default WineRankingPage