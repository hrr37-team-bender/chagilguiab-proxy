const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const generateData = require('./db/dummy-data.js');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(morgan());
app.use(bodyParser());
app.use(cors());

app.get('/images/:id', function (req, res) {
  db.query(`SELECT * FROM images where product_id=${req.params.id}`, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results);
  });
});

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));