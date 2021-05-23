const express  = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = 3001

app.listen(port,() => {
	console.log(`app is running on port ${port} `)
})

app.use(function (req, res, next) {

  console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
  console.log('-----------')
  next();
});

const Pool = require('pg').Pool
const pool = new Pool({
  database: 'pawfriends',
  port: 5432,
})

const getDogs = (request, response) => {
    const query = 'SELECT * FROM database_dogs'
    pool.query(query, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUser = (request, response) => {
  const username = 'pawfriends_admin'
  const password = 'maple123dd'
  const query = `SELECT * FROM database_cms_account WHERE username = $1 AND user_password = $2`
  console.log(query)
  pool.query(query,[username,password],(error,results) => {
    if (error) {
       console.log(error)
       response.status(404).json({response:'Error'})
    } else {
      if(results.rows.length == 0)  response.status(404).json({response:'User not found'})
      else response.status(200).json(results.rows)
    }
  })
}


app.get('/dogs', getDogs)
app.get('/login',getUser)
