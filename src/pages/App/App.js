import React, { useState } from "react";
import { Route, Switch} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
import UserPage from "../UserPage/UserPage";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../../components/Footer/Footer";



import ScoreCardPage from '../../pages/ScoreCardPage/ScoreCardPage';

import userService from "../../services/userService";

import "./App.css";

const App = () => {
  const [user, setUser] = useState("");


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

          <Route
          exact
          path="/scorecard"
          render={() => (
            <ScoreCardPage
    
            />
          )}
        ></Route>

        
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
