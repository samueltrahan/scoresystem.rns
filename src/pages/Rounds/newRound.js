import React, { useState } from "react";
import "./newRound.css";
import { v4 as uuidv4 } from "uuid";

export default function NewRound() {
  const [roundId, setRoundId] = useState(uuidv4());
  const [nickName, setNickName] = useState("");
  const [date, setDate] = useState();
  const [course, setCourse] = useState(1);
  return (
    <div>
      <form>New Round Form</form>
    </div>
  );
}
