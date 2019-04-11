const db = require ('../database/index.js');
const stereo_data = require ('../stereo_data.js');

const seedDatabase = function (data) {
  data.forEach(function(obj) {
    let { id, product_name, product_category, deepfryd_id, model_number, average_rating, current_price, previous_price } = obj;

    let queryString = `INSERT INTO stereos (id, product_name, product_category, deepfryd_id, model_number, average_rating, current_price, previous_price) VALUES (${id}, '${product_name}', '${product_category}', '${deepfryd_id}', ${model_number}, ${average_rating}, ${current_price}, ${previous_price})`;
    db.connection.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('good job');
    })
  })
};

seedDatabase(stereo_data.stereo_data);