function Step2({nextStep}){

    const stepNumber=2;
    return(
        <form>
            <h2>Second Step</h2>
            <button onClick={()=>nextStep(stepNumber)}>next</button>
        </form>
    )
}export default Step2