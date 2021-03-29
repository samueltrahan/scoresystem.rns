const db = require("../config/database");

module.exports = {
  postScore,
  startRound,
};

function postScore(req, res) {
    console.log(req.body)
  const holeIdx = req.body.holeIdx;
  const score = req.body.score;
  const roundId = req.body.roundId;
  const nickName = req.body.nickName;
  const date_played = req.body.date;
  const userId = req.body.userId;
  db.query(
    "INSERT INTO rounds(roundId, holeIdx , score, nickName, date_played, userId) VALUES (?,?, ?, ?, ?, ?)",
    [roundId, holeIdx, score, nickName, date_played, userId],
    (err, results) => {
      if (err) {
        console.log(err)
      } else
      console.log("Success");
    }
  );
}

function startRound(req, res) {
  console.log(req.body)
  const roundId = req.body.round;
  const nickName = req.body.nickName;
  const date_played = req.body.date;
  const userId = req.body.userId;
  const holeIdx = req.body.holeIdx;
  const score = req.body.score;
  db.query("INSERT INTO rounds(roundId, nickName, date_played, holeIdx, score,  userId) VALUES (?,?,?,?,?,?)", [roundId, nickName, date_played, holeIdx, score, userId], (err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log("Success");
    }
  })
}


