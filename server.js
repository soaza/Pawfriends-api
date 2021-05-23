const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const dogs = require("./controllers/Dogs/dog_api");
const cms = require("./controllers/CMS/cms_api");

const port = 3001;

app.listen(port, () => {
  console.log(`app is running on port ${port} `);
});

app.use((req, res, next) => {
  console.log(req.method + " " + req.url + " HTTP/" + req.httpVersion);
  console.log("-----------");
  next();
});

const Pool = require("pg").Pool;
const pool = new Pool({
  database: "pawfriends",
  port: 5432,
});

module.exports = { pool };

app.get("/dogs", (req, res) => {
  dogs.getDogs(req, res, pool);
});
app.get("/login", (req, res) => {
  cms.getUser(req, res, pool);
});
