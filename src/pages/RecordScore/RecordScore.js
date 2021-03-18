import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import './RecordScore.css';
import Black from '../../assets/blackdot.png';
import Yellow from '../../assets/yellowdot.png';
import Silver from '../../assets/silverdot.png';
import Green from '../../assets/greendot.png';
import Tan from '../../assets/tandot.png';

export default function RecordScore() {
    
const location = useLocation();
    

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
                <p><img className="record-dots" src={Black} alt=""></img> {location.black}</p>
                <p><img className="record-dots"  src={Yellow} alt=""/> {location.yellow}</p>
                <p><img className="record-dots" src={Silver} alt="" /> {location.silver}</p>
                <p><img className="record-dots" src={Green} alt="" /> {location.green}</p>
                <p> <img className="record-dots" src={Tan} alt="" /> {location.tan}</p>
            </div>
        </div>
    )
}
