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
import Rounds from '../Rounds/Rounds';
import NewRound from '../Rounds/newRound';

import userService from '../../services/userService';


import "./App.css";

const App = () => {
  const [user, setUser] = useState('');
  const [scoreCard, setScoreCard] =useState([])
  const [score, setScore] = useState([]);
  const [roundId, setRoundId] = useState(uuidv4());
  const [hole, setHole] = useState()
  const [nickName, setNickName] = useState("");
  const [date, setDate] = useState();
  const [currentRoundId, setCurrentRoundId] = useState();
  const [currentHoleIdx, setCurrentHoleIdx] = useState();
  const [holeInfo, setHoleInfo] = useState([]);
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


  const handleScoring = (e, score, hole) => {
    setHole(hole)
   axios.post(`http://localhost:3001/api/rounds/create`,{
      holeIdx: hole,
      score: score,
      roundId: roundId,
      nickName: nickName,
      date: date,
      user: user.id
    })
    history.push(`/scorecard/${roundId}`)
  }

  function startNewRound() {
    axios.post('http://localhost:3001/api/rounds/newround', {
      round: roundId,
      nickName: nickName,
      date: date,
      userId: user.id,
      holeIdx: 0,
      score: 0,
    })
    history.push(`/scorecard/${roundId}`)
  }

  const getHoleScore = async () => {
   await axios.get(`http://localhost:3001/api/rounds/score`)
    .then(response => {
      setHoleInfo(response.data)
    })
    .catch((err) => console.log(err))

  }


  const getCurrentHoleInfo = async () => {
    await holeInfo.map(info => {
      setCurrentHoleIdx(info.holeIdx)
      setScore([...score, info]);
      console.log(currentHoleIdx)
      console.log(score)
    }) 
  }




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
        <Route exact path="/scorecard/:id" render={() => 
        <ScorecardPage user={user} />
        }>
        </Route>
        <Route exact path='/score' render={() => 
          <RecordScore  scoreCard={scoreCard} handleScoring={handleScoring} roundId={roundId}/>
        }>
        </Route>
        <Route exact path='/fairways' render={() =>
          <RecordFairways />
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
        <Route exact path="/rounds" render={() => 
        <Rounds />
        }></Route>
        <Route exact path="/newround" render={() =>
        <NewRound user={user} roundId={roundId} startNewRound={startNewRound} setNickName={setNickName} setDate={setDate} />
        }></Route>
      </Switch>
        <Footer />
    </>
  );
};

export default App;