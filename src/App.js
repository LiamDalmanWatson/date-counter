import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((c) => c + 1)}>+</button>
        <div className="buttons">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          Count: {count}
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
        <p>
          {/**Not recommended to use nested ternary operators */}
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

// export default function App() {
//   // const [date, setDate] = useState(HDate);
//   return (
//     <div className="App">
//       <Steps />
//       <Counter />
//       <HDate />
//     </div>
//   );
// }
// function Steps() {
//   const [step, setStep] = useState(0);

//   function minStep() {
//     if (step > 0) setStep(step - 1);
//   }

//   function addStep() {
//     if (step < 31) setStep(step + 1);
//   }

//   return (
//     <div>
//       <div className="buttons">
//         <button onClick={minStep}>-</button>
//         Step: {step.props.current.getFullYear()}
//         <button onClick={addStep}>+</button>
//       </div>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   function deCount() {
//     if (count > 0) setCount(count - 1);
//   }
//   function inCount() {
//     if (count < 31) setCount(count + 1);
//   }

//   return (
//     <div>
//       <div className="buttons">
//         <button onClick={deCount}>-</button>
//         Count: {count.props.current.getDate()}
//         <button onClick={inCount}>+</button>
//       </div>
//     </div>
//   );
// }

// function HDate(props) {
//   const current = new Date();
//   const date = `${props.current.getDate()}-${
//     current.getMonth() + 1
//   }-${props.current.getFullYear()}`;
//   return <p>"" days from today is {date}</p>;
// }
