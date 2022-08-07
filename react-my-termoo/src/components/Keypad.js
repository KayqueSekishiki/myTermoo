import React, { useEffect, useState } from "react";
import lettersDB from "../letters";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(lettersDB);
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
