import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date().getDate();

  return (
    <>
      <div>
        <button className="incr" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
        <span> Step:{step}</span>
        <button className="incr" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
      </div>
      <div>
        <button className="incr" onClick={() => setCount((s) => s + step)}>
          +
        </button>
        <span> Counter:{count}</span>
        <button className="incr" onClick={() => setCount((s) => s - step)}>
          -
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date}</span>
      </p>
    </>
  );
}
