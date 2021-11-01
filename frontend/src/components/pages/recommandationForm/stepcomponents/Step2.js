function Step2({nextStep,handleDataInput}){

    const stepNumber=2;
    return(
        <form>
            <h2>Second Step</h2>
            <button onClick={()=>nextStep(stepNumber)}>next</button>
        </form>
    )
}export default Step2