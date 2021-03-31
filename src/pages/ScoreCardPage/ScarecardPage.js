import React, {useEffect} from "react";
import "./ScorecardPage.css";
import { scoreCardDB } from "../../scorecardDB";
import Scorecard from "../../components/Scorecard/Scorecard";



export default function ScarecardPage({ user, score, fairways, getHoleScore }) {
 

  return (
    <div>
  
      {scoreCardDB.map((scorecard) => (
        <Scorecard getHoleScore={getHoleScore} scorecard={scorecard} score={score} fairways={fairways}/>
      ))}
    </div>
  );
}
