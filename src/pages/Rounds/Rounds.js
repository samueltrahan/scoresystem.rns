import React from 'react';
import './Rounds.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Rounds() {
    return (
        <div className="rounds-page">
            <div className="btn-section">
                <Link to="/newround" className="rounds-btn">Start New Round</Link>
            </div>
            <div>

            </div>
        </div>
    )
}
