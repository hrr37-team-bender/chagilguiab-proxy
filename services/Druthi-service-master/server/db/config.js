var mysql = require('mysql');

module.exports = mysql.createConnection({
  database:'deepfryd',
  user: "root"
});

