import { useState } from "react";
import "./App.css";
import Config from "./components/Config";
import Quiz from "./components/Quiz";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [config, setConfig] = useState({ operation: "+", maxNumber: 10 });
  return (
    <>
      <h1>Fact Attack</h1>
      {quizStarted ? (
        <Quiz config={config} />
      ) : (
        <Config
          onStart={(selectedConfig) => {
            setConfig(selectedConfig);
            setQuizStarted(true);
          }}
        />
      )}
    </>
  );
}

export default App;
