import React, { useState } from "react";
import "./newRound.css";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import {useHistory, useParams} from 'react-router-dom';

export default function NewRound({user}) {
  const [roundId, setRoundId] = useState(uuidv4());
  const [nickName, setNickName] = useState("");
  const [date, setDate] = useState();
  const [course, setCourse] = useState("The Farm D'Alie Golf Course");
  const history = useHistory();
  const {id} = useParams();

  
  const handleNickNameInput = (e) => {
    e.preventDefault();
    setNickName(e.target.value)
  }

  const handleDateInput = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  }

  function startNewRound() {
    axios.post('http:localhost:3001/api/rounds/newround', {
      round: roundId,
      nickName: nickName,
      date: date,
      userId: user.id
    })
    history.push(`/scorecard/${roundId}`)
  }
  return (
    <div>
      <form className="new-round-form" onSubmit={() => startNewRound()}>
          <h3>New Round</h3>
          <div className="new-round-input">
        <input onChange={handleNickNameInput} className="new-round-input" placeholder="Name Your Round" default={course}></input>
        <input onChange={handleDateInput} className="new-round-input" type="date"></input>
          </div>
        <button  className="new-round-btn" type="submit">Start Round</button>
      </form>
    </div>
  );
}
