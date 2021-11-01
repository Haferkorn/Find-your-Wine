import {NextButton} from "./Step1";

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
        <NextButton onClick={handleSubmit}>Submit</NextButton>
    </div>)
}export default Summary;