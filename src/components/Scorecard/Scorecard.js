import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Scorecard.css";
import BlackDot from "../../assets/blackdot.png";
import YellowDot from "../../assets/yellowdot.png";
import Silver from "../../assets/silverdot.png";
import Green from "../../assets/greendot.png";
import Tan from "../../assets/tandot.png";
import RecordScore from "../../pages/RecordScore/RecordScore";

export default function Scorecard({ scorecard }) {
  const history = useHistory();

  return (
    <div className="scorecard-comp">
      <div className="hole-info">
        Par {scorecard.par} Handicap {scorecard.handicap}
      </div>
      <div className="dots-section">
        <img className="dots" src={BlackDot} alt=""></img> {scorecard.black}
        <img className="dots" src={YellowDot} alt=""></img>
        {scorecard.yellow}
        <img className="dots" src={Silver} alt=""></img> {scorecard.silver}
        <img className="dots" src={Green} alt=""></img>
        {scorecard.green}
        <img className="dots" src={Tan} alt=""></img>
        {scorecard.tan}
      </div>
      <div className="score">{scorecard.hole}</div>
      <Link
        to={{ hole: scorecard.hole, par: scorecard.par, handicap: scorecard.handicap, black: scorecard.black, yellow: scorecard.yellow, silver: scorecard.silver, green: scorecard.green, tan: scorecard.tan, pathname: "/score" }}
        className="score-player"
      >
        <div
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              history.push("/score");
            }
          }}
          className="score-player"
        >
          Score
        </div>
      </Link>
      <div
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            history.push("/fairways");
          }
        }}
        onClick={() => history.push("/fairways")}
        className="fairways-player"
      >
        Fairways
      </div>
      <div
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            history.push("/greens");
          }
        }}
        onClick={() => history.push("/greens")}
        className="greens-player"
      >
        Greens
      </div>
      <div
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            history.push("/putts");
          }
        }}
        onClick={() => history.push("/putts")}
        className="putts-player"
      >
        Putts
      </div>
    </div>
  );
}
