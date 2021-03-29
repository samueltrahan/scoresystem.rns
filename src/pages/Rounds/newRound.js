import React, { useState } from "react";
import "./newRound.css";


export default function NewRound({startNewRound, setNickName, setDate}) {
 
  

  
  const handleNickNameInput = (e) => {
    setNickName(e.target.value)
  }

  const handleDateInput = (e) => {
    setDate(e.target.value);
  }

  
  return (
    <div>
      <form className="new-round-form" onSubmit={() => startNewRound()}>
          <h3>New Round</h3>
          <div className="new-round-input">
        <input onChange={handleNickNameInput} className="new-round-input" placeholder="Name Your Round"></input>
        <input onChange={handleDateInput} className="new-round-input" type="date"></input>
          </div>
        <button  className="new-round-btn" type="submit">Start Round</button>
      </form>
    </div>
  );
}
