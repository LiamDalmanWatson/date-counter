import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(0);

  function minusStep() {
    if (step > 0) setStep(step - 1);
  }

  function addStep() {
    if (step < 31) setStep(step + 5);
  }

  return (
    <div>
      <div className="buttons">
        <button onClick={() => minusStep()}>-</button>
        Step: {step}
        <button
          onClick={() => {
            addStep();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function minusCount() {
    if (count > 0) setCount(count - 1);
  }

  function addCount() {
    if (count < 30) setCount(count + 1);
  }

  return (
    <div>
      <div className="buttons">
        <button onClick={() => minusCount()}>-</button>
        Count: {count}
        <button
          onClick={() => {
            addCount();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
