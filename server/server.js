const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const db = pgp('users')
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3005
var request = require('request');
let level = 3

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

db.one('INSERT INTO users(name, active) VALUES($1, $2) RETURNING name', ['John', true])
.then(data => {
  console.log(data); // print new user id;
})
.catch(error => {
  console.log('ERROR:', error) // print error;
})

request(`http://127.0.0.1:1880/api/question/level?level=${level}`, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let obj = JSON.parse(body)
    console.log(obj.question) // Print the generated question.
  }
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`)
  })

module.exports = app;
