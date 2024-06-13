import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test,setTest]=useState({name:"Jonas"})

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setTest({name:"Okay Practice This"})
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setStep((s)=>s+1)
    // BAD PRACTICE
    // test.name="Fres"

    // setTest({name:"Are you sure?"})
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step-1]}
          </StepMessage>

          <div className="buttons">
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handlePrevious}
              text={"Previous"}
              emoji={"👈"}
            ><span>👈</span>Previous</Button>
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handleNext}
            ><span>👉</span>Next</Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({step,children}){
  return(
    <p className="message">
            <h3>Step {step}</h3>{children}
          </p>
  )
}

function Button({ textColor, bgColor, onClick,children}) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
