const db = require('../config/database');


module.exports = {
    postScore,
}


function postScore(req, res) {
    const hole = req.body.holes;
    const course = req.body.course;
    const score = req.body.score
    db.query(`INSERT INTO rounds(holes, courseId, score) VALUES (?,?,?)`,[hole, course, score], (err, results) => {
        if(err) return res.status(401).json({err: 'Did not make it to databse'})
        return res.json(results)
    })
}
