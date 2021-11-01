function Step1({nextStep}){

    const stepNumber=1;
    return(
        <form>
            <h2>First Step</h2>
            <button onClick={()=>nextStep(stepNumber)}>next</button>
        </form>
    )
}export default Step1