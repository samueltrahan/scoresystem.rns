const db = require('../config/database');


module.exports = {
    postScore,
}


function postScore(req, res) {
    console.log(req.body)
    const roundId = req.body.roundId;
    const holeIdx = req.body.holeIdx;
    const score = req.body.score
    db.query(`INSERT INTO rounds(roundId, holeIdx , score) VALUES (?,?,?)`,[roundId, holeIdx, score], (err, results) => {
        if(err) return res.status(400).json({err: 'Did not make it to databse'})
        return res.json('Success')
    })
}
