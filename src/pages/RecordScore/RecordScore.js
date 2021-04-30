import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./RecordScore.css";
import Black from "../../assets/blackdot.png";
import Yellow from "../../assets/yellowdot.png";
import Silver from "../../assets/silverdot.png";
import Green from "../../assets/greendot.png";
import Tan from "../../assets/tandot.png";

export default function RecordScore({handleScoring}) {
  const location = useLocation();
  const [counter, setCounter] = useState(location.par);
  const [hole, setHole] = useState(location.hole)


  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="record-score-page">
      <div className="record-hole">
        <h1>Hole {location.hole}</h1>
      </div>
      <div className="record-par">
        <h4>Par {location.par} </h4>
        <h5>Handicap {location.handicap}</h5>
      </div>
      <div className="record-yardages">
          <img className="record-dots" src={Black} alt="black dot" /> {location.black}
          <img className="record-dots" src={Yellow} alt="yellow dot" /> {location.yellow}
          <img className="record-dots" src={Silver} alt="silver dot" /> {location.silver}
          <img className="record-dots" src={Green} alt="green dot" /> {location.green}
          <img className="record-dots" src={Tan} alt="tan dot" /> {location.tan}
      </div>
      <div className="counter">
        <button className="counter-btn" onClick={decrementCount}>
          <i className="fas fa-arrow-left fa-2x counter-arrow" />
        </button>
        <h3 className="counter-value">{counter}</h3>
        <button className="counter-btn" onClick={incrementCount}>
          <i className="fas fa-arrow-right fa-2x counter-arrow" />
        </button>
      </div>
      <div className="submit-score">
        <button
          onClick={(e) => handleScoring(e, counter, hole)}
          className="submit-btn"
        >
          Record Score
        </button>
      </div>
    </div>
  );
}
