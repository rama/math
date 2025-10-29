import { useState } from "react";
import "./App.css";
import Config from "./components/Config";
import Quiz from "./components/Quiz";
import { Configuration } from "./types";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [config, setConfig] = useState<Configuration>({
    operation: "+",
    maxNumber: 11,
  });
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
