import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("?");
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [correct, setCorrect] = useState(false);
  function handleChange(e) {
    setAnswer(e.target.value);
  }
  function checkAnswer(e) {
    if (answer == num1 + num2) {
      setCorrect(true);
    }
  }
  return (
    <>
      <h1>Math Up</h1>
      <form className="card" onSubmit={checkAnswer}>
        <label>
          {num1} + {num2} ={" "}
          <input type="text" value={answer} onChange={handleChange} />
        </label>
      </form>
      {correct && <p>Correct!</p>}
    </>
  );
}

export default App;
