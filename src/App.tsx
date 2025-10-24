import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [streak, setStreak] = useState(0);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setAnswer(value);
    }
  }
  const generateNewQuestion = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setAnswer("");
  };
  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userAnswer = parseInt(answer, 10);
    if (userAnswer == num1 + num2) {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    generateNewQuestion();
  }
  return (
    <>
      <h1>Fact Attack</h1>
      <form className="card" onSubmit={checkAnswer}>
        <label>
          {num1} + {num2} ={" "}
          <input
            inputMode="numeric"
            value={answer}
            onChange={handleChange}
            placeholder="?"
          />
        </label>
      </form>
      <p>Streak: {streak}</p>
    </>
  );
}

export default App;
