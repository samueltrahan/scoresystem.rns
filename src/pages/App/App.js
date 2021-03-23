import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import NavBar from "../../components/NavBar/NavBar";

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from '../ResetPasswordPage/ResetPasswordPage'
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import ScorecardPage from '../ScoreCardPage/ScarecardPage';
import Footer from '../../components/Footer/Footer';
import RecordScore from '../RecordScore/RecordScore';
import RecordFairways from '../RecordFairways/RecordFairways';
import RecordGreens from '../RecordGreens/RecordGreens';
import RecordPutts from '../RecordPutts/RecordPutts';

import userService from '../../services/userService';
import {scoreCardDB} from '../../scorecardDB';

import "./App.css";

const App = () => {
  const [user, setUser] = useState('');
  const [scoreCard, setScoreCard] =useState([])
  const [score, setScore] = useState();
  const [fairways, setFairways] = useState(false);
  const [round, setRound] = useState(uuidv4());
  const history = useHistory();

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const determineError = (msg) => {
    if (msg.includes('Error')) return 'red-text'
    return 'green-text'
  }

  const getScorecard = () => {
    scoreCardDB.map((sc) => {
      setScoreCard([...scoreCard, sc ])
    })
  }

  const handleScoring = (e, score, hole) => {
    setScore(score)
    axios.post(`http://localhost:3001/api/rounds/create`,{
      roundId: round,
      holeIdx: hole,
    })
    
    history.push('/scorecard')
  }

  const checkYes = () => {
    setFairways(true)
    history.push('/scorecard')
}

const checkNo =() => {
    setFairways(false)
    history.push('/scorecard')
}

  useEffect(() => {
    getScorecard()
  }, [])

  return (
    <>
      <NavBar 
        user={user}
        handleLogout={handleLogout}
      />

      <Switch>
        <Route path='/user/:id' render={() => 
          <>
            <UserPage />
          </>
        }></Route>

        <Route exact path="/login" render={({history}) => 
          <>
            <LoginPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
              determineError={determineError}
            />
          </>
        }></Route>

        <Route exact path="/signup" render={({history}) => 
          <>
            <SignupPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
              determineError={determineError}
            />
          </>
        }></Route>

        <Route exact path='/forgot' render={() => 
          <>
            <ForgotPasswordPage 
              determineError={determineError}
            />
          </>
        }></Route>

        <Route path='/resetpassword/:token' render={() => 
          <>
            <ResetPasswordPage 
              determineError={determineError}
            />
          </>
        }></Route>
        <Route exact path="/" render={() => 
        <LandingPage />
        }>
        </Route>
        <Route exact path="/scorecard" render={() => 
        <ScorecardPage user={user} score={score} fairways={fairways}/>
        }>
        </Route>
        <Route exact path="/score" render={() => 
          <RecordScore scoreCard={scoreCard} handleScoring={handleScoring}/>
        }>
        </Route>
        <Route exact path='/fairways' render={() =>
          <RecordFairways checkYes={checkYes} checkNo={checkNo}/>
        }>
        </Route>
        <Route exact path="/greens" render={() => 
          <RecordGreens />
        }>
        </Route>
        <Route exact path="/putts" render={() => 
        <RecordPutts />
        }>
        </Route>
      </Switch>
        <Footer />
    </>
  );
};

export default App;