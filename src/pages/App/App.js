import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import NavBar from "../../components/NavBar/NavBar";

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
import UserPage from "../UserPage/UserPage";
import LandingPage from "../LandingPage/LandingPage";
import ScorecardPage from "../ScoreCardPage/ScorecardPage";
import Footer from "../../components/Footer/Footer";
import RecordScore from "../RecordScore/RecordScore";
import NewRound from "../Rounds/newRound";

import userService from "../../services/userService";

import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  const [roundId, setRoundId] = useState(uuidv4());
  const [hole, setHole] = useState();
  const [nickName, setNickName] = useState("");
  const [score, setScore] = useState([]);
  const [date, setDate] = useState();
  const [scorecardInfo, setScorecardInfo] = useState();
  const history = useHistory();
  const [completed, setCompleted] = useState();

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const determineError = (msg) => {
    if (msg.includes("Error")) return "red-text";
    return "green-text";
  };

  
  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />

      <Switch>
        <Route
          path="/user/:id"
          render={() => (
            <>
              <UserPage />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/login"
          render={({ history }) => (
            <>
              <LoginPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                determineError={determineError}
              />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <>
              <SignupPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                determineError={determineError}
              />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/forgot"
          render={() => (
            <>
              <ForgotPasswordPage determineError={determineError} />
            </>
          )}
        ></Route>

        <Route
          path="/resetpassword/:token"
          render={() => (
            <>
              <ResetPasswordPage determineError={determineError} />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/"
          render={() => (
            <LandingPage
    
            />
          )}
        ></Route>

        
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
