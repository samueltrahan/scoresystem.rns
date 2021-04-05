import React, { useState, useEffect } from "react";
import "./Score.css";
import axios from 'axios';


export default function Score({ scorecard, score, roundId, hole }) {
  const [par, setPar] = useState();
  const [holeInfo, setHoleInfo] = useState([]);
  const [currentScore, setCurrentScore] = useState();
  const [currentHoleIdx, setCurrentHoleIdx] = useState();
  const [currentRoundId, setCurrentRoundId] = useState();
  const parScore = {
    par: scorecard.par,
    birdie: scorecard.par - 1,
    albatross: scorecard.par - 3,
    bogey: scorecard.par + 1,
    eagle: scorecard.par - 2,
    doubleBogey: scorecard.par + 2,
    tripleBogey: scorecard.par + 3,
  };

  const getHoleScore = async () => {
    await axios.get(`http://localhost:3001/api/rounds/score`, {
      roundId: roundId
    })
    .then(response => {
      setHoleInfo(response.data)
    })
    overTheHole()
  }

  const overTheHole = async () => {
    await holeInfo.map(holes => {
      setCurrentRoundId(hole.roundId)
      console.log=(currentRoundId)
    })
  }

 
  const setStyling = () => {
    <>
      {currentScore === parScore.par
        ? setPar("par")
        : currentScore === parScore.birdie
        ? setPar("birdie")
        : currentScore === parScore.bogey
        ? setPar("bogey")
        : currentScore === parScore.eagle
        ? setPar("eagle")
        : currentScore === parScore.doubleBogey
        ? setPar("double-bogey")
        : currentScore === parScore.tripleBogey
        ? setPar("triple-bogey")
        : currentScore === parScore.albatross
        ? setPar("albatross")
        : ""}
    </>;
  };

  useEffect(() => {
   getHoleScore();
    setStyling();
  }, [currentScore]);

  return (roundId = currentRoundId ? (
    <div className={par}>{currentScore}</div>
  ) : (
    ""
  ));
}
