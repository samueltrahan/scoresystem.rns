import React from 'react';
import './ScorecardPage.css';
import {scoreCardDB} from '../../scorecardDB';
import Scorecard from '../../components/Scorecard/Scorecard';

export default function ScarecardPage() {
    return (
        <div>
            <div>
                <button className="new-round-btn">New Round</button>
            </div>
            {scoreCardDB.map(scorecard => 
             <Scorecard scorecard={scorecard} />    
            )}
        </div>
    )
}
