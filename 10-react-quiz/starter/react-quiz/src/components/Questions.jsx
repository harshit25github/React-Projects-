import React from "react";
import Options from "./Options";

function Questions({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options>
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAns", payload: i })}
            // onClick={dispatch({ type: "newAns", payload: i })}
          >
            {option}
          </button>
        ))}
      </Options>
    </div>
  );
}

export default Questions;
