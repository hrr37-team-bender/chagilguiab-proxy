var mysql = require('mysql');

module.exports = mysql.createConnection({
  database:'deepfryd_images',
  user: "root"
});

