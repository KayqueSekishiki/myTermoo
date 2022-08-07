import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>VITÓRIA!</h1>
          <p className="solution">{solution}</p>
          <p>Você descobriu a palavra secreta com {turn} palpites</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>DERROTA!</h1>
          <p className="solution">{solution}</p>
          <p>Que tenha mais sorte da próxima vez</p>
        </div>
      )}
    </div>
  );
}
