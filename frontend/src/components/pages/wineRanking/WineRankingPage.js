import WineCard from "./WineCard";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";

function WineRankingPage(props){

    const [wineConfiguration,setWineConfiguration]=useState({})

    const location=useLocation()


    useEffect(() => {
        console.log(location.state.wineData)
        setWineConfiguration(location.state.wineData)
        // eslint-disable-next-line
    }, [])

    const [rankedWines,setRankedWines]=useState(["Wine","Wine2"])

    return(
        <div>
            {rankedWines.map(wine=>(
            <WineCard/>
        ))}
        </div>
    )
}export default WineRankingPage