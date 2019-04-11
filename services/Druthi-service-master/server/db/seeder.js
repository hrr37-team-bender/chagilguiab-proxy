const data = require('../../data');
const db = require('./db.js');

var seeder = () => {
  data.forEach((record) => {
    const { id, image_url } = record;
    let query = `INSERT INTO images (product_id, image_url) VALUES (?,?)`;
    db.query(query, [id, image_url], (err, results) => {
      if(err){
        console.log(err, null);
      }else{
        console.log(results);
      }
    })
  })
};

seeder();