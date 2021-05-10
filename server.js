const express  = require('express');
const knex = require('knex');

const app = express();
app.use(express.json());

app.listen(3000,() => {
	console.log(`app is running on port `)
})

const Pool = require('pg').Pool
const pool = new Pool({
  database: 'pawfriends',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM database_dogs', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

app.get('/users', getUsers)
