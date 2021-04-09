const express = require('express');
const router = express.Router();
const roundsCtrl = require('../controllers/rounds');

router.post('/newround', roundsCtrl.startRound);
router.post('/create', roundsCtrl.postScore);
router.get('/:roundid', roundsCtrl.getHoleScore);
router.get('/completed', roundsCtrl.getCurrentRound);

router.use(require('../config/auth'));

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;