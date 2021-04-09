const db = require("../config/database");

module.exports = {
  postScore,
  startRound,
  getHoleScore,
  getCurrentRound,
};

function postScore(req, res) {
  const holeIdx = req.body.holeIdx;
  const score = req.body.score;
  const roundId = req.body.roundId;
  const nickName = req.body.nickName;
  const date_played = req.body.date;
  const userId = req.body.userId;
  const completed = req.body.completed;
  db.query(
    "INSERT INTO rounds(roundId, holeIdx , score, nickName, date_played, userId, completed) VALUES (?,?, ?, ?, ?, ?, ?)",
    [roundId, holeIdx, score, nickName, date_played, userId, completed],
    (err, results) => {
      if (err) {
        console.log(err);
      } else console.log("Success");
    }
  );
}

function startRound(req, res) {
  const roundId = req.body.round;
  const nickName = req.body.nickName;
  const date_played = req.body.date;
  const userId = req.body.userId;
  const holeIdx = req.body.holeIdx;
  const score = req.body.score;
  const completed = req.body.completed;
  db.query(
    "INSERT INTO rounds(roundId, nickName, date_played, holeIdx, score, completed,  userId) VALUES (?,?,?,?,?,?, ?)",
    [roundId, nickName, date_played, holeIdx, score, completed, userId],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );
}

function getHoleScore(req, res) {
  db.query(
    `SELECT * FROM rounds WHERE roundId = '${req.params.roundid}'`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else console.log("success");
      res.json(results);
    }
  );
}

function getCurrentRound(req, res) {
  db.query(`SELECT * FROM rounds WHERE completed = 0`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
      console.log(results);
      res.json(results);
    }
  });
}
