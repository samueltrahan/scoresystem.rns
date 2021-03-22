import React, { useEffect } from "react";
import "./Score.css";

export default function Score({ score, scorecard }) {

  const parScore = {
    par: scorecard.par,
    birdie: scorecard.par - 1,
    bogey: scorecard.par + 1,
    eagle: scorecard.par - 2,
    doubleBogey: scorecard.par + 2,
    tripleBogey: scorecard.par + 3,
  };

  const setStyling = () => {
    <>
      {score === parScore.par ? (
        <div className="par">{score}</div>
      ) : score === parScore.birdie ? (
        <div className="birdie">{score}</div>
      ) : score === parScore.bogey ? (
        <div className="bogey">{score}</div>
      ) : score === parScore.eagle ? (
        <div className="eagle">{score}</div>
      ) : score === parScore.doubleBogey ? (
        <div className="double-bogey">{score}</div>
      ) : score === parScore.tripleBogey ? (
        <div className="triple-bogey">{score}</div>
      ) : (
        ""
      )}
    </>;
  };

  useEffect(() => {
    setStyling();
  }, [score]);

  return <>{setStyling}</>;
}
