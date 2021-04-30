import React from "react";
import {  Link } from "react-router-dom";
import "./Scorecard.css";
import BlackDot from "../../assets/blackdot.png";
import YellowDot from "../../assets/yellowdot.png";
import Silver from "../../assets/silverdot.png";
import Green from "../../assets/greendot.png";
import Tan from "../../assets/tandot.png";
import Score from './Score';


export default function Scorecard({ scorecard, score, roundId, hole }) {

 

  return (
    <div className="scorecard-comp">
      <div className="hole-info">
        Par {scorecard.par} Handicap {scorecard.handicap}
      </div>
      <div className="dots-section">
        <img className="dots" src={BlackDot} alt="black dot" />{scorecard.black}
        <img className="dots" src={YellowDot} alt="yellow dot" /> {scorecard.yellow}
        <img className="dots" src={Silver} alt="silver dot" /> {scorecard.silver}
        <img className="dots" src={Green} alt="green dot" /> {scorecard.green}
        <img className="dots" src={Tan} alt="tan dot" /> {scorecard.tan}
      </div>
      <div className="score">{scorecard.hole}</div>
      <Link
        className="score-player"
        to={{ 
          hole: scorecard.hole, 
          par: scorecard.par, 
          handicap: scorecard.handicap, 
          black: scorecard.black, 
          yellow: scorecard.yellow, 
          silver: scorecard.silver, 
          green: scorecard.green, 
          tan: scorecard.tan, 
          pathname: "/score" 
        }}
      >
        <div>
          Score
          <Score scorecard={scorecard} score={score} roundId={roundId} hole={hole} />
        </div>
      </Link>
    </div>
  );
}
