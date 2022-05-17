const router = require("express").Router();
const highScoresController = require("../controllers/highScoresController");

router.post("/new-high-score", highScoresController.addHighScore);
router.get("/high-scores", highScoresController.getHighScores);

module.exports = router;
