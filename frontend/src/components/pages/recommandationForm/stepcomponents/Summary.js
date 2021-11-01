function Summary({wineConfiguration,handleSubmit}){

    return(<div>
        <h2>Your Choices</h2>
        <ul>
            <li>
                {wineConfiguration.occasion}
            </li>
            <li>
                {wineConfiguration.wineStyle}
            </li>
            <li>
                {wineConfiguration.region}
            </li>
            <li>
                {wineConfiguration.taste}
            </li>
            <li>
                {wineConfiguration.alcohol}
            </li>
        </ul>
        <button onClick={handleSubmit}>Submit</button>
    </div>)
}export default Summary;