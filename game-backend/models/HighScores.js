const mongoose = require("mongoose");

const HighScoresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("HighScores", HighScoresSchema);
