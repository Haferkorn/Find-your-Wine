import Recommendation from "./Recommendation";

function Recommendations({recommendations}){
    return(
        <div>
            <h2>Your Recommendations:</h2>
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
                </div>
            ))}

        </div>
    )
}
export default Recommendations