const HighScores = require("../models/HighScores");

const addHighScore = async (req, res) => {
  console.log("aaaaaaa");
  console.log("body", req.body);

  try {
    await HighScores.create({
      name: req.body.name,
      score: req.body.score,
    });
    res.status(200).send();
  } catch (e) {
    console.log("error", e);
  }
};

const getHighScores = async (_, res) => {
  try {
    await HighScores.find({})
      .sort({ score: -1 })
      .limit(10)
      .exec((_, scores) => res.status(200).json(scores));
  } catch (e) {
    console.log("error", e);
  }
};

module.exports = { getHighScores, addHighScore };
