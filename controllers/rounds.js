const db = require("../config/database");

module.exports = {
  postScore,
  startRound,
};

function postScore(req, res) {
    console.log(req.body)
  const holeIdx = req.body.holeIdx;
  const score = req.body.score;
  db.query(
    "INSERT INTO rounds(holeIdx , score) VALUES (?,?)",
    [holeIdx, score],
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
  db.query("INSERT INTO rounds(roundId, nickName, date_played, userId) VALUES (?,?)", [roundId, nickName, date_played, userId], (err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log("Success");
    }
  })
}


