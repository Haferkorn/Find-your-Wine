import WineCard from "./WineCard";
import {useState} from "react";

function WineRankingPage(){
    const [rankedWines,setRankedWines]=useState(["Wine","Wine2"])


    return(
        <div>
            {rankedWines.map(wine=>(
            <WineCard/>
        ))}
        </div>
    )
}export default WineRankingPage