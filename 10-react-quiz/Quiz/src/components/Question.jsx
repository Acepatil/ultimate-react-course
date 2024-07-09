import Options from "./Options"

/* eslint-disable react/prop-types */
function Question({question,dispatch,answer}) {


    return (
        <div>
            <h4>{question.question}</h4>
            <div className="option">
                <Options question={question} dispatch={dispatch} answer={answer}/>
            </div>
        </div>
    )
}

export default Question
