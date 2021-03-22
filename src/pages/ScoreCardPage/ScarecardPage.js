import React from "react";
import "./ScorecardPage.css";
import axios from "axios";
import { scoreCardDB } from "../../scorecardDB";
import Scorecard from "../../components/Scorecard/Scorecard";

const farmId = 1;

export default function ScarecardPage({ user, score }) {
  const addNewRound = () => {
    axios.post("http://localhost:3001/create", {
      courseId: farmId,
      user: user,
    });
  };

  return (
    <div>
      <div>
        <button onClick={addNewRound} className="new-round-btn">
          New Round
        </button>
      </div>
      {scoreCardDB.map((scorecard) => (
        <Scorecard scorecard={scorecard} score={score} />
      ))}
    </div>
  );
}
