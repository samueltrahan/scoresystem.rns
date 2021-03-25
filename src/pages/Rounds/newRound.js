import React, { useState } from "react";
import "./newRound.css";
import { v4 as uuidv4 } from "uuid";

export default function NewRound() {
  const [roundId, setRoundId] = useState(uuidv4());
  const [nickName, setNickName] = useState("");
  const [date, setDate] = useState();
  const [course, setCourse] = useState("The Farm D'Alie Golf Course");
  return (
    <div>
      <form className="new-round-form">
          <h3>New Round</h3>
          <div className="new-round-input">
        <input className="new-round-input" placeholder="Name Your Round" default={course}></input>
        <input className="new-round-input" type="date"></input>
          </div>
        <button className="new-round-btn" type="submit">Start Round</button>
      </form>
    </div>
  );
}
