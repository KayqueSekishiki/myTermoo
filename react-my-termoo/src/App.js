import { useEffect, useState } from "react";
import solutionsDB from "./solutions";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState([null]);

  useEffect(() => {
    randomizeSolutions(solutionsDB);
    const randomSolution =
      solutionsDB[Math.floor(Math.random() * solution.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);

  function randomizeSolutions(array) {
    let temp,
      j,
      i = array.length;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }

  return (
    <div className="App">
      <h1>{"Certamente não é o Termoo (by Sekishiki)"}</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
