import React, { useEffect, useState } from "react";
import lettersDB from "../letters";

export default function Keypad() {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(lettersDB);
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
}
