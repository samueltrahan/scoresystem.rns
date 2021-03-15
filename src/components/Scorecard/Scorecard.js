import React from 'react';
import './Scorecard.css';
import BlackDot from '../../assets/blackdot.png';
import YellowDot from '../../assets/yellowdot.png';
import Silver from '../../assets/silverdot.png';
import Green from '../../assets/greendot.png';
import Tan from '../../assets/tandot.png';

export default function Scorecard({scorecard}) {
    return (
        <div className="scorecard-comp">
            <div className="hole-info">
                Par {scorecard.par} Handicap {scorecard.handicap}
            </div>
            <div className="dots-section">
               <img className="dots" src={BlackDot} alt=""></img> {scorecard.black}
                <img className="dots" src={YellowDot} alt=""></img>{scorecard.yellow}
               <img className="dots" src={Silver} alt=""></img> {scorecard.silver}
                <img className="dots" src={Green} alt=""></img>{scorecard.green}
                <img className="dots" src={Tan} alt=""></img>{scorecard.tan}
            </div>
            <div className="score">
            {scorecard.hole}
            </div>
        </div>
    )
}
