import { useState } from "react";

function Quiz({ config }) {
  const generateNumbers = () => {
    const n1 = Math.floor(Math.random() * maxNumber);
    const n2 = Math.floor(Math.random() * maxNumber);

    if (operation === "-" && n1 < n2) {
      return [n2, n1];
    }

    return [n1, n2];
  };

  const { operation, maxNumber } = config;
  const [answer, setAnswer] = useState("");
  const [operands, setOperands] = useState(() => generateNumbers());
  const [streak, setStreak] = useState(0);

  const generateNewQuestion = () => {
    setOperands(generateNumbers());
    setAnswer("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setAnswer(value);
    }
  };

  const checkAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAnswer = Number(answer);
    let correctAnswer;
    switch (operation) {
      case "+":
        correctAnswer = operands[0] + operands[1];
        break;
      case "-":
        correctAnswer = operands[0] - operands[1];
        break;
      case "x":
        correctAnswer = operands[0] * operands[1];
        break;
      case "/":
        correctAnswer = operands[0] / operands[1];
        break;
    }

    if (userAnswer === correctAnswer) {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    generateNewQuestion();
  };

  return (
    <>
      <form className="card" onSubmit={checkAnswer}>
        <label>
          {operands[0]} {operation} {operands[1]} ={" "}
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
