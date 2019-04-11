const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 3000;


app.use(morgan());
app.use(cors());

app.use('/products/:id', express.static(__dirname + '/../client/dist'));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});