import React, { useState } from "react";
import "./newRound.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function NewRound({user, roundId}) {
  console.log(user)
  const [nickName, setNickName] = useState("");
  const [date, setDate] = useState();
  const [course, setCourse] = useState("The Farm D'Alie Golf Course");
  const history = useHistory();
  

  
  const handleNickNameInput = (e) => {
    setNickName(e.target.value)
  }

  const handleDateInput = (e) => {
    setDate(e.target.value);
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
  return (
    <div>
      <form className="new-round-form" onSubmit={() => startNewRound()}>
          <h3>New Round</h3>
          <div className="new-round-input">
        <input value={nickName} onChange={handleNickNameInput} className="new-round-input" placeholder="Name Your Round" default={course}></input>
        <input value={date} onChange={handleDateInput} className="new-round-input" type="date"></input>
          </div>
        <button  className="new-round-btn" type="submit">Start Round</button>
      </form>
    </div>
  );
}
