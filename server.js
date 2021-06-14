require("newrelic");

const cors = require("cors");
const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const fs = require("fs");
const fileType = require("file-type");
const multiparty = require("multiparty");
const dotenv = require("dotenv").config();

const dogs = require("./controllers/Dogs/dog_api");
const excos = require("./controllers/Exco/exco_api");
const cms = require("./controllers/CMS/cms_api");
const mainpage = require("./controllers/MainPage/main_page_api");
const activitypage = require("./controllers/ActivityPage/activity_page_api");

app.use(cors());
app.use(express.json());

// AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: "public-read",
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

// Define POST route
app.post("/upload", (request, response) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) {
      return response.status(500).send(error);
    }
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = await fileType.fromBuffer(buffer);
      const fileName = `Images/${Date.now().toString()}`;
      const data = await uploadFile(buffer, fileName, type);

      return response.status(200).send(data);
    } catch (err) {
      console.log(err);
      return response.status(500).send(err);
    }
  });
});

const port = 3001;

app.listen(process.env.PORT || port, () => {
  console.log(`app is running on port ${process.env.PORT} `);
});

app.use((req, res, next) => {
  console.log(req.method + " " + req.url + " HTTP/" + req.httpVersion);
  console.log("-----------");
  next();
});

// Deployment settings
const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// const pool = new Pool({
//   database: "pawfriends",
//   port: 5432,
// });

module.exports = { pool };

app.get("/", (req, res) => {
  res.send("Server live!");
});

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
app.get("/activities", (req, res) => {
  activitypage.getActivityPosts(res, pool);
});

// CMS
app.patch("/update/dog", (req, res) => {
  cms.updateDog(req, res, pool);
});
app.post("/post/dog_image", (req, res) => {
  cms.postDogImage(req, res, pool);
});
app.patch("/update/exco", (req, res) => {
  cms.updateExco(req, res, pool);
});
app.patch("/update/mainpage", (req, res) => {
  cms.updateMainPageDescription(req, res, pool);
});
app.patch("/update/activity", (req, res) => {
  cms.updatePost(req, res, pool);
});
app.post("/post/activity", (req, res) => {
  cms.postActivity(req, res, pool);
});
app.get("/login", (req, res) => {
  cms.getUser(req, res, pool);
});
