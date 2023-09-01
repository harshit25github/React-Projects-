import React from "react";

function Progress({ i, numQuestions, crntPnt, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={i - 1 + Number(answer !== null)} />
      <p>
        Question <strong>{i}</strong> / {numQuestions}
      </p>
      <p>
        <strong> {crntPnt} </strong>/ {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
