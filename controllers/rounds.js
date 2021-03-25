const db = require("../config/database");

module.exports = {
  postScore,
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
