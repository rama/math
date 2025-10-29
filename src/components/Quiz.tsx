import { useState } from "react";

function Quiz({ config }) {
  const { operation, maxNumber } = config;
  const [answer, setAnswer] = useState("");
  const [num1, setNum1] = useState(Math.floor(Math.random() * maxNumber));
  const [num2, setNum2] = useState(Math.floor(Math.random() * maxNumber));
  const [streak, setStreak] = useState(0);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setAnswer(value);
    }
  }
  const generateNewQuestion = () => {
    setNum1(Math.floor(Math.random() * maxNumber));
    setNum2(Math.floor(Math.random() * maxNumber));
    setAnswer("");
  };
  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userAnswer = Number(answer);
    let correctAnswer;

    switch (operation) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "x":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = num1 / num2;
        break;
    }

    if (userAnswer === correctAnswer) {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    generateNewQuestion();
  }
  return (
    <>
      <form className="card" onSubmit={checkAnswer}>
        <label>
          {num1} {operation} {num2} ={" "}
          <input
            inputMode="numeric"
            value={answer}
            onChange={handleChange}
            placeholder="?"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Streak: {streak}</p>
    </>
  );
}
export default Quiz;
