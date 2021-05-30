const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const dogs = require("./controllers/Dogs/dog_api");
const excos = require("./controllers/Exco/exco_api");
const cms = require("./controllers/CMS/cms_api");
const mainpage = require("./controllers/MainPage/main_page_api");

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

// General
app.get("/dogs", (req, res) => {
  dogs.getDogs(req, res, pool);
});
app.get("/excos", (req, res) => {
  excos.getExcos(req, res, pool);
});
app.get("/mainpage", (req, res) => {
  mainpage.getDescription(res, pool);
});

// CMS
app.patch("/update/dog", (req, res) => {
  cms.updateDog(req, res, pool);
});
app.patch("/update/exco", (req, res) => {
  cms.updateExco(req, res, pool);
});
app.patch("/update/mainpage", (req, res) => {
  cms.updateMainPageDescription(req, res, pool);
});
app.get("/login", (req, res) => {
  cms.getUser(req, res, pool);
});
