import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["fazer", "ninja"]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("Palpite formatado - ", currentGuess);
  };

  const addGuess = () => {};

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("você usou todas as suas tentativas");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("você ja testou essa palavra");
        return;
      }

      if (currentGuess.length !== 5) {
        console.log("A palavra deve conter 5 caracteres");
        return;
      }
      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
