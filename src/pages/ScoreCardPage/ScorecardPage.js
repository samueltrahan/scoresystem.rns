import React, {useEffect} from "react";
import "./ScorecardPage.css";
import { scoreCardDB } from "../../scorecardDB";
import Scorecard from "../../components/Scorecard/Scorecard";



export default function ScorecardPage({ user, roundId, hole, score }) {
 

  return (
    <div className="ScoreCardPage">
      {scoreCardDB.map((scorecard) => (
        <Scorecard  scorecard={scorecard} roundId={roundId} hole={hole} score={score} />
      ))}
    </div>
  );
}
