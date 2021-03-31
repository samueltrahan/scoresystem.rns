import React, { useState, useEffect } from "react";
import "./Score.css";
import axios from 'axios';

export default function Score({score,  scorecard }) {
  const [par, setPar] = useState();
  const [holeInfo, setHoleInfo] = useState([]);
  const [currentScore, setCurrentScore] = useState()
  const [currentHoleIdx, setCurrentHoleIdx] = useState()
  const parScore = {
    par: scorecard.par,
    birdie: scorecard.par - 1,
    albatross: scorecard.par - 3,
    bogey: scorecard.par + 1,
    eagle: scorecard.par - 2,
    doubleBogey: scorecard.par + 2,
    tripleBogey: scorecard.par + 3,
  };

  const setStyling = () => {
    <>
      {score === parScore.par
        ? setPar("par")
        : score === parScore.birdie
        ? setPar("birdie")
        : score === parScore.bogey
        ? setPar("bogey")
        : score === parScore.eagle
        ? setPar("eagle")
        : score === parScore.doubleBogey
        ? setPar("double-bogey")
        : score === parScore.tripleBogey
        ? setPar("triple-bogey")
        : score === parScore.albatross
        ? setPar("albatross")
        : ""}
    </>;
  };

  const getHoleScore = async () => {
    await axios
      .get(`http://localhost:3001/api/rounds/score`)
      .then((response) => {
        console.log(response.data)
        setHoleInfo(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getCurrentHoleInfo = async () => {
    await holeInfo.map((info) => {
      setCurrentScore(info.score);
      
    });
  };

  useEffect(() => {
    getHoleScore()
    getCurrentHoleInfo()
    setStyling();
  }, [score]);

  

  return <div className={par}>{score}</div>;
}
