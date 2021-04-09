import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';

export default function LandingPage({completed, getCurrentRound, roundId}) {
    return (
        <div className="landing-page">
            <div className="landing-image">
                <img className="landing-img" src="/images/caddie-logo.png" alt=""></img>
            </div>
            {completed ? (
            <div className="scorecard">
            <Link className="landing-link" to="/newround">SCORECARD</Link>
            </div>
            ) : (
            <div className="scorecard">
                <Link className="landing-link" to={`/scorecard/${roundId}`}>SCORECARD</Link>
            </div>
            )
            }
            <div className="leaderboard">
            <Link className="landing-link" to="scorecard">LEADERBOARD</Link>
            </div>
            <div className="news">
            <Link className="landing-link" to="scorecard">NEWS</Link>
            </div>
            <div className="calendar">
            <Link className="landing-link" to="scorecard">CALENDAR</Link>
            </div>
        </div>
    )
}
