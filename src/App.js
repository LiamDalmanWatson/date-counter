import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <minusStep />
      <addStep />
    </div>
  );
}

function Counter() {
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
        <div>Step: {step}</div>
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
