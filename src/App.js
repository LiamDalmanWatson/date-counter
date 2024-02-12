import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Steps />
      <Counter />
      <Calendar />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(0);

  function minusStep() {
    if (step > 0) setStep(step - 1);
  }

  function addStep() {
    if (step < 31) setStep(step + 1);
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
    if (count < 31) setCount(count + 1);
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

function Calendar() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p> days from today is {date.toDateString()}</p>
    </div>
  );
}
