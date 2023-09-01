import React from "react";

function Finished({ points, totalPoints, dispatch }) {
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default Finished;
