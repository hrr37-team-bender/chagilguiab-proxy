const db = require ('../database/index.js');
const stereo_data = require ('../faq_data.js');

const seedDatabase = () => {
  stereo_data.forEach(function(obj) {
    let { id, deepfryd_id, features, question, answer } = obj;

    let queryString = `INSERT INTO stereos (id, deepfryd_id, features, question, answer) VALUES (?, ?, ?, ?, ?)`;
    db.connection.query(queryString, [id, deepfryd_id, features, question, answer], (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('good job');
    });
  });
};

seedDatabase();