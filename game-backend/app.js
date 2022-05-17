const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes/highScoresRoutes");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8765;

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

const root = path.join(__dirname, "public");
app.use(express.static(root));
app.get("/", (_, res) => {
  res.sendFile("index.html", { root });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

mongoose
  .connect(process.env.DB_SERVER)
  .then(() => console.log("Connected to DB server"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server Up and running at ${port}`));
